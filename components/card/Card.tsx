import React from "react";
import Link from "next/link";
import classNames from "classnames";
import StyleCard from "@/sass/components/card.module.scss";
import StyleGrid from "@/sass/components/grid.module.scss";
import { TypeGaps } from "@/utils/Interfaces/UI";

type TableVariants = "default" | "table" | "tabs" | "empty";
interface CardBaseProps {
    children: React.ReactNode;
    className?: string;
    enableGrid?: boolean;
    gap?: TypeGaps;
}

interface CardContainerProps extends CardBaseProps {
    appearance?: "solid" | "transparent";
    variant?: TableVariants;
}

export interface WrapperProps {
    href?: string;
    onClick?: () => void;
    as?: "form" | "div";
}

export const Wrapper: React.FC<WrapperProps & CardBaseProps> = ({ children, href, as: Component = "div", className, ...options }): JSX.Element => {
    return href ? (
        <Link href={href} className={classNames(className)} {...options}>
            {children}
        </Link>
    ) : (
        <Component className={classNames(className)} {...options}>
            {children}
        </Component>
    );
};

const CardContainer: React.FC<CardContainerProps & WrapperProps> = ({
    children,
    className,
    appearance = "solid",
    variant,
    href,
    as = "div",
    ...options
}): JSX.Element => {
    return (
        <Wrapper className={classNames(StyleCard.card, StyleCard[appearance], StyleCard[variant], className)} href={href} as={as} {...options}>
            {children}
        </Wrapper>
    );
};

const Header: React.FC<CardBaseProps> = ({ children, className, enableGrid = false, gap = 24, ...options }): JSX.Element => {
    return (
        <div className={classNames(StyleCard.head, className)} {...options}>
            <div className={classNames(StyleCard.headInner, { [StyleGrid.grid]: enableGrid })} data-grid-gap={enableGrid ? gap : null}>
                {children}
            </div>
        </div>
    );
};

interface TabItemProps {
    className?: string;
    primary: string;
    selected?: boolean;
}
const TabItem: React.FC<WrapperProps & TabItemProps> = ({ href, onClick, primary, className, selected }): JSX.Element => {
    return (
        <Wrapper href={href} onClick={onClick} className={classNames(StyleCard.item, className, { [StyleCard.selected]: selected })}>
            {primary}
        </Wrapper>
    );
};

const Body: React.FC<CardBaseProps & WrapperProps & CardContainerProps> = ({
    children,
    className,
    enableGrid = false,
    gap = 24,
    as = "div",
    variant = null,
    ...options
}): JSX.Element => {
    return (
        <Wrapper className={classNames(StyleCard.body, StyleCard[variant], className)} as={as} {...options}>
            <div className={classNames(StyleCard.bodyInner, { [StyleGrid.grid]: enableGrid })} data-grid-gap={enableGrid ? gap : null}>
                {children}
            </div>
        </Wrapper>
    );
};

const Footer: React.FC<CardBaseProps> = ({ children, className, enableGrid = false, gap = 24, ...options }): JSX.Element => {
    return (
        <div className={classNames(StyleCard.foot, className)} {...options}>
            <div className={classNames(StyleCard.footInner, { [StyleGrid.grid]: enableGrid })} data-grid-gap={enableGrid ? gap : null}>
                {children}
            </div>
        </div>
    );
};

const Card = {
    CardContainer,
    TabItem,
    Header,
    Body,
    Footer,
};

export default Card;
