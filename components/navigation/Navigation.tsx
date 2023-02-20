import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import {
    TypeContentAlignments,
    TypeIconSizes,
    TypeItemAlignments,
    TypeOrientations,
    TypePlacements,
} from "@/utils/Interfaces/UI";
import Badge from "@/components/ui/Badge";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import StyleNav from "@/sass/components/navigation.module.scss";

interface NavigationBaseProps {
    alignItems?: TypeItemAlignments;
    badge?: React.ReactNode;
    badgeImage?: string;
    badgePlacement?: TypePlacements;
    badgeText?: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: TypeIconNames;
    iconSize?: TypeIconSizes;
    image?: string;
    justifyContent?: TypeContentAlignments;
    orientation?: TypeOrientations;
    alt?: string;
}
interface NavigationProps extends NavigationBaseProps {
    appearance?: "line" | "button" | "icon";
    sticky?: boolean;
    wrapperProps?: {
        wrapperAlignItems?: TypeItemAlignments;
        wrapperJustifyContent?: TypeContentAlignments;
    };
}

export const Navigation: React.FC<NavigationProps> = ({
    alignItems,
    justifyContent,
    appearance = "line",
    orientation = "horizontal",
    children,
    className,
    disabled,
    iconSize = 120,
    sticky = false,
    wrapperProps = { wrapperAlignItems: null, wrapperJustifyContent: null },
}): JSX.Element => {
    return (
        <nav
            className={classNames(
                StyleNav.wrapper,
                StyleNav["ai-" + wrapperProps.wrapperAlignItems],
                StyleNav["jc-" + wrapperProps.wrapperJustifyContent],
                className,
                { disabled: disabled, [StyleNav.isSticky]: sticky }
            )}
        >
            <ul
                className={classNames(
                    StyleNav.list,
                    StyleNav[appearance],
                    StyleNav[orientation],
                    StyleNav["ai-" + alignItems],
                    StyleNav["jc-" + justifyContent]
                )}
                data-icon-size={appearance === "icon" ? iconSize : null}
            >
                {children}
            </ul>
        </nav>
    );
};

interface NavigationItemProps extends NavigationBaseProps {
    appearance?: "solid" | "transparent";
    href?: string;
    onClick?: () => void;
    selected?: boolean;
}

const NavigationItemContainer: React.FC<NavigationItemProps> = ({
    children,
    className,
    href,
    onClick,
}): JSX.Element => {
    return (
        <>
            {href ? (
                <Link href={href}>
                    <a className={classNames(StyleNav.link, className)}>{children}</a>
                </Link>
            ) : (
                <span className={classNames(StyleNav.link, className)} onClick={onClick}>
                    {children}
                </span>
            )}
        </>
    );
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
    alt,
    alignItems,
    appearance = "solid",
    badge,
    badgeImage,
    badgePlacement = "top-start",
    badgeText,
    children,
    className,
    href,
    icon,
    image,
    justifyContent,
    onClick,
    selected,
}): JSX.Element => {
    return (
        <li
            className={classNames(StyleNav.item, StyleNav[appearance], className, {
                [StyleNav.active]: selected,
            })}
        >
            <NavigationItemContainer
                href={href}
                onClick={onClick}
                className={classNames(StyleNav["ai-" + alignItems], StyleNav["jc-" + justifyContent])}
            >
                {icon && <Icon name={icon} className={StyleNav.icon} />}
                {image && (
                    <span className={StyleNav.image}>
                        <Image src={image} layout="fill" objectFit="contain" alt={alt} />
                    </span>
                )}
                {badge && (
                    <Badge
                        shape="circle"
                        variant="default"
                        size={24}
                        className={classNames(StyleNav.badge, StyleNav[badgePlacement])}
                    >
                        {badgeText && badgeText}
                        {badgeImage && (
                            <span className={StyleNav.badgeImage}>
                                <Image src={badgeImage} layout="fill" objectFit="contain" alt={alt} />
                            </span>
                        )}
                    </Badge>
                )}
                <span>{children}</span>
            </NavigationItemContainer>
        </li>
    );
};
