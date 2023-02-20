import React from "react";
import classNames from "classnames";
import { TypeGaps, TypeGridLengths } from "@/utils/Interfaces/UI";
import StyleGrid from "@/sass/components/grid.module.scss";

interface GridProps extends React.HtmlHTMLAttributes<HTMLDivElement | HTMLFormElement> {
    as?: "form" | "div";
    children: React.ReactNode;
    className?: string;
    gap?: TypeGaps;
    verticalAlign?: "center" | "flex-end" | "space-between";
}

const GridContainer: React.FC<GridProps> = ({ children, as: Component = "div", ...options }): JSX.Element => {
    return <Component {...options}>{children}</Component>;
};

export const Grid: React.FC<GridProps> = ({
    as,
    children,
    className,
    gap = 24,
    verticalAlign,
    ...options
}): JSX.Element => {
    return (
        <GridContainer
            className={classNames(StyleGrid.grid, { [StyleGrid[verticalAlign]]: !!verticalAlign }, className)}
            data-grid-gap={gap}
            as={as}
            {...options}
        >
            {children}
        </GridContainer>
    );
};

export const GridSpacer: React.FC = (): JSX.Element => {
    return <div className={classNames(StyleGrid["grid-spacer"])} />;
};

export const GridBreak: React.FC = (): JSX.Element => {
    return <div className={classNames(StyleGrid["grid-break"])} />;
};

export interface GridColProps {
    children: React.ReactNode;
    className?: string;
    grid?: TypeGridLengths;
}

export const GridCol: React.FC<GridColProps> = ({ children, className, grid }): JSX.Element => {
    return (
        <div className={classNames(StyleGrid.default, { [StyleGrid["grid-" + grid]]: !!grid }, className)}>
            {children}
        </div>
    );
};
