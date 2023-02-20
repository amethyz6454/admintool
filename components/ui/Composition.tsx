import React from "react";
import classNames from "classnames";
import StyleComposition from "@/sass/components/composition.module.scss";
import { TypeVariantColors } from "@/utils/Interfaces/UI";

// type CompositionType<TText> = {
//     readonly [Key in keyof TText]: TText[Key];
// };

// type ResultComposition = CompositionType<CompositionProps>;

interface CompositionBaseProps {
    className?: string;
    wrapper?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface CompositionProps {
    pre?: string | React.ReactNode;
    primary: string | React.ReactNode;
    sub?: string | React.ReactNode;
    color?: TypeVariantColors | "inherit";
    fontWeight?: "lite" | "normal" | "medium" | "semibold" | "bold" | "black";
    textAlign?: "left" | "right" | "center";
    gutterBottom?: boolean;
    gutterTop?: boolean;
}

const CompositionWrapper: React.FC<CompositionBaseProps & { children: React.ReactNode }> = ({
    children,
    wrapper: Component = "p",
    className,
}): JSX.Element => {
    return <Component className={className}>{children}</Component>;
};

const Composition: React.FC<CompositionBaseProps & CompositionProps> = ({
    pre,
    sub,
    primary,
    wrapper = "p",
    className,
    color = "default",
    fontWeight = "normal",
    textAlign = "left",
    gutterBottom = false,
    gutterTop = false,
}): JSX.Element => {
    const ComponentWrapper = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        p: "paragraph",
        span: "text-inline",
    };

    return (
        <CompositionWrapper
            wrapper={wrapper}
            className={classNames(
                StyleComposition[ComponentWrapper[wrapper]],
                StyleComposition[color],
                StyleComposition[fontWeight],
                StyleComposition["align-" + textAlign],
                { [StyleComposition.gutterBottom]: gutterBottom, [StyleComposition.gutterTop]: gutterTop },
                className
            )}
        >
            {pre && <small className={StyleComposition.pre}>{pre}</small>}
            {primary}
            {sub && <small className={StyleComposition.sub}>{sub}</small>}
        </CompositionWrapper>
    );
};

export default Composition;
