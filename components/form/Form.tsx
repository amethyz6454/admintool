import React from "react";
import classNames from "classnames";
import { GridColProps } from "@/components/ui/Grid";
import { TypeColumnCount, TypeGaps, TypeSizes } from "@/utils/Interfaces/UI";
import StyleForm from "@/sass/forms/form.module.scss";
import StyleGrid from "@/sass/components/grid.module.scss";

interface FormGridProps {
    children?: React.ReactNode;
    className?: string;
    gap?: TypeGaps;
    verticalAlign?: "center" | "flex-end" | "space-between";
}

export const FormFeedback: React.FC<FormGridProps> = ({ children }): JSX.Element => {
    return <div className={classNames(StyleForm.feedback)}>{children}</div>;
};

export const FormGrid: React.FC<FormGridProps> = ({
    children,
    className,
    gap = 24,
    verticalAlign,
    ...options
}): JSX.Element => {
    return (
        <form
            className={classNames(StyleGrid.grid, { [StyleGrid[verticalAlign]]: !!verticalAlign }, className)}
            data-grid-gap={gap}
            {...options}
        >
            {children}
        </form>
    );
};

export interface FormGroupProps {
    validity?: string;
    layout?: "default" | "inline";
}

export const FormGroup: React.FC<FormGroupProps & GridColProps> = ({
    children,
    layout = "default",
    validity,
    grid,
    ...options
}): JSX.Element => {
    return (
        <div
            className={classNames(StyleForm.group, StyleForm[layout], {
                [StyleForm.invalid]: !!validity,
                [StyleGrid["grid-" + grid]]: !!grid,
            })}
            {...options}
        >
            {children}
        </div>
    );
};

interface FormButtonsProps extends GridColProps {
    align?: "end" | "center";
    size?: TypeSizes;
}

export const FormButtons: React.FC<FormButtonsProps> = ({ children, align, grid }): JSX.Element => {
    return (
        <div
            className={classNames(StyleForm.buttons, {
                [StyleForm[align]]: !!align,
                [StyleGrid["grid-" + grid]]: !!grid,
            })}
        >
            {children}
        </div>
    );
};

export const ButtonGroup: React.FC<FormButtonsProps> = ({ children, size }): JSX.Element => {
    return <div className={classNames(StyleForm.btnGroup, { [StyleForm[size]]: !!size })}>{children}</div>;
};

interface FormFieldsetProps {
    children: React.ReactNode;
    className?: string;
    innerGrid?: TypeColumnCount;
    title?: React.ReactNode | string;
    subTitle?: React.ReactNode | string;
    content?: "options" | "buttonOptions" | "fields";
    layout?: "default" | "inline";
    required?: boolean;
    error?: string;
}

export const FormFieldset: React.FC<FormFieldsetProps & GridColProps> = ({
    children,
    content = "fields",
    innerGrid = 1,
    grid,
    layout = "default",
    required,
    title,
    subTitle,
    error,
    ...options
}): JSX.Element => {
    return (
        <fieldset
            className={classNames(StyleForm.group, [StyleForm[layout]], {
                [StyleGrid[`grid-${grid}`]]: !!grid,
            })}
        >
            {title && (
                <legend className={StyleForm.legend}>
                    {title} {required && <span className="text-red">*</span>}
                    {subTitle && <span className="block font-normal text-gray-700">{subTitle}</span>}
                </legend>
            )}
            <div className={StyleForm[content]} data-columns={innerGrid ? innerGrid : null} {...options}>
                {children}
            </div>
            {error && <FormFeedback>{error}</FormFeedback>}
        </fieldset>
    );
};

const Form = {
    FormGroup,
    FormFieldset,
    FormButtons,
};

export default Form;
