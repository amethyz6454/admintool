import React from "react";

export const SideOptionsContext = React.createContext(null);

export const useSideOptions = () => React.useContext(SideOptionsContext);

export const SideOptionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(true);

    return <SideOptionsContext.Provider value={{ isExpanded, setIsExpanded }}>{children}</SideOptionsContext.Provider>;
};
