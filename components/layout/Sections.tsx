import React from "react";
import StyleSection from "@/sass/layouts/section.module.scss";
import { TypeGaps } from "@/utils/Interfaces/UI";

interface SectionProps {
    children: React.ReactNode;
    gap?: TypeGaps;
}

export const SectionGroup: React.FC<SectionProps> = ({ children, gap = 16 }): JSX.Element => {
    return (
        <div className={StyleSection.group}>
            <div className={StyleSection.groupInner} data-grid-gap={gap}>
                {children}
            </div>
        </div>
    );
};

export const SectionMain: React.FC<SectionProps> = ({ children }): JSX.Element => {
    return <div className={StyleSection.main}>{children}</div>;
};

export const SectionSide: React.FC<SectionProps> = ({ children }): JSX.Element => {
    return (
        <div className={StyleSection.side}>
            <div className={StyleSection.sideInner}>{children}</div>
        </div>
    );
};
