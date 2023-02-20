import React from "react";
import Image from "next/image";
import StyleGuest from "@/styles/layout/Guest.module.css";

export const GuestSliderItem: React.FC<{ title: string; image: string; message?: string }> = ({
    title,
    image,
    message,
}) => {
    return (
        <div className={StyleGuest.item}>
            <Image src={image} width={200} height={200} alt={`PayStage - ${title}`} />
            <div className={StyleGuest.caption}>
                <h5>{title}</h5>
                <p>{message}</p>
            </div>
        </div>
    );
};

export const GuestLayout: React.FC<{
    title: string;
    subtext: string;
    children: React.ReactNode;
    slides: React.ReactNode;
}> = ({ title, subtext, children, slides }) => {
    return (
        <div className={StyleGuest.fullBox}>
            <div className={StyleGuest.guestMainBox}>
                <div className={StyleGuest.guestContentBox}>
                    <div className={StyleGuest.logo}>
                        <Image src={"/images/paystage-logo.svg"} width={120} height={29} alt={`PayStage - ${title}`} />
                    </div>
                    <div className={StyleGuest.slider}>
                        {slides}
                        <div className={StyleGuest.abstracts}>
                            <div className={`${StyleGuest.abstracts} ${StyleGuest.a}`} />
                            <div className={`${StyleGuest.abstracts} ${StyleGuest.b}`} />
                            <div className={`${StyleGuest.abstracts} ${StyleGuest.c}`} />
                            <div className={`${StyleGuest.abstracts} ${StyleGuest.d}`} />
                        </div>
                    </div>
                    <div className={`${StyleGuest.patterns} ${StyleGuest.bottom}`}>
                        <div className={`${StyleGuest.pattern} ${StyleGuest.a}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.b}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.c}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.d}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.e}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.f}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.g}`} />
                        <div className={`${StyleGuest.pattern} ${StyleGuest.h}`} />
                    </div>
                </div>
                <div className={StyleGuest.composition}>
                    <div className="text-center">
                        <h4 className={StyleGuest.title}>{title}</h4>
                        <p className={StyleGuest.subtext}>{subtext}</p>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default GuestLayout;
