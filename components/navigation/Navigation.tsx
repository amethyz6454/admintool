import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import {
    TypeContentAlignments,
    TypeGaps,
    TypeIconSizes,
    TypeItemAlignments,
    TypeOrientations,
    TypePlacements,
    TypeVariantColors,
} from "@/utils/Interfaces/UI";
import Badge from "@/components/ui/Badge";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import StyleNav from "@/sass/components/navigation.module.scss";
import styled from "styled-components";

interface PositioningProps {
    alignItems?: TypeItemAlignments;
    justifyContent?: TypeContentAlignments;
}

interface NavigationBaseProps extends PositioningProps {
    alt?: string;
    badge?: React.ReactNode;
    badgePlacement?: TypePlacements;
    badgeSize?: TypeGaps;
    badgeText?: string;
    badgeVariant?: TypeVariantColors;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: TypeIconNames;
    iconSize?: TypeIconSizes;
    image?: string;
    // itemSize?: TypeIconSizes;
    itemSize?: number;
    itemWidth?: number;
    itemHeight?: number;
    orientation?: TypeOrientations;
}
interface NavigationProps extends NavigationBaseProps {
    appearance?: "line" | "button" | "graphics";
    gap?: TypeGaps;
    itemProps?: PositioningProps & { gap?: TypeGaps };
    sticky?: boolean;
    wrapperProps?: PositioningProps;
}

interface NavigationItemProps extends NavigationBaseProps {
    appearance?: "solid" | "transparent";
    href?: string;
    onClick?: () => void;
    selected?: boolean;
}

const NavigationButtonLinkContainer: React.FC<NavigationItemProps> = ({
    children,
    className,
    href,
    onClick,
}): JSX.Element => {
    return href ? (
        <Link href={href} className={classNames(StyleNav.link, className)} onClick={onClick}>
            {children}
        </Link>
    ) : (
        <button className={classNames(StyleNav.link, className)} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

interface BaseNavigationProps {
    className?: string;
    $size?: number;
    $width?: number;
    $height?: number;
}

// const BaseItem = styled(NavigationButtonLinkContainer)(({ $size, $height, $width }: BaseNavigationProps) => ({
//     height: $size ? $size : $height ? $height : null,
//     width: $size ? $size : $width ? $width : null,
// }));

const BaseNavigation = styled("ul")(({ $size, $height, $width }: BaseNavigationProps) => ({
    "li a, li button": {
        height: $size ? $size : $height ? $height : null,
        width: $size ? $size : $width ? $width : null,
    },
}));

export const Navigation: React.FC<NavigationProps> = ({
    alignItems,
    appearance = "line",
    children,
    className,
    disabled,
    gap = 0,
    itemProps = { alignItems: null, justifyContent: null, gap: null },
    itemSize,
    itemWidth,
    itemHeight,
    justifyContent,
    orientation = "horizontal",
    sticky = false,
    wrapperProps = { alignItems: null, justifyContent: null },
}): JSX.Element => {
    return (
        <nav
            className={classNames(
                StyleNav.wrapper,
                StyleNav["ai-" + wrapperProps.alignItems],
                StyleNav["jc-" + wrapperProps.justifyContent],
                { disabled: disabled, [StyleNav.isSticky]: sticky },
                className
            )}
        >
            <BaseNavigation
                className={classNames(
                    StyleNav.list,
                    StyleNav[appearance],
                    StyleNav[orientation],
                    StyleNav["ai-" + alignItems],
                    StyleNav["jc-" + justifyContent],
                    StyleNav["item-ai-" + itemProps.alignItems],
                    StyleNav["item-jc-" + itemProps.justifyContent],
                    StyleNav["item-gap-" + itemProps.gap]
                )}
                $size={itemSize}
                $width={itemWidth}
                $height={itemHeight}
                data-gap={gap}
            >
                {children}
            </BaseNavigation>
        </nav>
    );
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
    alignItems,
    alt,
    appearance = "solid",
    badge,
    badgePlacement = "top-start",
    badgeSize = 24,
    badgeText,
    badgeVariant = "default",
    children,
    className,
    href,
    icon,
    iconSize,
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
            <NavigationButtonLinkContainer
                href={href}
                onClick={onClick}
                className={classNames(StyleNav["ai-" + alignItems], StyleNav["jc-" + justifyContent])}
            >
                {icon && <Icon name={icon} size={iconSize} className={StyleNav.icon} />}
                {image && (
                    <span className={StyleNav.image}>
                        <Image src={image} layout="fill" objectFit="contain" alt={alt} />
                    </span>
                )}
                {badge && (
                    <Badge
                        shape="circle"
                        variant={badgeVariant}
                        size={badgeSize}
                        className={classNames(StyleNav.badge, StyleNav[badgePlacement])}
                        entry={badgeText && badgeText}
                    />
                )}
                <span className={StyleNav.text}>{children}</span>
            </NavigationButtonLinkContainer>
        </li>
    );
};
