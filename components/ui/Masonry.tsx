import classNames from "classnames";
import React from "react";
import { TypeColumnCount, TypeGaps } from "@/utils/Interfaces/UI";
import StyleMasonry from "@/sass/components/masonry.module.scss";

interface MasonryProps {
    children: React.ReactNode;
    className?: string;
    cols?: TypeColumnCount;
    gap?: TypeGaps;
}

export const Masonry: React.FC<MasonryProps> = ({ children, className, cols = 2, gap = 16 }): JSX.Element => {
    return (
        <div className={classNames(StyleMasonry.masonry, className)} data-item={cols} data-grid-gap={gap}>
            {children}
        </div>
    );
};

interface MasonryItemProps {
    children: React.ReactNode;
    className?: string;
}

export const MasonryItem: React.FC<MasonryItemProps> = ({ children, className }): JSX.Element => {
    return <div className={classNames(StyleMasonry.item, className)}>{children}</div>;
};
