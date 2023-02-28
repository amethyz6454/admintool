import React from "react";
import classNames from "classnames";
import { TypeIconSizes } from "@/utils/Interfaces/UI";
import StyleIcon from "@/sass/components/icon.module.scss";

export interface IconProps {
    size?: TypeIconSizes;
    className?: string;
}

export interface IconContainerProps extends IconProps {
    children: React.ReactNode;
}

export const IconColor = "#0081c9";
export const IconForeOpacity = "0.15";
export const IconBackOpacity = "0.1";

const IconContainer: React.FC<IconContainerProps> = ({ children, className, size = 24, ...options }): JSX.Element => {
    return (
        <svg
            className={classNames(StyleIcon.icon, className)}
            fill="currentColor"
            height={120}
            viewBox="0 0 120 120"
            width={120}
            xmlns="http://www.w3.org/2000/svg"
            data-icon-size={size}
            {...options}
        >
            {children}
        </svg>
    );
};

export const IconAccounts: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path fill={IconColor} d="M25,95H95v20H5V25H25V95Z" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M25,30H10v80H90V95h10v19a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V26a6,6,0,0,1,6-6H25V30Z"
                />
            </g>
            <g>
                <rect x="25" y="5" width="90" height="90" opacity={IconBackOpacity} />
                <path d="M114,100H26a6,6,0,0,1-6-6V6a6,6,0,0,1,6-6h88a6,6,0,0,1,6,6V94A6,6,0,0,1,114,100Zm-4-90H30V90h80V10ZM60,55H80a20,20,0,0,1,20,20,5,5,0,0,1-10,0A10,10,0,0,0,80,65H60A10,10,0,0,0,50,75a5,5,0,0,1-10,0A20,20,0,0,1,60,55Zm10-5A15,15,0,1,1,85,35,15,15,0,0,1,70,50Zm0-20a5,5,0,1,0,5,5A5,5,0,0,0,70,30Z" />
            </g>
        </IconContainer>
    );
};

export const IconAdmin: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M40,75H80a35,35,0,0,1,35,35v0a5,5,0,0,1-5,5H10a5,5,0,0,1-5-5v0A35,35,0,0,1,40,75Z"
                    opacity={IconBackOpacity}
                />
                <path d="M110,120H10A10,10,0,0,1,0,110,40,40,0,0,1,40,70H80a40,40,0,0,1,40,40A10,10,0,0,1,110,120ZM80,80H40a30,30,0,0,0-30,30H110A30,30,0,0,0,80,80Zm0,10H90a5,5,0,0,1,0,10H80A5,5,0,0,1,80,90Z" />
            </g>
            <g>
                <circle fill={IconColor} cx="60" cy="30" r="25" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M60,60A30,30,0,1,1,90,30,30,30,0,0,1,60,60Zm0-50A20,20,0,1,0,80,30,20,20,0,0,0,60,10Zm5,81.514V110H55V91.514L47.324,80H72.676Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconBank: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M2,118v-8H6v-8h4V94h4V50H10V42H34v8H30V94h4v8H48V94h4V50H48V42H72v8H68V94h4v8H86V94h4V50H86V42h24v8h-4V94h4v8h4v8h4v8H2Z"
                    opacity={IconBackOpacity}
                />
                <path d="M116,120H4a4,4,0,0,1-4-4v-4a4,4,0,0,1,4-4v-4a4,4,0,0,1,4-4V96a4,4,0,0,1,4-4V52a4,4,0,0,1-4-4V42H36v6a4,4,0,0,1-4,4V92a4,4,0,0,1,4,4v4H46V96a4,4,0,0,1,4-4V52a4,4,0,0,1-4-4V42H74v6a4,4,0,0,1-4,4V92a4,4,0,0,1,4,4v4H84V96a4,4,0,0,1,4-4V52a4,4,0,0,1-4-4V42h28v6a4,4,0,0,1-4,4V92a4,4,0,0,1,4,4v4a4,4,0,0,1,4,4v4a4,4,0,0,1,4,4v4A4,4,0,0,1,116,120ZM32,44H12v4H32V44ZM16,52V92H28V52H16ZM32,96H12v4H32V96ZM70,44H50v4H70V44ZM54,52V92H66V52H54ZM70,96H50v4H70V96Zm38-52H88v4h20V44ZM92,52V92h12V52H92Zm16,44H88v4h20V96Zm4,8H8v4H112v-4Zm4,8H4v4H116v-4ZM98,88a2,2,0,0,1-2-2V58a2,2,0,0,1,4,0V86A2,2,0,0,1,98,88ZM60,88a2,2,0,0,1-2-2V58a2,2,0,0,1,4,0V86A2,2,0,0,1,60,88ZM22,88a2,2,0,0,1-2-2V58a2,2,0,0,1,4,0V86A2,2,0,0,1,22,88Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M114,34v8H6V34H2L60,2l58,32h-4ZM60,14a6,6,0,1,0,6,6A6,6,0,0,0,60,14Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M120,34a2,2,0,0,1-2,2h-2v4a4,4,0,0,1-4,4H8a4,4,0,0,1-4-4V36H2a1.994,1.994,0,0,1-.962-3.743l0-.008,58-32,0,0.008a1.93,1.93,0,0,1,1.924,0l0-.008,58,32,0,0.008A1.991,1.991,0,0,1,120,34ZM60,4.284L9.765,32h100.47ZM112,36H8v4H112V36ZM42,20h4a2,2,0,0,1,0,4H42A2,2,0,0,1,42,20Zm18-8a8,8,0,1,1-8,8A8,8,0,0,1,60,12Zm0,12a4,4,0,1,0-4-4A4,4,0,0,0,60,24Zm14-4h4a2,2,0,0,1,0,4H74A2,2,0,0,1,74,20Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconChargeBack: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M100.977,95a30,30,0,1,0-51.954,0H5V25H115V95H100.977Z" opacity={IconBackOpacity} />
                <path d="M25,80a5,5,0,1,1,5,5A5,5,0,0,1,25,80Zm-5,5a5,5,0,1,1,5-5A5,5,0,0,1,20,85Zm95,15H97.355a29.964,29.964,0,0,0,5.931-10H110V50H10V90H46.714a29.973,29.973,0,0,0,5.931,10H5a5,5,0,0,1-5-5V25a5,5,0,0,1,5-5H115a5,5,0,0,1,5,5V95A5,5,0,0,1,115,100Zm-5-70H10V40H110V30Z" />
            </g>
            <g>
                <circle fill={IconColor} cx="75" cy="80" r="30" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M110,80A35,35,0,1,1,75,45,35,35,0,0,1,110,80ZM50,80A25,25,0,1,0,75,55,25,25,0,0,0,50,80ZM75,70v5H90a5,5,0,0,1,0,10H75v5a5,5,0,0,1-8.535,3.535h0l-10-10h0a5,5,0,0,1,0-7.071h0l10-10h0A5,5,0,0,1,75,70Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconCheck: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path
                d="M102.132,27.065l0.019,0.011-43,72-0.019-.011a5.974,5.974,0,0,1-9.375,1.178h0l-30-30h0a6,6,0,1,1,8.485-8.485h0L52.8,86.312,91.849,20.924l0.019,0.011A5.978,5.978,0,1,1,102.132,27.065Z"
                transform="translate(-0.5)"
            />
        </IconContainer>
    );
};

export const IconChevronDoubleLeft: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M24,60a5.981,5.981,0,0,0,1.757,4.243h0l24,24h0a6,6,0,1,0,8.485-8.485h0L38.485,60,58.243,40.243h0a6,6,0,1,0-8.485-8.485h0l-24,24h0A5.981,5.981,0,0,0,24,60Zm36,0a5.981,5.981,0,0,0,1.757,4.243h0l24,24h0a6,6,0,1,0,8.485-8.485h0L74.485,60,94.243,40.243h0a6,6,0,1,0-8.485-8.485h0l-24,24h0A5.981,5.981,0,0,0,60,60Z" />
        </IconContainer>
    );
};

export const IconChevronDoubleRight: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M96,60a5.981,5.981,0,0,1-1.757,4.243h0l-24,24h0a6,6,0,1,1-8.485-8.485h0L81.515,60,61.757,40.243h0a6,6,0,1,1,8.485-8.485h0l24,24h0A5.981,5.981,0,0,1,96,60ZM60,60a5.981,5.981,0,0,1-1.757,4.243h0l-24,24h0a6,6,0,1,1-8.485-8.485h0L45.515,60,25.757,40.243h0a6,6,0,1,1,8.485-8.485h0l24,24h0A5.981,5.981,0,0,1,60,60Z" />
        </IconContainer>
    );
};

export const IconChevronDown: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,78a5.981,5.981,0,0,1-4.243-1.757h0l-24-24h0a6,6,0,1,1,8.485-8.485h0L60,63.515,79.757,43.757h0a6,6,0,1,1,8.485,8.485h0l-24,24h0A5.981,5.981,0,0,1,60,78Z" />
        </IconContainer>
    );
};

export const IconChevronLeft: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M42,60a5.981,5.981,0,0,0,1.757,4.243h0l24,24h0a6,6,0,1,0,8.485-8.485h0L56.485,60,76.243,40.243h0a6,6,0,1,0-8.485-8.485h0l-24,24h0A5.981,5.981,0,0,0,42,60Z" />
        </IconContainer>
    );
};

export const IconChevronRight: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M78,60a5.981,5.981,0,0,1-1.757,4.243h0l-24,24h0a6,6,0,1,1-8.485-8.485h0L63.515,60,43.757,40.243h0a6,6,0,1,1,8.485-8.485h0l24,24h0A5.981,5.981,0,0,1,78,60Z" />
        </IconContainer>
    );
};

export const IconChevronUp: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,42a5.981,5.981,0,0,0-4.243,1.757h0l-24,24h0a6,6,0,1,0,8.485,8.485h0L60,56.485,79.757,76.243h0a6,6,0,1,0,8.485-8.485h0l-24-24h0A5.981,5.981,0,0,0,60,42Z" />
        </IconContainer>
    );
};

export const IconClose: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path
                d="M85.456,43.029L68.485,60,85.456,76.971a6,6,0,0,1-8.485,8.485L60,68.485,43.029,85.456a6,6,0,0,1-8.485-8.485L51.515,60,34.544,43.029a6,6,0,0,1,8.485-8.485L60,51.515l16.971-16.97A6,6,0,0,1,85.456,43.029Z"
                transform="translate(-0.016 -0.016)"
            />
        </IconContainer>
    );
};

export const IconCopy: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M114,120H42a6,6,0,0,1-6-6V42a6,6,0,0,1,6-6h72a6,6,0,0,1,6,6v72A6,6,0,0,1,114,120Zm-6-72H48v60h60V48ZM78,24a6,6,0,0,1-6-6V12H12V72h6a6,6,0,0,1,0,12H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0H78a6,6,0,0,1,6,6V18A6,6,0,0,1,78,24Z" />
        </IconContainer>
    );
};

export const IconCredits: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M90,80a30,30,0,0,0-60,0H5V10H115V80H90Z" opacity={IconBackOpacity} />
                <path d="M115,85H89.577a29.783,29.783,0,0,0,0-10H110V40H10V75H30.423a29.783,29.783,0,0,0,0,10H5a5,5,0,0,1-5-5V10A5,5,0,0,1,5,5H115a5,5,0,0,1,5,5V80A5,5,0,0,1,115,85Zm-5-70H10V25H110V15Z" />
            </g>
            <g>
                <circle fill={IconColor} cx="60" cy="80" r="30" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M60,115A35,35,0,1,1,95,80,35,35,0,0,1,60,115Zm0-60A25,25,0,1,0,85,80,25,25,0,0,0,60,55ZM75.258,71.621l-16,26-0.013-.008a4.982,4.982,0,0,1-7.781.923h0l-10-10h0a5,5,0,1,1,7.071-7.071h0l5.524,5.524L66.742,66.38l0.013,0.008a4.985,4.985,0,1,1,8.491,5.225Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconCustomers: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    fill={IconColor}
                    d="M105,95H90V85a19.921,19.921,0,0,0-5.634-13.9A14.942,14.942,0,0,1,90,70h10a15,15,0,0,1,15,15A10,10,0,0,1,105,95ZM95,50a10,10,0,1,1,10-10A10,10,0,0,1,95,50ZM25,50A10,10,0,1,1,35,40,10,10,0,0,1,25,50Zm5,20a14.942,14.942,0,0,1,5.634,1.1A19.921,19.921,0,0,0,30,85V95H15A10,10,0,0,1,5,85,15,15,0,0,1,20,70H30Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M106.875,100H88.651A9.941,9.941,0,0,0,90,95V90h16.25A3.75,3.75,0,0,0,110,86.25,11.25,11.25,0,0,0,98.75,75h-7.5a11.215,11.215,0,0,0-3.6.6,20.074,20.074,0,0,0-6.973-7.49A21.739,21.739,0,0,1,91.875,65h6.25A21.875,21.875,0,0,1,120,86.875,13.125,13.125,0,0,1,106.875,100ZM95,55a15,15,0,1,1,15-15A15,15,0,0,1,95,55Zm0-20a5,5,0,1,0,5,5A5,5,0,0,0,95,35ZM25,55A15,15,0,1,1,40,40,15,15,0,0,1,25,55Zm0-20a5,5,0,1,0,5,5A5,5,0,0,0,25,35Zm3.125,30a21.739,21.739,0,0,1,11.2,3.109A20.074,20.074,0,0,0,32.35,75.6a11.215,11.215,0,0,0-3.6-.6h-7.5A11.25,11.25,0,0,0,10,86.25,3.75,3.75,0,0,0,13.75,90H30v5a9.941,9.941,0,0,0,1.349,5H13.125A13.125,13.125,0,0,1,0,86.875,21.875,21.875,0,0,1,21.875,65h6.25Z"
                />
            </g>
            <g>
                <path
                    d="M80,105H40A10,10,0,0,1,30,95V85A20,20,0,0,1,50,65H70A20,20,0,0,1,90,85V95A10,10,0,0,1,80,105ZM60,45A15,15,0,1,1,75,30,15,15,0,0,1,60,45Z"
                    opacity={IconBackOpacity}
                />
                <path d="M80,110H40A15,15,0,0,1,25,95V85A25,25,0,0,1,50,60H70A25,25,0,0,1,95,85V95A15,15,0,0,1,80,110Zm5-25A15,15,0,0,0,70,70H50A15,15,0,0,0,35,85V95a5,5,0,0,0,5,5H80a5,5,0,0,0,5-5V85ZM60,50A20,20,0,1,1,80,30,20,20,0,0,1,60,50Zm0-30A10,10,0,1,0,70,30,10,10,0,0,0,60,20Z" />
            </g>
        </IconContainer>
    );
};

export const IconDashboard: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <rect fill={IconColor} x="15" y="15" width="35" height="35" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M50,55H15a5,5,0,0,1-5-5V15a5,5,0,0,1,5-5H50a5,5,0,0,1,5,5V50A5,5,0,0,1,50,55ZM45,20H20V45H45V20Z"
                />
            </g>
            <g>
                <path d="M70,15h35V50H70V15Zm0,55h35v35H70V70ZM15,70H50v35H15V70Z" opacity={IconBackOpacity} />
                <path d="M105,110H70a5,5,0,0,1-5-5V70a5,5,0,0,1,5-5h35a5,5,0,0,1,5,5v35A5,5,0,0,1,105,110Zm-5-35H75v25h25V75Zm5-20H70a5,5,0,0,1-5-5V15a5,5,0,0,1,5-5h35a5,5,0,0,1,5,5V50A5,5,0,0,1,105,55Zm-5-35H75V45h25V20ZM50,110H15a5,5,0,0,1-5-5V70a5,5,0,0,1,5-5H50a5,5,0,0,1,5,5v35A5,5,0,0,1,50,110ZM45,75H20v25H45V75Z" />
            </g>
        </IconContainer>
    );
};

export const IconDeposit: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M6,50V38H114V50H6Zm8,26H56a2,2,0,0,1,0,4H14A2,2,0,0,1,14,76Z" opacity={IconBackOpacity} />
                <path d="M14,88a2,2,0,0,1,0-4H26a2,2,0,0,1,0,4H14Zm20,0a2,2,0,0,1,0-4H46a2,2,0,0,1,0,4H34Zm20,0a2,2,0,0,1,0-4H66a22.059,22.059,0,0,0,.375,3.962A2.005,2.005,0,0,1,66,88H54Zm54,12h-4.932a22.052,22.052,0,0,0,3.357-4H108a8,8,0,0,0,8-8V56H4V88a8,8,0,0,0,8,8H69.575a22.073,22.073,0,0,0,3.357,4H12A12,12,0,0,1,0,88V32A12,12,0,0,1,12,20h96a12,12,0,0,1,12,12V88A12,12,0,0,1,108,100Zm0-76H12a8,8,0,0,0-8,8H116A8,8,0,0,0,108,24Zm8,12H4V52H116V36Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M88,102a3.987,3.987,0,0,0,2.828-1.172h0l10-10h0a4,4,0,1,0-5.656-5.657h0L92,88.343V70a4,4,0,0,0-4-4A18,18,0,0,1,88,102ZM84,70V88.343l-3.172-3.172h0a4,4,0,1,0-5.657,5.657h0l10,10h0A3.987,3.987,0,0,0,88,102a18,18,0,0,1,0-36A4,4,0,0,0,84,70Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M88,108a24,24,0,1,1,24-24A24,24,0,0,1,88,108Zm0-44a20,20,0,1,0,20,20A20,20,0,0,0,88,64ZM99.414,89.414L90,98.828V99H89.828l-0.414.414-0.005-.005a1.975,1.975,0,0,1-2.818,0l-0.005.005L86.172,99H86V98.828l-9.414-9.414h0a2,2,0,1,1,2.828-2.828h0L86,93.172V70a2,2,0,0,1,4,0V93.172l6.586-6.586h0a2,2,0,1,1,2.828,2.828h0Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconDocument: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M60,45h40v70H20V5H60V45Z" opacity={IconBackOpacity} />
                <path d="M40,85H80a5,5,0,0,1,0,10H40A5,5,0,0,1,40,85Zm0-20H80a5,5,0,0,1,0,10H40A5,5,0,0,1,40,65ZM60,10H30a5,5,0,0,0-5,5v90a5,5,0,0,0,5,5H90a5,5,0,0,0,5-5V45h10v60a15,15,0,0,1-15,15H30a15,15,0,0,1-15-15V15A15,15,0,0,1,30,0H60V10Z" />
            </g>
            <g>
                <path fill={IconColor} d="M60,6l40,39H60V6Z" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M105,45a5,5,0,0,1-5,5H65A10,10,0,0,1,55,40V5a5,5,0,0,1,8.535-3.536h0l40,40h0A4.987,4.987,0,0,1,105,45ZM65,40H87.929L65,17.071V40Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconEmail: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M96,78a17.913,17.913,0,0,1-10.018-3.046A29.965,29.965,0,1,1,90,60a6,6,0,0,0,12,0A42,42,0,1,0,89.7,89.7h0a6,6,0,0,1,8.485,8.485h0A54,54,0,1,1,114,60,18,18,0,0,1,96,78ZM60,42A18,18,0,1,0,78,60,18,18,0,0,0,60,42Z" />
        </IconContainer>
    );
};

export const IconExchangeRate: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    fill={IconColor}
                    d="M85,70L65,50H75A35,35,0,0,0,5,50a45,45,0,0,1,90,0h10Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M108.536,53.536h0l-20,20h0a5,5,0,0,1-7.071,0h0l-20-20h0A5,5,0,0,1,65,45h4.574A30,30,0,0,0,10,50,5,5,0,0,1,0,50q0-1.036.052-2.058A49.986,49.986,0,0,1,99.732,45H105A5,5,0,0,1,108.536,53.536ZM90,50A39.937,39.937,0,0,0,45,10.322,40,40,0,0,1,80,50a4.988,4.988,0,0,1-3.258,4.671L85,62.929l8.258-8.258A4.988,4.988,0,0,1,90,50Z"
                />
            </g>
            <g>
                <path d="M35,50L55,70H45a35,35,0,0,0,70,0,45,45,0,0,1-90,0H15Z" opacity={IconBackOpacity} />
                <path d="M11.465,66.465h0l20-20h0a5,5,0,0,1,7.071,0h0l20,20h0A5,5,0,0,1,55,75H50.426A30,30,0,0,0,110,70a5,5,0,0,1,10,0q0,1.036-.052,2.058A49.986,49.986,0,0,1,20.268,75H15A5,5,0,0,1,11.465,66.465ZM30,70a40,40,0,0,0,40,40,40.435,40.435,0,0,0,5-.322A40,40,0,0,1,40,70a4.988,4.988,0,0,1,3.258-4.671L35,57.071l-8.258,8.258A4.988,4.988,0,0,1,30,70Z" />
            </g>
        </IconContainer>
    );
};

export const IconFilter: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M95,110a5,5,0,0,1-5-5V43.651a9.943,9.943,0,0,0,10,0V105A5,5,0,0,1,95,110ZM90,26.349V15a5,5,0,0,1,10,0V26.349A9.943,9.943,0,0,0,90,26.349ZM60,75a9.941,9.941,0,0,0-5,1.349V15a5,5,0,0,1,10,0V76.349A9.941,9.941,0,0,0,60,75ZM25,110a5,5,0,0,1-5-5V43.651a9.943,9.943,0,0,0,10,0V105A5,5,0,0,1,25,110ZM20,26.349V15a5,5,0,0,1,10,0V26.349A9.943,9.943,0,0,0,20,26.349ZM60,95a9.941,9.941,0,0,0,5-1.349V105a5,5,0,0,1-10,0V93.651A9.941,9.941,0,0,0,60,95Z" />
            </g>
            <g xmlns="http://www.w3.org/2000/svg" id="fore">
                <path
                    fill={IconColor}
                    d="M95,45a10,10,0,1,1,10-10A10,10,0,0,1,95,45ZM60,95A10,10,0,1,1,70,85,10,10,0,0,1,60,95ZM25,45A10,10,0,1,1,35,35,10,10,0,0,1,25,45Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M95,50a15,15,0,1,1,15-15A15,15,0,0,1,95,50Zm0-20a5,5,0,1,0,5,5A5,5,0,0,0,95,30ZM60,100A15,15,0,1,1,75,85,15,15,0,0,1,60,100Zm0-20a5,5,0,1,0,5,5A5,5,0,0,0,60,80ZM25,50A15,15,0,1,1,40,35,15,15,0,0,1,25,50Zm0-20a5,5,0,1,0,5,5A5,5,0,0,0,25,30Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconHistory: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    fill={IconColor}
                    d="M100,100v15H20V100A35,35,0,0,0,55,65a35.262,35.262,0,0,0-.361-5H55A35.009,35.009,0,0,1,21.458,35H98.542A35.009,35.009,0,0,1,65,60h0.361A34.985,34.985,0,0,0,100,100Z"
                />
            </g>
            <g>
                <path
                    d="M54.64,60.009A35.254,35.254,0,0,1,55,65a35,35,0,0,1-35,35V95A35,35,0,0,1,54.64,60.009ZM65,65a35.254,35.254,0,0,1,.36-4.991A35,35,0,0,1,100,95v5A35,35,0,0,1,65,65ZM21.458,35A34.987,34.987,0,0,1,20,25V5h80V25a34.987,34.987,0,0,1-1.458,10H21.458Z"
                    opacity={IconBackOpacity}
                />
                <path d="M105,10V25A39.983,39.983,0,0,1,84.366,60,39.983,39.983,0,0,1,105,95v15a5,5,0,0,1,0,10H15a5,5,0,0,1,0-10V95A39.983,39.983,0,0,1,35.634,60,39.983,39.983,0,0,1,15,25V10A5,5,0,0,1,15,0h90A5,5,0,0,1,105,10ZM25,95v15H95V95A30,30,0,0,0,65,65H55A30,30,0,0,0,25,95ZM95,10H25V25A30,30,0,0,0,55,55H65A30,30,0,0,0,95,25V10Z" />
            </g>
        </IconContainer>
    );
};

export const IconInfo: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,108a48,48,0,1,1,48-48A48,48,0,0,1,60,108Zm0-84A36,36,0,1,0,96,60,36,36,0,0,0,60,24Zm0,60a6,6,0,0,1-6-6V60a6,6,0,0,1,12,0V78A6,6,0,0,1,60,84Zm0-36a6,6,0,1,1,6-6A6,6,0,0,1,60,48Z" />
        </IconContainer>
    );
};

export const IconLock: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M90,114H30A18,18,0,0,1,12,96V66A18,18,0,0,1,30,48V36a30,30,0,0,1,60,0V48a18,18,0,0,1,18,18V96A18,18,0,0,1,90,114ZM78,36a18,18,0,0,0-36,0V48H78V36ZM96,66a6,6,0,0,0-6-6H30a6,6,0,0,0-6,6V96a6,6,0,0,0,6,6H90a6,6,0,0,0,6-6V66ZM63,80.168V90a3,3,0,0,1-6,0V80.168A6,6,0,1,1,63,80.168Z" />
        </IconContainer>
    );
};

export const IconLogout: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M35,45A10,10,0,0,0,25,55V65A10,10,0,0,0,35,75H65v25a15,15,0,0,1-15,15H20A15,15,0,0,1,5,100V19A15,15,0,0,1,20,4H50A15,15,0,0,1,65,19V45H35Z"
                    opacity={IconBackOpacity}
                />
                <path d="M65,90a5,5,0,0,1,5,5v5a20,20,0,0,1-20,20H20A20,20,0,0,1,0,100V20A20,20,0,0,1,20,0H50A20,20,0,0,1,70,20v5a5,5,0,0,1-10,0V20A10,10,0,0,0,50,10H20A10,10,0,0,0,10,20v80a10,10,0,0,0,10,10H50a10,10,0,0,0,10-10V95A5,5,0,0,1,65,90Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M115,60L85,91V75H35A10,10,0,0,1,25,65V55A10,10,0,0,1,35,45H85V29Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M120,60a4.987,4.987,0,0,1-1.464,3.535h0l-30,30h0A5,5,0,0,1,80,90V80H35A15,15,0,0,1,20,65V55A15,15,0,0,1,35,40H80V30a5,5,0,0,1,8.535-3.535h0l30,30h0A4.987,4.987,0,0,1,120,60ZM90,42.071V50H35a5,5,0,0,0-5,5V65a5,5,0,0,0,5,5H90v7.929L107.929,60Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconMenu: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M96,66H24a6,6,0,0,1,0-12H96A6,6,0,0,1,96,66Zm0-30H24a6,6,0,0,1,0-12H96A6,6,0,0,1,96,36ZM24,84H96a6,6,0,0,1,0,12H24A6,6,0,0,1,24,84Z" />
        </IconContainer>
    );
};

export const IconMerchant: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M50,110V86a10,10,0,0,0-20,0v24H10V50H110v60H50Z" opacity={IconBackOpacity} />
                <path d="M120,115a5,5,0,0,1-5,5H5a5,5,0,1,1,0-10H5V50H15v60h90V50h10v60A5,5,0,0,1,120,115Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M115,39h0a11,11,0,0,1-22,0h0a11,11,0,0,1-22,0h0a11,11,0,0,1-22,0h0a11,11,0,0,1-22,0h0A11,11,0,0,1,5,39H5a10.937,10.937,0,0,1,1.743-5.928L15,5h90l8.257,28.072A10.941,10.941,0,0,1,115,39Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M120,39h0A15.985,15.985,0,0,1,93,50.6a15.947,15.947,0,0,1-22,0,15.947,15.947,0,0,1-22,0,15.947,15.947,0,0,1-22,0A15.985,15.985,0,0,1,0,39H0a4.946,4.946,0,0,1,.225-1.4L0.2,37.589l10-34L10.225,3.6A4.984,4.984,0,0,1,15,0h90a4.984,4.984,0,0,1,4.775,3.6l0.022-.006,10,34-0.022.006A4.945,4.945,0,0,1,120,39ZM101.259,10H18.741L10.054,39.536A5.984,5.984,0,0,0,22,39h0a5,5,0,0,1,10,0h0a6,6,0,0,0,12,0h0a5,5,0,0,1,10,0h0a6,6,0,0,0,12,0h0a5,5,0,0,1,10,0h0a6,6,0,0,0,12,0h0a5,5,0,0,1,10,0h0a5.984,5.984,0,0,0,11.946.536ZM95,27H25a5,5,0,0,1,0-10H95A5,5,0,0,1,95,27ZM40,70A15,15,0,0,1,55,85v25H45V85a5,5,0,0,0-10,0v25H25V85A15,15,0,0,1,40,70Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconMinus: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M90,66H30a6,6,0,0,1,0-12H90A6,6,0,0,1,90,66Z" />
        </IconContainer>
    );
};

export const IconPlus: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M90,66H66V90a6,6,0,0,1-12,0V66H30a6,6,0,0,1,0-12H54V30a6,6,0,0,1,12,0V54H90A6,6,0,0,1,90,66Z" />
        </IconContainer>
    );
};

export const IconRefresh: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M118.243,70.243h0l-12,12h0a6,6,0,0,1-8.486,0h0l-12-12h0A6,6,0,0,1,90,60h6A36,36,0,0,0,60,24a6,6,0,0,1,0-12,48,48,0,0,1,48,48h6A6,6,0,0,1,118.243,70.243ZM60,96a6,6,0,0,1,0,12A48,48,0,0,1,12,60H6A6,6,0,0,1,1.757,49.757h0l12-12h0a6,6,0,0,1,8.485,0h0l12,12h0A6,6,0,0,1,30,60H24A36,36,0,0,0,60,96Z" />
        </IconContainer>
    );
};

export const IconRefund: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <circle cx="60" cy="60" r="25" fill={IconColor} />
            </g>
            <g>
                <path d="M60,110a5,5,0,0,1,0-10A40,40,0,1,0,20,60h5a5,5,0,0,1,3.535,8.535h0l-10,10h0a5,5,0,0,1-7.071,0h0l-10-10h0A5,5,0,0,1,5,60h5A50,50,0,1,1,60,110Z" />
            </g>
        </IconContainer>
    );
};

export const IconRoundCheck: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,108a48,48,0,1,1,48-48A48,48,0,0,1,60,108Zm0-84A36,36,0,1,0,96,60,36,36,0,0,0,60,24ZM82.992,45.328l-0.014.021-0.006.009-23.98,35.97h0a6,6,0,0,1-9.233.916h0l-12-12h0a6,6,0,1,1,8.485-8.485h0l6.825,6.825,19.94-29.91h0a6,6,0,1,1,9.981,6.654h0Z" />
        </IconContainer>
    );
};

export const IconRoundCross: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,108a48,48,0,1,1,48-48A48,48,0,0,1,60,108Zm0-84A36,36,0,1,0,96,60,36,36,0,0,0,60,24Zm8.485,36,8.485,8.485a6,6,0,0,1-8.485,8.485L60,68.485l-8.485,8.485a6,6,0,0,1-8.485-8.485L51.515,60l-8.485-8.485a6,6,0,0,1,8.485-8.485L60,51.515l8.485-8.485a6,6,0,0,1,8.485,8.485Z" />
        </IconContainer>
    );
};

export const IconRoundMinus: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,108a48,48,0,1,1,48-48A48,48,0,0,1,60,108Zm0-84A36,36,0,1,0,96,60,36,36,0,0,0,60,24ZM78,66H42a6,6,0,0,1,0-12H78A6,6,0,0,1,78,66Z" />
        </IconContainer>
    );
};

export const IconRoundPlus: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,108a48,48,0,1,1,48-48A48,48,0,0,1,60,108Zm0-84A36,36,0,1,0,96,60,36,36,0,0,0,60,24ZM78,66H66V78a6,6,0,0,1-12,0V66H42a6,6,0,0,1,0-12H54V42a6,6,0,0,1,12,0V54H78A6,6,0,0,1,78,66Z" />
        </IconContainer>
    );
};

export const IconSafeBox: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M100,94H96a6,6,0,0,0,6-6v4A2,2,0,0,1,100,94ZM96,82a6,6,0,0,0,0,12H20a2,2,0,0,1-2-2V88.921A7.99,7.99,0,0,0,22,82V78a7.99,7.99,0,0,0-4-6.921V40.921A7.99,7.99,0,0,0,22,34V30a7.99,7.99,0,0,0-4-6.921V20a2,2,0,0,1,2-2H96a6,6,0,1,0,6,6V88A6,6,0,0,0,96,82ZM60,22A32,32,0,1,0,92,54,32,32,0,0,0,60,22Zm36-4h4a2,2,0,0,1,2,2v4A6,6,0,0,0,96,18Z"
                    opacity={IconBackOpacity}
                />
                <path d="M100,112H99.236l-3.447,6.894-0.007,0A1.993,1.993,0,0,1,94,120H82a1.993,1.993,0,0,1-1.782-1.109l-0.007,0L76.764,112H43.236l-3.447,6.894-0.007,0A1.993,1.993,0,0,1,38,120H26a1.993,1.993,0,0,1-1.782-1.109l-0.007,0L20.764,112H20A20,20,0,0,1,0,92V20A20,20,0,0,1,20,0h80a20,20,0,0,1,20,20V92A20,20,0,0,1,100,112Zm-16.764,4h9.528l2-4H81.236Zm-56,0h9.528l2-4H25.236ZM116,20A16,16,0,0,0,100,4H20A16,16,0,0,0,4,20V92a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V20Zm-16,80H20a8,8,0,0,1-8-8V87.633A5.982,5.982,0,0,1,8,82V78a5.982,5.982,0,0,1,4-5.633V39.633A5.982,5.982,0,0,1,8,34V30a5.982,5.982,0,0,1,4-5.633V20a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V92A8,8,0,0,1,100,100ZM12,82a2,2,0,0,0,4,0V78a2,2,0,0,0-4,0v4Zm2-54a2,2,0,0,0-2,2v4a2,2,0,0,0,4,0V30A2,2,0,0,0,14,28Zm90-8a4,4,0,0,0-4-4H20a4,4,0,0,0-4,4v4.367A5.982,5.982,0,0,1,20,30v4a5.982,5.982,0,0,1-4,5.633V72.367A5.982,5.982,0,0,1,20,78v4a5.982,5.982,0,0,1-4,5.633V92a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V20ZM96,92a4,4,0,1,1,4-4A4,4,0,0,1,96,92Zm0-64a4,4,0,1,1,4-4A4,4,0,0,1,96,28Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M79.542,40.115A24.127,24.127,0,0,1,81.763,44H75.657ZM74.92,44H69.789a14,14,0,1,0,0,20H74.92a18.049,18.049,0,0,1-5.351,5.226l4.312,4.312A23.877,23.877,0,0,1,64,77.64v-6.1a17.569,17.569,0,0,1-8,0v6.1a23.877,23.877,0,0,1-9.881-4.1l4.312-4.312a18.062,18.062,0,0,1-5.657-5.657l-4.316,4.316A23.831,23.831,0,0,1,36.346,58h6.115a17.569,17.569,0,0,1,0-8H36.346a23.831,23.831,0,0,1,4.112-9.885l4.316,4.316a18.063,18.063,0,0,1,5.657-5.657l-4.312-4.312A23.877,23.877,0,0,1,56,30.36v6.1a17.569,17.569,0,0,1,8,0v-6.1a23.877,23.877,0,0,1,9.881,4.1L69.57,38.774A18.049,18.049,0,0,1,74.92,44Zm2.961,8a16.866,16.866,0,0,1,0,4h-4.04a12.65,12.65,0,0,0,0-4h4.04Zm1.661,15.885L75.657,64h6.106A24.127,24.127,0,0,1,79.542,67.885Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M60,84A30,30,0,1,1,90,54,30,30,0,0,1,60,84ZM79.732,37.1l-4.248,4.248a20.111,20.111,0,0,0-2.828-2.828L76.9,34.269A25.859,25.859,0,0,0,62,28.1v6c-0.658-.065-1.325-0.1-2-0.1s-1.342.036-2,.1v-6a25.858,25.858,0,0,0-14.9,6.168l4.248,4.248a20.111,20.111,0,0,0-2.828,2.828L40.269,37.1A25.858,25.858,0,0,0,34.1,52h6c-0.065.658-.1,1.325-0.1,2s0.036,1.342.1,2h-6a25.858,25.858,0,0,0,6.168,14.9l4.248-4.248a20.111,20.111,0,0,0,2.828,2.828L43.1,73.732A25.858,25.858,0,0,0,58,79.9v-6c0.658,0.065,1.325.1,2,.1s1.342-.036,2-0.1v6a25.859,25.859,0,0,0,14.9-6.168l-4.248-4.248a20.111,20.111,0,0,0,2.828-2.828L79.732,70.9A25.885,25.885,0,0,0,84.716,62H68.882a12.014,12.014,0,0,1-1.937,1.774h0a11.919,11.919,0,0,1-5.907,2.174C60.7,65.981,60.351,66,60,66s-0.7-.019-1.039-0.052a11.919,11.919,0,0,1-5.907-2.174h0a12.05,12.05,0,0,1-2.828-2.828h0a11.921,11.921,0,0,1-2.174-5.907C48.02,54.7,48,54.351,48,54s0.02-.7.052-1.039a11.921,11.921,0,0,1,2.174-5.907h0a12.053,12.053,0,0,1,2.828-2.828h0a11.921,11.921,0,0,1,5.907-2.174C59.3,42.02,59.649,42,60,42s0.7,0.02,1.039.052a11.921,11.921,0,0,1,5.907,2.174h0A12.019,12.019,0,0,1,68.882,46H84.716A25.885,25.885,0,0,0,79.732,37.1ZM64.828,56l2.058,2.058A7.941,7.941,0,0,0,67.738,56H64.828Zm2.909-4a7.94,7.94,0,0,0-.852-2.058L64.828,52h2.909ZM62,58.828v2.909a7.941,7.941,0,0,0,2.058-.852Zm2.058-11.714A7.941,7.941,0,0,0,62,46.262v2.909ZM55.942,60.886A7.94,7.94,0,0,0,58,61.738V58.828ZM58,49.172V46.262a7.94,7.94,0,0,0-2.058.852ZM52.262,56a7.941,7.941,0,0,0,.852,2.058L55.172,56H52.262Zm2.909-4-2.058-2.058A7.94,7.94,0,0,0,52.262,52h2.909ZM80,54c0-.675-0.036-1.342-0.1-2h6c-0.052-.675-0.132-1.341-0.234-2H71.3a11.879,11.879,0,0,1,.652,2.961C71.98,53.3,72,53.649,72,54s-0.02.7-.052,1.039A11.88,11.88,0,0,1,71.3,58H85.665c0.1-.659.183-1.325,0.234-2h-6C79.964,55.342,80,54.675,80,54Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconSearch: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M80,75a35,35,0,1,1,35-35A35,35,0,0,1,80,75Zm0-60A25,25,0,0,0,55,40a5,5,0,0,0,10,0A15,15,0,0,1,80,25,5,5,0,0,0,80,15Z"
                    opacity={IconBackOpacity}
                />
                <path d="M80,80a39.823,39.823,0,0,1-25.08-8.849L43.536,82.536l-7.071-7.071,11.5-11.5A40,40,0,1,1,80,80Zm0-70a30,30,0,1,0,30,30A30,30,0,0,0,80,10Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M42.071,92.071h0l-20,20h0A10,10,0,1,1,7.929,97.929h0l20-20h0A10,10,0,0,1,42.071,92.071Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M45.607,95.607h0l-20,20h0A15,15,0,0,1,4.393,94.393h0l20-20h0A15,15,0,1,1,45.607,95.607ZM35,80a4.984,4.984,0,0,0-3.535,1.465h0l-20,20h0a5,5,0,0,0,7.071,7.072h0l20-20h0A5,5,0,0,0,35,80Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconSettings: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M110,50V70H98.74a39.744,39.744,0,0,1-4.284,10.313l7.971,7.971L88.284,102.426l-7.971-7.971A39.744,39.744,0,0,1,70,98.74V110H50V98.74a39.744,39.744,0,0,1-10.313-4.284l-7.971,7.971L17.574,88.284l7.971-7.971A39.744,39.744,0,0,1,21.26,70H10V50H21.26a39.744,39.744,0,0,1,4.284-10.313l-7.971-7.971L31.716,17.574l7.971,7.971A39.744,39.744,0,0,1,50,21.26V10H70V21.26a39.744,39.744,0,0,1,10.313,4.284l7.971-7.971,14.142,14.142-7.971,7.971A39.744,39.744,0,0,1,98.74,50H110ZM60,40A20,20,0,1,0,80,60,20,20,0,0,0,60,40Z"
                    opacity={IconBackOpacity}
                />
                <path d="M105,75h-2.571a44.352,44.352,0,0,1-1.817,4.4l1.814,1.814a10,10,0,0,1,0,14.142l-7.071,7.071a10,10,0,0,1-14.142,0L79.4,100.612a44.352,44.352,0,0,1-4.4,1.817V105a10,10,0,0,1-10,10H55a10,10,0,0,1-10-10v-2.571a44.352,44.352,0,0,1-4.4-1.817l-1.814,1.814a10,10,0,0,1-14.142,0l-7.071-7.071a10,10,0,0,1,0-14.142L19.388,79.4A44.715,44.715,0,0,1,17.571,75H15A10,10,0,0,1,5,65V55A10,10,0,0,1,15,45h2.571a44.715,44.715,0,0,1,1.817-4.4l-1.814-1.814a10,10,0,0,1,0-14.142l7.071-7.071a10,10,0,0,1,14.142,0L40.6,19.388A44.715,44.715,0,0,1,45,17.571V15A10,10,0,0,1,55,5H65A10,10,0,0,1,75,15v2.571a44.715,44.715,0,0,1,4.4,1.817l1.814-1.814a10,10,0,0,1,14.142,0l7.071,7.071a10,10,0,0,1,0,14.142L100.612,40.6a44.352,44.352,0,0,1,1.817,4.4H105a10,10,0,0,1,10,10V65A10,10,0,0,1,105,75Zm0-20H94.609A34.864,34.864,0,0,0,88,39.069l7.353-7.354-7.071-7.071-7.346,7.346A34.722,34.722,0,0,0,65,25.361V15H55V25.361a34.722,34.722,0,0,0-15.938,6.629l-7.346-7.346-7.071,7.071L32,39.069A34.864,34.864,0,0,0,25.392,55H15V65H25.392A34.864,34.864,0,0,0,32,80.931l-7.353,7.353,7.071,7.071,7.346-7.346A34.722,34.722,0,0,0,55,94.639V105H65V94.639a34.722,34.722,0,0,0,15.938-6.629l7.346,7.346,7.071-7.071L88,80.931A34.864,34.864,0,0,0,94.609,65H105V55Z" />
            </g>
            <g>
                <circle fill={IconColor} cx="60" cy="60" r="20" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M60,85A25,25,0,1,1,85,60,25,25,0,0,1,60,85Zm0-40A15,15,0,1,0,75,60,15,15,0,0,0,60,45Zm0,20a5,5,0,1,1,5-5A5,5,0,0,1,60,65Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconSettlements: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M55,85a30,30,0,0,0,23.635,29.308A9.954,9.954,0,0,1,75,115H15A10,10,0,0,1,5,105V15A10,10,0,0,1,15,5H75A10,10,0,0,1,85,15V55A30,30,0,0,0,55,85Z"
                    opacity={IconBackOpacity}
                />
                <path d="M25,90a5,5,0,0,1,0-10H55.423a29.783,29.783,0,0,0,0,10H25ZM59.024,70H25a5,5,0,0,1,0-10H65a4.947,4.947,0,0,1,2.458.67A30.137,30.137,0,0,0,59.024,70ZM65,30H25a5,5,0,0,1,0-10H65A5,5,0,0,1,65,30Zm0,20H25a5,5,0,0,1,0-10H65A5,5,0,0,1,65,50Zm20,5a30.168,30.168,0,0,0-5,.423V15a5,5,0,0,0-5-5H15a5,5,0,0,0-5,5v90a5,5,0,0,0,5,5H68.419A29.854,29.854,0,0,0,85,115c0.4,0,.791-0.015,1.185-0.03A14.945,14.945,0,0,1,75,120H15A15,15,0,0,1,0,105V15A15,15,0,0,1,15,0H75A15,15,0,0,1,90,15V55.423A30.168,30.168,0,0,0,85,55Z" />
            </g>
            <g>
                <circle cx="85" cy="85" r="30" fill={IconColor} opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M85,120a35,35,0,1,1,35-35A35,35,0,0,1,85,120Zm0-60a25,25,0,1,0,25,25A25,25,0,0,0,85,60Zm10,40H75a5,5,0,0,1,0-10h3.6L75.149,76.213l0.015,0A4.945,4.945,0,0,1,80,70H90a4.945,4.945,0,0,1,4.836,6.209l0.015,0L91.4,90H95A5,5,0,0,1,95,100Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconTopUp: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M105,100H97.355a30,30,0,1,0-44.71,0H15A10,10,0,0,1,5,90V20A10,10,0,0,1,15,10h95V31.349A9.988,9.988,0,0,1,115,40V90A10,10,0,0,1,105,100Z"
                    opacity={IconBackOpacity}
                />
                <path d="M105,105H91.581a30.153,30.153,0,0,0,9.4-10H105a5,5,0,0,0,5-5V40a5,5,0,0,0-5-5H15a14.941,14.941,0,0,1-5-.872V90a5,5,0,0,0,5,5H49.024a30.146,30.146,0,0,0,9.4,10H15A15,15,0,0,1,0,90V20A15,15,0,0,1,15,5h90a5,5,0,0,1,0,10H15a5,5,0,0,0,0,10h90a15,15,0,0,1,15,15V90A15,15,0,0,1,105,105Z" />
            </g>
            <g>
                <circle cx="75" cy="80" r="30" fill={IconColor} opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M75,115a35,35,0,1,1,35-35A35,35,0,0,1,75,115Zm0-60a25,25,0,1,0,25,25A25,25,0,0,0,75,55ZM85,80H80V95a5,5,0,0,1-10,0V80H65a5,5,0,0,1-3.535-8.535h0l10-10h0a5,5,0,0,1,7.071,0h0l10,10h0A5,5,0,0,1,85,80Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconTransactions: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path d="M35,55V45H85V16H35V5L6,30Z" opacity={IconBackOpacity} />
                <path d="M85,50H40v5a4.974,4.974,0,0,1-8.186,3.824l-0.015.017-30-25,0.015-.017a4.937,4.937,0,0,1,0-7.647L1.8,26.159l30-25,0.015,0.017A4.974,4.974,0,0,1,40,5v5H85a5,5,0,0,1,5,5V45A5,5,0,0,1,85,50ZM80,20H30V15.675L12.81,30,30,44.325V40H80V20Z" />
            </g>
            <g>
                <path fill={IconColor} d="M85,115V105H35V76H85V65l29,25Z" opacity={IconForeOpacity} />
                <path
                    fill={IconColor}
                    d="M35,110H80v5a4.974,4.974,0,0,0,8.186,3.824l0.014,0.017,30-25-0.015-.017a4.937,4.937,0,0,0,0-7.647l0.015-.017-30-25-0.014.017A4.974,4.974,0,0,0,80,65v5H35a5,5,0,0,0-5,5v30A5,5,0,0,0,35,110Zm5-30H90V75.675L107.19,90,90,104.325V100H40V80Z"
                />
            </g>
        </IconContainer>
    );
};

export const IconUser: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M40,75H80a35,35,0,0,1,35,35v0a5,5,0,0,1-5,5H10a5,5,0,0,1-5-5v0A35,35,0,0,1,40,75Z"
                    opacity={IconBackOpacity}
                />
                <path d="M110,120H10A10,10,0,0,1,0,110,40,40,0,0,1,40,70H80a40,40,0,0,1,40,40A10,10,0,0,1,110,120ZM80,80H40a30,30,0,0,0-30,30H110A30,30,0,0,0,80,80Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M60,60A30,30,0,1,1,90,30,30,30,0,0,1,60,60Zm0-50A20,20,0,1,0,80,30,20,20,0,0,0,60,10Z"
                />
                <circle fill={IconColor} cx="60" cy="30" r="25" opacity={IconForeOpacity} />
            </g>
        </IconContainer>
    );
};

export const IconView: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M60,96C30.177,96,6,79.882,6,60S30.177,24,60,24s54,16.118,54,36S89.823,96,60,96Zm0-60C36.8,36,18,46.745,18,60S36.8,84,60,84s42-10.745,42-24S83.2,36,60,36Zm0,42A18,18,0,1,1,78,60,18,18,0,0,1,60,78Zm0-24a6,6,0,1,0,6,6A6,6,0,0,0,60,54Z" />
        </IconContainer>
    );
};

export const IconViewHide: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path
                d="M101.508,83.023L93.186,74.7C98.705,70.639,102,65.541,102,60c0-13.255-18.8-24-42-24-1.8,0-3.574.072-5.317,0.2L44.078,25.593A79.236,79.236,0,0,1,60,24c29.823,0,54,16.118,54,36C114,68.757,109.306,76.782,101.508,83.023ZM77.974,59.489L60.511,42.026A17.976,17.976,0,0,1,77.974,59.489Zm28.269,44.268a6,6,0,0,1-8.486,8.486h0l-18.6-18.6A77.972,77.972,0,0,1,60,96C30.177,96,6,79.882,6,60c0-9.582,5.622-18.285,14.782-24.733L7.757,22.243h0a6,6,0,1,1,8.485-8.485h0l90,90h0ZM18,60c0,13.255,18.8,24,42,24a72.645,72.645,0,0,0,8.963-.552L63.2,77.689A17.883,17.883,0,0,1,42.311,56.8L29.2,43.688C22.252,47.969,18,53.7,18,60Z"
                transform="translate(0 -3)"
            />
        </IconContainer>
    );
};

export const IconWarning: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <path d="M120,90a18,18,0,0,1-18,18H18A17.986,17.986,0,0,1,3.263,79.684l-0.009-.006,42-60,0.009,0.006a17.975,17.975,0,0,1,29.475,0l0.009-.006,42,60-0.009.006A17.9,17.9,0,0,1,120,90Zm-13.085-3.441-42-60-0.007,0a5.98,5.98,0,0,0-9.817,0l-0.007,0-42,60,0.007,0A5.989,5.989,0,0,0,18,96h84a5.988,5.988,0,0,0,4.908-9.436ZM60,88a6,6,0,1,1,6-6A6,6,0,0,1,60,88Zm0-16a6,6,0,0,1-6-6V42a6,6,0,0,1,12,0V66A6,6,0,0,1,60,72Z" />
        </IconContainer>
    );
};

export const IconWithdrawal: React.FC<IconProps> = ({ size = 24, className, ...options }): JSX.Element => {
    return (
        <IconContainer className={classNames(className)} size={size} {...options}>
            <g>
                <path
                    d="M110,20a6,6,0,0,0-12,0,6,6,0,0,0-12,0,6,6,0,1,0-6,6H6V20A10,10,0,0,1,16,10h88a10,10,0,0,1,10,10v6H104A6,6,0,0,0,110,20ZM86,20a6,6,0,0,0,6,6H80A6,6,0,0,0,86,20Zm12,0a6,6,0,0,0,6,6H92A6,6,0,0,0,98,20Z"
                    opacity={IconBackOpacity}
                />
                <path d="M104,56H92V52h12a12,12,0,0,0,12-12V32H4v8A12,12,0,0,0,16,52H28v4H16A16,16,0,0,1,0,40V20A16,16,0,0,1,16,4h88a16,16,0,0,1,16,16V40A16,16,0,0,1,104,56Zm12-36A12,12,0,0,0,104,8H16A12,12,0,0,0,4,20v8H116V20ZM80,16a4,4,0,1,1-4,4A4,4,0,0,1,80,16Zm24,0a4,4,0,1,1-4,4A4,4,0,0,1,104,16Z" />
            </g>
            <g>
                <path
                    fill={IconColor}
                    d="M44,64a16,16,0,0,0,32,0V91.046A18.02,18.02,0,0,0,65.046,102H54.954A18.02,18.02,0,0,0,44,91.046V64Zm16,8a8,8,0,1,1,8-8A8,8,0,0,1,60,72Zm0-24A16,16,0,0,0,44,64V36.954A17.973,17.973,0,0,0,51.354,32H68.647A17.973,17.973,0,0,0,76,36.954V64A16,16,0,0,0,60,48Z"
                    opacity={IconForeOpacity}
                />
                <path
                    fill={IconColor}
                    d="M113.414,101.414h0l-6,6h0a2,2,0,0,1-2.828,0h0l-6-6h0a2,2,0,1,1,2.828-2.828h0L104,101.172V90a2,2,0,0,1,4,0v11.172l2.586-2.586h0A2,2,0,1,1,113.414,101.414ZM92,24a4,4,0,1,1,4-4A4,4,0,0,1,92,24Zm-2,8v76a8,8,0,0,1-8,8H38a8,8,0,0,1-8-8V32h4v76a4,4,0,0,0,4,4H82a4,4,0,0,0,4-4V32h4ZM70,108H50A12,12,0,0,0,38,96V32H48.5A15.909,15.909,0,0,1,42,35.476V92.524A16,16,0,0,1,53.476,104H66.525A16,16,0,0,1,78,92.524V35.476A15.909,15.909,0,0,1,71.5,32H82V96A12,12,0,0,0,70,108ZM60,78A14,14,0,1,1,74,64,14,14,0,0,1,60,78Zm0-24A10,10,0,1,0,70,64,10,10,0,0,0,60,54ZM21.414,101.414l-6,6h0a2,2,0,0,1-2.828,0h0l-6-6h0a2,2,0,0,1,2.828-2.828h0L12,101.172V90a2,2,0,0,1,4,0v11.172l2.586-2.586h0a2,2,0,1,1,2.828,2.828h0Z"
                />
            </g>
        </IconContainer>
    );
};

export type TypeIconNames =
    | "Accounts"
    | "Admin"
    | "Bank"
    | "ChargeBack"
    | "Check"
    | "ChevronDoubleLeft"
    | "ChevronDoubleRight"
    | "ChevronDown"
    | "ChevronLeft"
    | "ChevronRight"
    | "ChevronUp"
    | "Close"
    | "Copy"
    | "Credits"
    | "Customers"
    | "Dashboard"
    | "Deposit"
    | "Document"
    | "Email"
    | "ExchangeRate"
    | "Filter"
    | "History"
    | "Info"
    | "Lock"
    | "Logout"
    | "Menu"
    | "Merchant"
    | "Minus"
    | "Plus"
    | "Refresh"
    | "Refund"
    | "RoundCheck"
    | "RoundCross"
    | "RoundMinus"
    | "RoundPlus"
    | "SafeBox"
    | "Search"
    | "Settings"
    | "Settlements"
    | "TopUp"
    | "Transactions"
    | "User"
    | "View"
    | "ViewHide"
    | "Warning"
    | "Withdrawal";

const Icon: React.FC<{ name: TypeIconNames } & IconProps> = ({
    name = "Accounts",
    className,
    size = 24,
}): JSX.Element => {
    return (
        <React.Fragment>
            {name === "Accounts" && <IconAccounts className={classNames(className)} size={size} />}
            {name === "Admin" && <IconAdmin className={classNames(className)} size={size} />}
            {name === "Bank" && <IconBank className={classNames(className)} size={size} />}
            {name === "ChargeBack" && <IconChargeBack className={classNames(className)} size={size} />}
            {name === "Check" && <IconCheck className={classNames(className)} size={size} />}
            {name === "ChevronDoubleLeft" && <IconChevronDoubleLeft className={classNames(className)} size={size} />}
            {name === "ChevronDoubleRight" && <IconChevronDoubleRight className={classNames(className)} size={size} />}
            {name === "ChevronDown" && <IconChevronDown className={classNames(className)} size={size} />}
            {name === "ChevronLeft" && <IconChevronLeft className={classNames(className)} size={size} />}
            {name === "ChevronRight" && <IconChevronRight className={classNames(className)} size={size} />}
            {name === "ChevronUp" && <IconChevronUp className={classNames(className)} size={size} />}
            {name === "Close" && <IconClose className={classNames(className)} size={size} />}
            {name === "Copy" && <IconCopy className={classNames(className)} size={size} />}
            {name === "Credits" && <IconCredits className={classNames(className)} size={size} />}
            {name === "Customers" && <IconCustomers className={classNames(className)} size={size} />}
            {name === "Dashboard" && <IconDashboard className={classNames(className)} size={size} />}
            {name === "Deposit" && <IconDeposit className={classNames(className)} size={size} />}
            {name === "Document" && <IconDocument className={classNames(className)} size={size} />}
            {name === "Email" && <IconEmail className={classNames(className)} size={size} />}
            {name === "ExchangeRate" && <IconExchangeRate className={classNames(className)} size={size} />}
            {name === "Filter" && <IconFilter className={classNames(className)} size={size} />}
            {name === "History" && <IconHistory className={classNames(className)} size={size} />}
            {name === "Info" && <IconInfo className={classNames(className)} size={size} />}
            {name === "Lock" && <IconLock className={classNames(className)} size={size} />}
            {name === "Logout" && <IconLogout className={classNames(className)} size={size} />}
            {name === "Menu" && <IconMenu className={classNames(className)} size={size} />}
            {name === "Merchant" && <IconMerchant className={classNames(className)} size={size} />}
            {name === "Minus" && <IconMinus className={classNames(className)} size={size} />}
            {name === "Plus" && <IconPlus className={classNames(className)} size={size} />}
            {name === "Refresh" && <IconRefresh className={classNames(className)} size={size} />}
            {name === "Refund" && <IconRefund className={classNames(className)} size={size} />}
            {name === "RoundCheck" && <IconRoundCheck className={classNames(className)} size={size} />}
            {name === "RoundCross" && <IconRoundCross className={classNames(className)} size={size} />}
            {name === "RoundMinus" && <IconRoundMinus className={classNames(className)} size={size} />}
            {name === "RoundPlus" && <IconRoundPlus className={classNames(className)} size={size} />}
            {name === "SafeBox" && <IconSafeBox className={classNames(className)} size={size} />}
            {name === "Search" && <IconSearch className={classNames(className)} size={size} />}
            {name === "Settings" && <IconSettings className={classNames(className)} size={size} />}
            {name === "Settlements" && <IconSettlements className={classNames(className)} size={size} />}
            {name === "TopUp" && <IconTopUp className={classNames(className)} size={size} />}
            {name === "Transactions" && <IconTransactions className={classNames(className)} size={size} />}
            {name === "User" && <IconUser className={classNames(className)} size={size} />}
            {name === "View" && <IconView className={classNames(className)} size={size} />}
            {name === "ViewHide" && <IconViewHide className={classNames(className)} size={size} />}
            {name === "Warning" && <IconWarning className={classNames(className)} size={size} />}
            {name === "Withdrawal" && <IconWithdrawal className={classNames(className)} size={size} />}
        </React.Fragment>
    );
};

export default Icon;
