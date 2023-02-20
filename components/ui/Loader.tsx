import React from "react";
import classNames from "classnames";
import StyleLoader from "@/sass/components/loader.module.scss";

interface LoaderProps {
    className?: string;
    label?: string;
    size?: 12 | 16 | 18 | 24 | 32;
}

export const BlobLoader: React.FC<LoaderProps> = ({ className, label = "Loading...", size = 12 }): JSX.Element => {
    return (
        <span className={StyleLoader.blobContainer} data-label={label}>
            <strong className={classNames(StyleLoader.blob, className)} data-size={size}>
                <span className={StyleLoader.contain}>
                    <span className={StyleLoader.dot}></span>
                    <span className={StyleLoader.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </span>
            </strong>
        </span>
    );
};

export const PillLoader: React.FC<LoaderProps> = ({ className, label = "Loading..." }): JSX.Element => {
    return (
        <strong className={classNames(StyleLoader.pill, className)} data-label={label}>
            <span className={StyleLoader.bar}>
                <span className={StyleLoader.progress} />
            </span>
        </strong>
    );
};
