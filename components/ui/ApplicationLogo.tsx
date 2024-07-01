import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeThemes } from "@/utils/Interfaces/UI";

const ApplicationLogo: React.FC<{
    theme?: TypeThemes;
    className?: string;
    href?: string;
    iconOnly?: boolean;
    width?: number;
    height?: number;
}> = ({ theme = "light", className, href, iconOnly = false, width = 120, height = 29 }): JSX.Element => {
    return href ? (
        <Link href={href} className={className}>
            <Image src={`/images/app-logo-for-${theme}${iconOnly ? "-icon" : ""}.svg`} width={iconOnly ? height : width} height={height} alt="Admintool" />
        </Link>
    ) : (
        <Image src={`/images/app-logo-for-${theme}${iconOnly ? "-icon" : ""}.svg`} width={iconOnly ? height : width} height={height} alt="Admintool" />
    );
};

export default ApplicationLogo;
