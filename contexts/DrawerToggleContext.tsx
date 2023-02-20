import React from "react";

export const DrawerToggleContext = React.createContext(null);

export const useDrawerToggle = () => React.useContext(DrawerToggleContext);

export const DrawerToggleProvider = ({ children }) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(true);

    return (
        <DrawerToggleContext.Provider value={{ isExpanded, setIsExpanded }}>{children}</DrawerToggleContext.Provider>
    );
};

export const DrawerNavToggleContext = React.createContext(null);

export const useDrawerNavToggle = () => React.useContext(DrawerNavToggleContext);

export const DrawerNavToggleProvider = ({ children }) => {
    const [navId, setNavId] = React.useState<string>("dashboard");
    const [navSubId, setNavSubId] = React.useState<string>(null);

    return (
        <DrawerNavToggleContext.Provider value={{ navId, setNavId, navSubId, setNavSubId }}>
            {children}
        </DrawerNavToggleContext.Provider>
    );
};
