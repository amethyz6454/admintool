import React from "react";
import classNames from "classnames";
import Icon, { TypeIconNames } from "./Icons";
import { TypeColumnCount, TypeGaps, TypeVariantColors } from "@/utils/Interfaces/UI";
import StyleList from "@/sass/components/list.module.scss";

type DirectionTypes = "row" | "row-reverse" | "column" | "column-reverse";
type JustificationTypes = "center" | "space-between" | "flex-end" | "flex-start";

interface ListBaseProps {
    bordered?: boolean;
    children?: React.ReactNode;
    className?: string;
    direction?: DirectionTypes;
    gap?: TypeGaps;
    justify?: JustificationTypes;
}
interface ListProps {
    hover?: boolean;
    itemBordered?: boolean;
    itemDirection?: DirectionTypes;
    itemJustify?: JustificationTypes;
    itemLabelValueFill?: boolean;
}

interface ListItemProps {
    cols?: TypeColumnCount;
    highlight?: boolean;
    icon?: TypeIconNames;
    iconColor?: TypeVariantColors;
    label?: React.ReactNode;
    labelSeverity?: TypeVariantColors;
    value?: React.ReactNode;
    valueSeverity?: TypeVariantColors;
    variant?: "item" | "graphics" | "data" | "bar";
}

export const ListContainer: React.FC<ListProps & ListBaseProps> = ({
    children,
    className,
    direction = "row",
    justify,
    gap = 24,
    hover,
    itemBordered = false,
    itemJustify,
    itemDirection,
    itemLabelValueFill = false,
}): JSX.Element => {
    return (
        <div
            className={classNames(StyleList.list, StyleList[direction], className, {
                [StyleList.bordered]: itemBordered,
                [StyleList.flexFill]: itemLabelValueFill,
                [StyleList.hover]: !!hover,
                [StyleList[justify]]: !!justify,
                [StyleList[`item-${itemJustify}`]]: !!itemJustify,
                [StyleList[`item-${itemDirection}`]]: !!itemJustify,
            })}
            data-grid-gap={gap}
        >
            {children}
        </div>
    );
};

export const ListItem: React.FC<ListItemProps & ListBaseProps> = ({
    children,
    className,
    cols = 1,
    direction = "column",
    gap = 4,
    highlight = false,
    icon,
    iconColor,
    justify,
    label,
    labelSeverity,
    value,
    valueSeverity,
    variant = "item",
}): JSX.Element => {
    return (
        <div
            className={classNames(StyleList[variant], StyleList[direction], className, {
                [StyleList.highlight]: highlight,
                [StyleList[justify]]: !!justify,
            })}
            data-grid-gap={gap}
            data-grid={cols ? cols : null}
        >
            {icon && <Icon name={icon} className={classNames(StyleList.icon, StyleList[iconColor])} />}
            {children ? (
                children
            ) : (
                <React.Fragment>
                    <div className={classNames(StyleList.label, { [StyleList[labelSeverity]]: !!labelSeverity })}>
                        {label}
                    </div>
                    <div className={classNames(StyleList.value, { [StyleList[valueSeverity]]: !!valueSeverity })}>
                        {value}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

const List = {
    ListContainer,
    ListItem,
};

export default List;
