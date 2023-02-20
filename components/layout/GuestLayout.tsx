import React from "react";
import classNames from "classnames";
import ApplicationLogo from "@/components/ui/ApplicationLogo";
import Composition from "@/components/ui/Composition";
import StyleGuest from "@/sass/layouts/guest.module.scss";
import StyleGrid from "@/sass/components/grid.module.scss";
import { TypeGaps } from "@/utils/Interfaces/UI";

export const GuestSliderItem: React.FC<{ title: string; message?: string }> = ({ title, message }) => {
    return (
        <div className={StyleGuest.item}>
            <ApplicationLogo />
            <div className={StyleGuest.caption}>
                <Composition wrapper="h5" primary={title} />
                <Composition primary={message} />
            </div>
        </div>
    );
};

export const GuestLayout: React.FC<{
    title: string;
    subtext: string;
    children: React.ReactNode;
    slides: React.ReactNode;
    enableGrid?: Boolean;
    gap?: TypeGaps;
}> = ({ title, subtext, children, slides, enableGrid = false, gap = 24 }) => {
    return (
        <div className={StyleGuest.main}>
            <div className={StyleGuest.panel}>
                <div className={StyleGuest.side}>
                    <div className={StyleGuest.logo}>
                        <ApplicationLogo />
                        <div className={StyleGuest.slides}>{slides}</div>
                    </div>
                </div>
                <div className={StyleGuest.form}>
                    <div className={StyleGuest.head}>
                        <Composition wrapper="h4" fontWeight="lite" primary={title} />
                        <Composition primary={subtext} />
                    </div>
                    <div
                        className={classNames(StyleGuest.body, { [StyleGrid.grid]: enableGrid })}
                        data-grid-gap={enableGrid ? gap : null}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestLayout;
