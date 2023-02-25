import React from "react";
import Image from "next/image";
import StyleError from "@/styles/components/Error.module.css";

export const ErrorLayout: React.FC<{ title: string; subtitle: string; image: string; children: React.ReactNode }> = ({
    title,
    subtitle,
    image,
    children,
}) => {
    return (
        <div className={StyleError.fullErrorBox}>
            <div className={StyleError.ErrorCenteredBox}>
                <div className={StyleError.ErrorTopImg}>
                    <Image src={image} width={240} height={240} alt={`Admintool - ${title}`} />
                </div>
                <h1 className={StyleError.title}>{title}</h1>
                <h5 className={StyleError.subtitle}>{subtitle}</h5>
                <div className={StyleError.ErrorFooter}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ErrorLayout;
