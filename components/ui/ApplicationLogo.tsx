import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeThemes } from "@/utils/Interfaces/UI";

const ApplicationLogo: React.FC<{ theme?: TypeThemes; className?: string; href: string; iconOnly?: boolean }> = ({
    theme = "light",
    className,
    href,
    iconOnly = false,
}): JSX.Element => {
    return (
        <Link href={href}>
            <a className={className}>
                <Image
                    src={`/images/PayStage-logo-for-${theme}${iconOnly ? "" : "-icon"}.svg`}
                    width={iconOnly ? 120 : 29}
                    height={29}
                    alt="PayStage"
                />
            </a>
        </Link>
    );
};

export default ApplicationLogo;
