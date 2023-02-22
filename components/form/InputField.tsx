import React from "react";
import classNames from "classnames";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import { FormFeedback, FormGroup, FormGroupProps } from "@/components/form/Form";
import { TypeGridLengths, TypePlaceIcons, TypeSizes } from "@/utils/Interfaces/UI";
import { Grid, GridCol } from "@/components/ui/Grid";
import StyleForm from "@/sass/forms/form.module.scss";
import StyleInputField from "@/sass/forms/field.module.scss";
import StyleOptionField from "@/sass/forms/option.module.scss";

export interface FieldsBaseProps {
    className?: string;
    disabled?: boolean;
    error?: string;
    grid?: TypeGridLengths;
    id: string;
    label?: string;
    name: string;
    noLabel?: boolean;
    readOnly?: boolean;
    required?: boolean;
    size?: TypeSizes;
}

export interface InputFieldProps extends FieldsBaseProps {
    autoComplete?: string;
    defaultValue?: string;
    list?: string;
    placeholder?: string;
    type?: "text" | "tel" | "email" | "url" | "file" | "date" | "number" | "password";
}

const FieldAddon: React.FC<{ size: TypeSizes; className: string; onClick?: () => void; icon: TypeIconNames }> = ({
    size,
    className,
    onClick,
    icon,
}): JSX.Element => {
    return onClick ? (
        <button
            type="button"
            className={classNames(StyleInputField.icon, StyleInputField[size], className, "cursor-pointer")}
            onClick={onClick}
        >
            <Icon name={icon} size={size === "sm" || size === "xs" ? 16 : 24} />
        </button>
    ) : (
        <div className={classNames(StyleInputField.icon, StyleInputField[size], className)}>
            <Icon name={icon} size={size === "sm" || size === "xs" ? 16 : 24} />
        </div>
    );
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps & FormGroupProps & TypePlaceIcons>(
    (props, ref) => {
        const {
            autoComplete = "off",
            className,
            defaultValue,
            disabled,
            endIcon,
            endIconClick,
            error,
            grid,
            id,
            label,
            layout = "default",
            list,
            name,
            noLabel = false,
            placeholder,
            readOnly,
            required,
            size,
            startIcon,
            startIconClick,
            type = "text",
            ...options
        } = props;

        return (
            <FormGroup grid={grid} layout={layout} validity={error}>
                {!noLabel && (
                    <Grid gap={0}>
                        <GridCol grid="flex">
                            {label && (
                                <label htmlFor={id && id} className={StyleForm.label}>
                                    {label} {required && !readOnly && <span className="text-red">*</span>}
                                </label>
                            )}
                        </GridCol>
                        {readOnly && (
                            <GridCol grid="auto">
                                <small className={StyleForm.note}>(read only)</small>
                            </GridCol>
                        )}
                    </Grid>
                )}
                <div className={StyleInputField.wrapper}>
                    {startIcon && (
                        <FieldAddon
                            className={StyleInputField.startIcon}
                            icon={startIcon}
                            onClick={startIconClick}
                            size={size}
                        />
                    )}
                    <input
                        aria-label={label}
                        aria-required={required ? required : false}
                        aria-invalid={error ? true : false}
                        autoComplete={autoComplete}
                        className={classNames(StyleInputField.control, className, {
                            [StyleInputField[size!]]: !!size,
                            [StyleInputField.readonly]: !!readOnly,
                            [StyleInputField.hasIconStart]: !!startIcon,
                            [StyleInputField.hasIconEnd]: !!endIcon,
                            [StyleInputField.invalid]: error,
                        })}
                        ref={ref}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        id={id}
                        list={list}
                        name={name}
                        placeholder={placeholder ? placeholder : label}
                        readOnly={readOnly}
                        required={required}
                        title={placeholder ? placeholder : label}
                        type={type}
                        {...options}
                    />
                    {endIcon && (
                        <FieldAddon
                            className={StyleInputField.endIcon}
                            onClick={endIconClick}
                            icon={endIcon}
                            size={size}
                        />
                    )}
                </div>
                {error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        );
    }
);

InputField.displayName = "InputField";

interface TextAreaProps extends InputFieldProps {
    children?: string;
    note?: string;
    showOptional?: boolean;
    size?: TypeSizes;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps & FormGroupProps & TypePlaceIcons>(
    (props, ref): JSX.Element => {
        const {
            children,
            className,
            disabled,
            endIcon,
            endIconClick,
            error,
            grid,
            id,
            label,
            layout,
            name,
            noLabel = false,
            note,
            placeholder,
            readOnly,
            required,
            showOptional = true,
            size,
            startIcon,
            startIconClick,
            ...options
        } = props;
        return (
            <FormGroup grid={grid} layout={layout}>
                {!noLabel && (
                    <Grid gap={0}>
                        <GridCol grid="flex">
                            {label && (
                                <label htmlFor={id && id} className={StyleForm.label}>
                                    {label} {required && !readOnly && <span className="text-red">*</span>}
                                </label>
                            )}
                        </GridCol>
                        {readOnly && (
                            <GridCol grid="auto">
                                <small className={StyleForm.note}>(read only)</small>
                            </GridCol>
                        )}
                        {showOptional && !required && (
                            <GridCol grid="auto">
                                <small className={StyleForm.note}>{note ? note : "(optional)"}</small>
                            </GridCol>
                        )}
                    </Grid>
                )}
                <div className={StyleInputField.wrapper}>
                    {startIcon && (
                        <FieldAddon
                            className={StyleInputField.startIcon}
                            onClick={startIconClick}
                            icon={startIcon}
                            size={size}
                        />
                    )}
                    <textarea
                        aria-invalid={error ? true : false}
                        aria-label={label}
                        aria-required={required}
                        className={classNames(StyleInputField.control, className, {
                            [StyleInputField[size!]]: !!size,
                            [StyleInputField.readonly]: !!readOnly,
                            [StyleInputField.hasIconStart]: !!startIcon,
                            [StyleInputField.hasIconEnd]: !!endIcon,
                        })}
                        disabled={disabled}
                        id={id}
                        name={name}
                        placeholder={placeholder ? placeholder : label}
                        ref={ref}
                        required={required}
                        title={placeholder ? placeholder : label}
                        readOnly={readOnly}
                        {...options}
                    >
                        {children}
                    </textarea>
                    {endIcon && (
                        <FieldAddon
                            className={StyleInputField.endIcon}
                            onClick={endIconClick}
                            icon={endIcon}
                            size={size}
                        />
                    )}
                </div>
                {error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        );
    }
);

TextArea.displayName = "TextArea";

interface SelectFieldProps extends FieldsBaseProps {
    children: React.ReactNode;
    noLabel?: boolean;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps & FormGroupProps & TypePlaceIcons>(
    (props, ref): JSX.Element => {
        const {
            children,
            className,
            disabled,
            endIcon,
            endIconClick,
            error,
            grid,
            id,
            label,
            layout,
            name,
            noLabel = false,
            readOnly,
            required = false,
            size,
            startIcon,
            startIconClick,
            ...options
        } = props;
        return (
            <FormGroup grid={grid} layout={layout}>
                {!noLabel && (
                    <Grid gap={0}>
                        <GridCol grid="flex">
                            {label && (
                                <label htmlFor={id && id} className={StyleForm.label}>
                                    {label} {required && !readOnly && <span className="text-red">*</span>}
                                </label>
                            )}
                        </GridCol>
                        {readOnly && (
                            <GridCol grid="auto">
                                <small className={StyleForm.note}>(read only)</small>
                            </GridCol>
                        )}
                    </Grid>
                )}
                <div className={StyleInputField.wrapper}>
                    {startIcon && (
                        <FieldAddon
                            className={StyleInputField.startIcon}
                            onClick={startIconClick}
                            icon={startIcon}
                            size={size}
                        />
                    )}
                    <select
                        aria-invalid={error ? true : false}
                        aria-label={label}
                        aria-required={required}
                        className={classNames(StyleInputField.control, className, {
                            [StyleInputField[size]]: !!size,
                            [StyleInputField.readonly]: !!readOnly,
                            [StyleInputField.hasIconStart]: !!startIcon,
                            [StyleInputField.hasIconEnd]: !!endIcon,
                        })}
                        disabled={disabled}
                        id={id}
                        name={name}
                        ref={ref}
                        required={required}
                        {...options}
                    >
                        {children}
                    </select>
                    {endIcon && (
                        <FieldAddon
                            className={StyleInputField.endIcon}
                            onClick={endIconClick}
                            icon={endIcon}
                            size={size}
                        />
                    )}
                </div>
                {error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        );
    }
);

SelectField.displayName = "SelectField";

interface OptionsFieldProps {
    appearance?: "default" | "switch" | "switch-word";
    disabled?: boolean;
    error?: string;
    id: string;
    label: string;
    name?: string;
    noLabel?: boolean;
    noSpacing?: boolean;
    required?: boolean;
    textFalse?: string;
    textTrue?: string;
    type?: "checkbox" | "radio";
    value?: string;
    size?: TypeSizes;
    readOnly?: boolean;
    direction?: "row" | "row-reverse";
    justify?: "center" | "space-between" | "flex-end" | "flex-start";
}

export const OptionsField = React.forwardRef<HTMLInputElement, OptionsFieldProps>((props, ref): JSX.Element => {
    const {
        appearance = "default",
        disabled = false,
        error,
        id,
        label,
        noLabel = false,
        noSpacing = false,
        required = false,
        textFalse = "Disabled",
        textTrue = "Enabled",
        type = "checkbox",
        value,
        readOnly,
        size,
        direction = "row",
        justify = "flex-start",
        ...options
    } = props;
    return (
        <div
            className={classNames(StyleForm.option, StyleForm[direction], StyleForm[justify], {
                [StyleOptionField[appearance]]: !!appearance,
                [StyleOptionField.clearSpacing]: !!noSpacing,
                [StyleOptionField.invalid]: error,
                disabled: disabled,
            })}
        >
            <input
                aria-invalid={error ? true : false}
                aria-label={label}
                aria-required={required}
                className={classNames(StyleOptionField.control, StyleForm.switch, {
                    [StyleOptionField[size]]: !!size,
                    [StyleOptionField.invalid]: !!error,
                })}
                id={id}
                ref={ref}
                title={label}
                type={type}
                value={value}
                readOnly={readOnly}
                {...options}
            />
            {appearance === "switch-word" && (
                <label
                    className={classNames(StyleOptionField.optionSwitch, StyleForm.wordedSwitch)}
                    data-text-false={textFalse}
                    data-text-true={textTrue}
                    htmlFor={id}
                />
            )}
            {!noLabel && (
                <Grid gap={0}>
                    <GridCol grid="flex" className="flex">
                        {label && (
                            <label htmlFor={id && id} className={classNames(StyleForm.label, StyleOptionField.label)}>
                                {label} {required && !readOnly && <span className="text-red">*</span>}
                            </label>
                        )}
                    </GridCol>
                    {readOnly && (
                        <GridCol grid="auto">
                            <small className={StyleForm.note}>(read only)</small>
                        </GridCol>
                    )}
                </Grid>
            )}
        </div>
    );
});

OptionsField.displayName = "OptionsField";

const Input = {
    InputField,
    OptionsField,
    SelectField,
    TextArea,
};

export default Input;
