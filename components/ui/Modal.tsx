import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { Wrapper, WrapperProps } from "@/components/card/Card";
import Icon, { TypeIconNames, IconClose } from "@/components/ui/Icons";
import Button from "@/components/buttons/Button";
import Composition from "@/components/ui/Composition";
import { BlobLoader } from "@/components/ui/Loader";
import { TypeGaps, TypeSizes, TypeVariantColors } from "@/utils/Interfaces/UI";
import StyleModal from "@/sass/components/modal.module.scss";
import StyleGrid from "@/sass/components/grid.module.scss";

interface ModalBaseProps {
    onClose: () => void;
    show: boolean;
    process?: boolean;
    loadingLabel?: string;
}
interface ModalPartsProps {
    children: React.ReactNode;
    enableGrid?: boolean;
    gap?: TypeGaps;
    subTitle?: string | React.ReactNode;
    className?: string;
}

export const ModalHeader: React.FC<ModalPartsProps & { onClick?: (e) => void }> = ({
    children,
    onClick,
    subTitle,
}): JSX.Element => {
    return (
        <div className={classNames(StyleModal.head)}>
            <hgroup>
                <Composition wrapper="h4" primary={children} className={StyleModal.title} sub={subTitle} />
            </hgroup>
            {onClick && (
                <button type="button" className={classNames(StyleModal.close)} onClick={onClick}>
                    <IconClose />
                </button>
            )}
        </div>
    );
};

export const ModalBody: React.FC<ModalPartsProps> = ({ children, className, enableGrid, gap = 16 }): JSX.Element => {
    return (
        <div className={StyleModal.body}>
            <div
                className={classNames(StyleModal.bodyInner, className, { [StyleGrid.grid]: enableGrid })}
                data-grid-gap={enableGrid ? gap : null}
            >
                {children}
            </div>
        </div>
    );
};

export const ModalFooter: React.FC<ModalPartsProps> = ({ children }): JSX.Element => {
    return <div className={classNames(StyleModal.foot)}>{children}</div>;
};

export const Backdrop: React.FC<{ onClick: (e) => void; isActive: boolean }> = ({
    onClick,
    isActive = false,
}): JSX.Element => {
    return <div className={classNames(StyleModal.backdrop, { [StyleModal.active]: isActive })} onClick={onClick} />;
};

interface ModalProps {
    children: React.ReactNode;
    className?: string;
    size?: TypeSizes;
    subTitle?: string | React.ReactNode;
    title?: string | React.ReactNode;
}

const Modal: React.FC<ModalBaseProps & ModalProps & WrapperProps> = ({
    as = "div",
    children,
    className,
    loadingLabel,
    onClose,
    process,
    show = false,
    size = "md",
    subTitle,
    title,
    ...options
}): JSX.Element => {
    const [isBrowser, setIsBrowser] = React.useState<boolean>(false);

    React.useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        !process && onClose();
    };

    const modalContent = (
        <React.Fragment>
            <Wrapper
                as={as}
                className={classNames(StyleModal.modal, StyleModal[size], className, {
                    [StyleModal.active]: show,
                    process: process,
                })}
                {...options}
            >
                <div className={classNames(StyleModal.dialog)}>
                    <div className={classNames(StyleModal.content)}>
                        {process && <BlobLoader size={32} label={loadingLabel} />}
                        {title && (
                            <ModalHeader onClick={handleCloseClick} subTitle={subTitle}>
                                {title}
                            </ModalHeader>
                        )}
                        {children}
                    </div>
                </div>
            </Wrapper>
            <Backdrop onClick={handleCloseClick} isActive={show} />
        </React.Fragment>
    );

    if (isBrowser) {
        return ReactDOM.createPortal(modalContent, document.getElementById("__next"));
    } else {
        return null;
    }
};

interface ModalAlertProps {
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    icon?: TypeIconNames;
    variant?: TypeVariantColors;
    onCancelText?: string;
    onCancelClick?: () => void;
    onConfirmText?: string;
    onConfirmClick?: () => void;
    confirmOnly?: boolean;
}

export const ModalAlert: React.FC<ModalBaseProps & WrapperProps & ModalAlertProps> = ({
    as = "div",
    confirmOnly = false,
    icon = "Warning",
    loadingLabel,
    message,
    onCancelClick,
    onCancelText = "Cancel",
    onClose,
    onConfirmClick,
    onConfirmText = "Confirm",
    process = false,
    show = false,
    title,
    variant = "primary",
    ...options
}): JSX.Element => {
    return (
        <Modal
            as={as}
            className={classNames(StyleModal.alert, StyleModal[variant])}
            loadingLabel={loadingLabel}
            onClose={onClose}
            process={process}
            show={show}
            size="xs"
            {...options}
        >
            <button type="button" className={classNames(StyleModal.close)} onClick={onClose}>
                <IconClose />
            </button>
            <ModalBody enableGrid>
                <Composition wrapper="h4" textAlign="center" primary={title} color={variant} sub={message} />
            </ModalBody>
            <ModalFooter>
                <div className={StyleModal.icon}>
                    <Icon name={icon} size={32} />
                </div>
                {!confirmOnly && (
                    <Button color="secondary" size="sm" onClick={onCancelClick}>
                        {onCancelText}
                    </Button>
                )}
                <Button onClick={onConfirmClick} size="sm" color={variant}>
                    {onConfirmText}
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default Modal;
