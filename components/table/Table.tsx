import React from "react";
import classNames from "classnames";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import { TypeGaps, TypeSizes, TypeVariantColors } from "@/utils/Interfaces/UI";
import StyleTable from "@/sass/components/table.module.scss";
import StyleGrid from "@/sass/components/grid.module.scss";

interface TableContainerProps {
    children: React.ReactNode;
    className?: string;
    striped?: boolean;
    hover?: boolean;
    size?: TypeSizes;
    border?: "borderless" | "bordered";
}

interface TableProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const TableContainer: React.FC<TableContainerProps> = ({
    children,
    className,
    striped = true,
    hover = true,
    size,
    border,
    ...options
}): JSX.Element => {
    return (
        <table
            className={classNames(StyleTable.table, className, {
                [StyleTable.striped]: striped,
                [StyleTable[border]]: !!border,
                [StyleTable[size]]: !!size,
                [StyleTable.hover]: hover,
            })}
            {...options}
        >
            {children}
        </table>
    );
};

interface TableHeadProps extends TableProps {
    sticky?: boolean;
}

export const TableHead: React.FC<TableHeadProps> = ({
    children,
    className,
    onClick,
    sticky = false,
    ...options
}): JSX.Element => {
    return (
        <thead
            className={classNames(StyleTable.head, className, { [StyleTable.isSticky]: sticky })}
            onClick={onClick}
            {...options}
        >
            {children}
        </thead>
    );
};

export const TableBody: React.FC<TableProps> = ({ children, className, onClick, ...options }): JSX.Element => {
    return (
        <tbody className={classNames(StyleTable.body, className)} onClick={onClick} {...options}>
            {children}
        </tbody>
    );
};

export const TableFoot: React.FC<TableProps> = ({ children, className, onClick, ...options }): JSX.Element => {
    return (
        <tfoot className={classNames(StyleTable.foot, className)} onClick={onClick} {...options}>
            {children}
        </tfoot>
    );
};

export const TableRow: React.FC<TableProps> = ({ children, className, onClick, ...options }): JSX.Element => {
    return (
        <tr className={classNames(StyleTable.row, className)} onClick={onClick} {...options}>
            {children}
        </tr>
    );
};

interface TableRowExpandableProps extends TableProps {
    show?: boolean;
}

export const TableRowExpandable: React.FC<TableRowExpandableProps> = ({
    children,
    className,
    onClick,
    show = false,
    ...options
}): JSX.Element => {
    return (
        <tr className={StyleTable.rowExpandable}>
            <td
                className={classNames(StyleTable.cellExpandable, className)}
                onClick={onClick}
                colSpan={999}
                {...options}
            >
                <div className={classNames(StyleTable.expandContent, { [StyleTable.active]: show })}>{children}</div>
            </td>
        </tr>
    );
};

interface TableCellProps extends React.HtmlHTMLAttributes<HTMLTableCellElement> {
    actionable?: boolean;
    as?: "th" | "td";
    colSpan?: number;
    layout?: "fill" | "space-between" | "evenly" | "center";
    rowSpan?: number;
    sticky?: boolean;
    title?: string;
    sort?: "default" | "descending" | "ascending";
    severity?: TypeVariantColors;
    highlight?: boolean;
    enableGrid?: boolean;
    gap?: TypeGaps;
}

const CellWrapper: React.FC<TableCellProps> = ({ children, as: Component = "td", title, ...options }): JSX.Element => {
    return (
        <Component {...options} data-title={title}>
            {children}
        </Component>
    );
};

export const TableCell: React.FC<TableCellProps> = ({
    actionable = false,
    as = "td",
    children,
    className,
    colSpan,
    layout = "space-between",
    rowSpan,
    sticky = false,
    sort,
    title,
    severity,
    highlight = false,
    enableGrid,
    gap = 0,
    ...options
}): JSX.Element => {
    const renderIconName = { ascending: "ChevronUp", descending: "ChevronDown", default: "Minus" };

    return (
        <CellWrapper
            className={classNames(StyleTable.cell, StyleTable[layout], StyleTable[severity], className, {
                [StyleTable.isSticky]: sticky,
                [StyleTable.action]: actionable,
                [StyleTable.sort]: !!sort,
                [StyleTable.highlight]: !!highlight,
            })}
            colSpan={colSpan}
            rowSpan={rowSpan}
            as={as}
            title={title}
            {...options}
        >
            <div
                className={classNames(StyleTable.cellInner, { [StyleGrid.grid]: !!enableGrid })}
                data-grid-gap={enableGrid ? gap : null}
            >
                {children}
                {sort && <Icon className={StyleTable.icon} name={renderIconName[sort] as TypeIconNames} size={16} />}
            </div>
        </CellWrapper>
    );
};

interface TableCellExtendProps extends TableProps {
    show?: boolean;
}

export const TableCellExtend: React.FC<TableCellExtendProps> = ({
    children,
    className,
    onClick,
    show = false,
    ...options
}): JSX.Element => {
    return (
        <div
            className={classNames(StyleTable.extend, { [StyleTable.active]: show }, className)}
            onClick={onClick}
            {...options}
        >
            {children}
        </div>
    );
};

interface TableCardProps extends TableProps {
    collapsible?: boolean;
    showContent?: boolean;
    disableButton?: boolean;
    expandedContent?: React.ReactNode;
}

export const TableCard: React.FC<TableCardProps> = ({
    children,
    className,
    onClick,
    collapsible,
    disableButton = false,
    showContent = false,
    expandedContent,
    ...options
}): JSX.Element => {
    return (
        <div className={classNames(StyleTable.card, className)} {...options}>
            <div className={StyleTable.cardBody}>
                {collapsible && (
                    <div className={classNames(StyleTable.action, { disabled: disableButton })} onClick={onClick}>
                        <Icon name={!showContent ? "RoundPlus" : "RoundMinus"} className={StyleTable.icon} />
                    </div>
                )}
                <div className={StyleTable.cardBodyContent}>{children}</div>
            </div>
            {collapsible && expandedContent && <TableCellExtend show={showContent}>{expandedContent}</TableCellExtend>}
        </div>
    );
};

const Table = {
    TableBody,
    TableCard,
    TableCell,
    TableCellExtend,
    TableContainer,
    TableFoot,
    TableHead,
    TableRow,
};

export default Table;
