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
        <Link href={href}>
            <a className={classNames(StyleNav.link, className)} onClick={onClick}>
                {children}
            </a>
        </Link>
    ) : (
        <button className={classNames(StyleNav.link, className)} type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export const Navigation: React.FC<NavigationProps> = ({
    alignItems,
    appearance = "line",
    children,
    className,
    disabled,
    gap = 0,
    iconSize = 120,
    justifyContent,
    orientation = "horizontal",
    sticky = false,
    wrapperProps = { alignItems: null, justifyContent: null },
    itemProps = { alignItems: null, justifyContent: null, gap: null },
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
            <ul
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
                data-size={appearance === "graphics" ? iconSize : null}
                data-gap={gap}
            >
                {children}
            </ul>
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
    iconSize = 24,
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
