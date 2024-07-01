import ReactDOM from "react-dom";
import React from "react";
import classNames from "classnames";
import StyleTooltip from "@/sass/components/tooltip.module.scss";

const Tooltip: React.FC<{
    title: React.ReactNode;
    placement?: "bottom" | "left" | "right" | "top";
    children: React.PropsWithChildren<any>;
}> = ({ title, placement = "top", children }): JSX.Element => {
    const mouseEnterDelay = 10;
    const mouseLeaveDelay = 10;

    const childrenRef = React.useRef([]);
    const tooltipRef = React.useRef<HTMLDivElement>(null);

    const portalContainer = typeof document !== "undefined" && document.querySelector("#__next");

    const [mouseEnterDelayTimer, setMouseEnterDelayTimer] = React.useState(null);
    const [mouseLeaveDelayTimer, setMouseLeaveDelayTimer] = React.useState(null);

    // const [isVisible, setIsVisible] = React.useState(false);
    // const [isVisible, setIsVisible] = React.useState(true);
    const [childRect, setChildRect] = React.useState(null);

    const newChild = React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
            key: index,
            onMouseEnter: (e: React.MouseEvent) => {
                child.props.onMouseEnter?.(e);

                if (mouseLeaveDelayTimer) {
                    clearTimeout(mouseLeaveDelayTimer);
                    setMouseLeaveDelayTimer(null);
                    return;
                }

                setMouseEnterDelayTimer(
                    setTimeout(() => {
                        clearTimeout(mouseEnterDelayTimer);
                        setMouseEnterDelayTimer(null);
                        // setIsVisible(true);
                        setChildRect(childrenRef?.current[index].getBoundingClientRect());
                    }, mouseEnterDelay)
                );
            },
            onMouseLeave: (e: React.MouseEvent) => {
                child.props.onMouseLeave?.(e);

                if (mouseEnterDelayTimer) {
                    clearTimeout(mouseEnterDelayTimer);
                    setMouseEnterDelayTimer(null);
                    return;
                }

                setMouseLeaveDelayTimer(
                    setTimeout(() => {
                        clearTimeout(mouseLeaveDelayTimer);
                        setMouseLeaveDelayTimer(null);
                        // setIsVisible(false);
                        setChildRect(null);
                    }, mouseLeaveDelay)
                );
            },
            ref: (ref: React.ReactNode) => (childrenRef.current[index] = ref),
        })
    );

    // if (isVisible) {
    if (childRect) {
        // console.log(window.innerWidth);
        // console.log(tooltipRect);

        // const tooltipRect =
        //     typeof tooltipRef.current?.getBoundingClientRect() !== "undefined" &&
        //     tooltipRef.current?.getBoundingClientRect();

        // console.log(" window", window?.innerHeight);
        // console.log("tooltip", tooltipRect?.y + tooltipRect?.height);
        // console.log(window?.innerHeight < tooltipRect.y + tooltipRect.height);

        const setPlacement = {
            top: {
                top: childRect.bottom - (childRect.height + 16),
                left: childRect.x + childRect.width / 2,
                transform: "translate(-50%, -100%)",
            },
            bottom: {
                top: childRect.bottom + 16,
                left: childRect.x + childRect.width / 2,
                transform: "translate(-50%, 0%)",
            },
            left: {
                top: childRect.y + childRect.height / 2,
                left: childRect.left - 16,
                transform: "translate(-100%, -50%)",
            },
            right: {
                top: childRect.y + childRect.height / 2,
                left: childRect.x + childRect.width + 16,
                transform: "translate(0%, -50%)",
            },
        };

        // const computedPlacement =
        //     placement === "bottom" && window?.innerHeight < tooltipRect.y + tooltipRect.height
        //         ? setPlacement[placement]
        //         : setPlacement["top"];

        const computedPlacement = setPlacement[placement];

        const portal = ReactDOM.createPortal(
            <div className={StyleTooltip.tooltip} style={computedPlacement} ref={tooltipRef}>
                <div className={StyleTooltip.wrapper}>{title}</div>
                <span className={classNames(StyleTooltip.arrow, StyleTooltip[placement])}></span>
            </div>,
            portalContainer
        );

        return (
            <React.Fragment>
                {newChild}
                {portal}
            </React.Fragment>
        );
    }

    return newChild;
};

export default Tooltip;
