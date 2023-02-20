import React from "react";
import StyleGuest from "@/styles/layout/Emphasis.module.css";
import Composition from "@/components/ui/Composition";

interface EmphasisProps {
    title: string;
    collapsible?: boolean;
    children: React.ReactNode;
}

const Emphasis: React.FC<EmphasisProps> = ({ title, collapsible, children }) => {
    const [toggleHideShow, setToggleHandler] = React.useState<boolean>(false);
    return (
        <div className={StyleGuest.emphasis}>
            <Composition wrapper="h6" className={StyleGuest.header} primary={title} />
            <span
                className={StyleGuest.content}
                onClick={() => {
                    setToggleHandler(!toggleHideShow);
                }}
            >
                {collapsible && <div>{toggleHideShow ? "Hide" : "Show"}</div>}
            </span>
            {!collapsible ? <div>{children}</div> : <div>{toggleHideShow && <div>{children}</div>}</div>}
        </div>
    );
};

export default Emphasis;
