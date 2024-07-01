import Button from "@/components/buttons/Button";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import StyleSidebar from "@/sass/layouts/sidebar.module.scss";
import { adminRoutes, merchantRoutes } from "@/utils/Routes";
import classNames from "classnames";
import React from "react";

interface SideMenuProps {
    isExpanded: boolean;
    setIsExpanded: (e: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isExpanded, setIsExpanded }): JSX.Element => {
    const isAdmin = true;
    const renderRoutes = isAdmin ? adminRoutes : merchantRoutes;
    const renderToggleDrawer = isExpanded ? "show" : "hide";

    return (
        <aside className={classNames(StyleSidebar.wrapper, StyleSidebar[renderToggleDrawer])}>
            <div className={StyleSidebar.drawer}>
                <div className={StyleSidebar.body}>
                    <Navigation
                        orientation="vertical"
                        appearance="graphics"
                        itemSize={96}
                        itemProps={{ alignItems: "center", justifyContent: "center", gap: 8 }}
                    >
                        {renderRoutes.map((route, k) => (
                            <NavigationItem key={k} href={route.href} icon={route.icon as TypeIconNames}>
                                {route.name}
                            </NavigationItem>
                        ))}
                    </Navigation>
                </div>
                <div className={StyleSidebar.foot}>
                    <div className={StyleSidebar.content}>
                        <Button type="button" shape="circle" className={StyleSidebar.toggle} onClick={() => setIsExpanded(!isExpanded)}>
                            <Icon name={isExpanded ? "ChevronLeft" : "Menu"} />
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;
