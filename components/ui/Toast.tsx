import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import StyleToast from "@/styles/components/Toast.module.css";
import Icon, { TypeIconNames } from "./Icons";

interface ToastProps {
    children: ReactNode;
    startIcon?: TypeIconNames;
    endIcon?: TypeIconNames;
    show: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ children, startIcon = "Info", endIcon = "Close", show = false, onClose }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const toastContent = show ? (
        <React.Fragment>
            <div className={StyleToast.notification}>
                <div className={StyleToast.notificationAnimate}>
                    <div className={StyleToast.notificationStyle}>
                        <Icon name={startIcon} />
                        <div className={StyleToast.content}>{children}</div>
                        <div className={StyleToast.close} onClick={handleCloseClick}>
                            <Icon name={endIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(toastContent, document.getElementById("__next"));
    } else {
        return null;
    }
};

export default Toast;
