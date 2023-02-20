import React from "react";
import classNames from "classnames";
import StyleTimeLine from "@/styles/components/TimeLine.module.css";

interface TimeLineProps {
    children: React.ReactNode;
    className?: string;
}

export const TimeLine: React.FC<TimeLineProps> = ({ children }): JSX.Element => {
    return <div className={classNames(StyleTimeLine.timeLine)}>{children}</div>;
};

export const TimeLineItem: React.FC<TimeLineProps> = ({ children }): JSX.Element => {
    return <div className={classNames(StyleTimeLine.item)}>{children}</div>;
};

export const TimeLineMuted: React.FC<TimeLineProps> = ({ children }): JSX.Element => {
    return <span className="block text-xs text-gray-500">{children}</span>;
};

export const TimeLineButtons: React.FC<TimeLineProps> = ({ children }): JSX.Element => {
    return <span className="flex gap-2 pt-1">{children}</span>;
};
