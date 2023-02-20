import React from "react";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";
import Icon from "@/components/ui/Icons";
import { PillLoader } from "@/components/ui/Loader";
import { TypePlaceIcons, TypeSizes, TypeVariantColors } from "@/utils/Interfaces/UI";
import StyleButton from "@/sass/forms/button.module.scss";

export type ElementReference<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
export interface ButtonBaseProps {
    appearance?: "solid" | "outline" | "link";
    children: React.ReactNode;
    className?: string;
    color?: TypeVariantColors;
    disabled?: boolean;
    href?: string;
    length?: "wide" | "block";
    onClick?: () => void;
    process?: boolean;
    shape?: "square" | "circle";
    size?: TypeSizes;
    type?: "button" | "submit" | "reset" | null;
}

type ButtonProps = JSX.IntrinsicElements["button"] & {
    href?: undefined;
};

type AnchorProps = JSX.IntrinsicElements["a"] & {
    href: string;
} & LinkProps;

type PolymorphicProps = ButtonProps | AnchorProps;
type PolymorphicButton = {
    (props: AnchorProps): JSX.Element;
    (props: ButtonProps): JSX.Element;
    displayName: string;
};

const isAnchor = (props: PolymorphicProps): props is AnchorProps => {
    return props.href !== undefined;
};

const ButtonContainer = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, PolymorphicProps>(
    (props, ref): JSX.Element => {
        if (isAnchor(props)) {
            const { href, as, replace, scroll, shallow, passHref, prefetch, locale, ...rest } = props;
            const linkProps = { href, as, replace, scroll, shallow, passHref, prefetch, locale };

            return (
                <Link {...linkProps}>
                    <a {...rest} ref={ref as React.ForwardedRef<HTMLAnchorElement>} />
                </Link>
            );
        }

        return <button type={props.type ?? "button"} ref={ref as React.ForwardedRef<HTMLButtonElement>} {...props} />;
    }
) as PolymorphicButton;

ButtonContainer.displayName = "ButtonContainer";

const Button = React.forwardRef(
    <C extends React.ElementType>(props: ButtonBaseProps & TypePlaceIcons, ref: ElementReference<C>): JSX.Element => {
        const {
            appearance = "solid",
            children,
            className,
            color = "primary",
            disabled,
            endIcon,
            href,
            length,
            process = false,
            shape,
            size,
            startIcon,
            type = "button",
            ...options
        } = props;

        return (
            <ButtonContainer
                type={href ? null : type}
                href={href}
                className={classNames(StyleButton.btn, StyleButton[color], StyleButton[appearance], className, {
                    disabled: process || disabled,
                    [StyleButton[size!]]: !!size,
                    [StyleButton[length!]]: !!length,
                    [StyleButton[shape!]]: !!shape,
                    [StyleButton.process]: process,
                    [StyleButton.startIcon]: !!startIcon,
                    [StyleButton.endIcon]: !!endIcon,
                })}
                ref={ref}
                {...options}
            >
                {process && <PillLoader className={StyleButton.loader} />}
                {startIcon && (
                    <Icon
                        name={startIcon}
                        className={StyleButton.icon}
                        size={size === "sm" ? 16 : size === "xs" ? 16 : 24}
                    />
                )}
                {children}
                {endIcon && (
                    <Icon
                        name={endIcon}
                        className={StyleButton.icon}
                        size={size === "sm" ? 16 : size === "xs" ? 16 : 24}
                    />
                )}
            </ButtonContainer>
        );
    }
);

Button.displayName = "Button";

export default Button;
