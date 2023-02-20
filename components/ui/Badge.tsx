import React from "react";
import classNames from "classnames";
import { TypeGaps, TypeVariantColors } from "@/utils/Interfaces/UI";
import StyleBadge from "@/sass/components/badge.module.scss";

interface BadgeProps {
    shape?: "pill" | "circle";
    children: React.ReactNode;
    className?: string;
    size?: TypeGaps;
    variant?: TypeVariantColors;
}

const Badge: React.FC<BadgeProps> = ({
    shape = "pill",
    children,
    className,
    size = 8,
    variant = "danger",
}): JSX.Element => {
    return (
        <span
            className={classNames(StyleBadge.badge, StyleBadge[variant], StyleBadge[shape], className)}
            data-badge-size={size}
        >
            {children}
        </span>
    );
};

export default Badge;
