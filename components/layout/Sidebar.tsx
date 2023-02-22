import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import Button from "@/components/buttons/Button";
import ApplicationLogo from "@/components/ui/ApplicationLogo";
import Tooltip from "@/components/ui/Tooltip";
import { adminRoutes, merchantRoutes } from "@/utils/Routes";
import { useDrawerNavToggle } from "contexts/DrawerToggleContext";
import StyleSidebar from "@/sass/layouts/sidebar.module.scss";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";

interface SideMenuProps {
    isExpanded: boolean;
    setIsExpanded: (e: boolean) => void;
}

const SubMenuButton: React.FC<{
    route?: { name: string; href: string; icon: TypeIconNames; sub?: Array<{ name: string; href: string }> };
    navId: string;
    setNavId: (_) => void;
    navSubId: string;
    setNavSubId: (_) => void;
}> = ({ route, navId, setNavId, navSubId, setNavSubId }): JSX.Element => {
    return (
        <React.Fragment>
            <button
                type="button"
                className={classNames(StyleSidebar.link, { [StyleSidebar.active]: navId === route.name })}
                onClick={() => setNavId(route.name)}
            >
                <div className={StyleSidebar.icon}>
                    <Icon name={route.icon} className={StyleSidebar.icon} />
                </div>
                <div className={StyleSidebar.text}>{route.name}</div>
                {/* {route.href ? null : (
                    <div className={classNames(StyleSidebar.icon, StyleSidebar.subIcon)}>
                        <Icon name={navId === route.name ? "ChevronUp" : "ChevronDown"} />
                    </div>
                )} */}
            </button>
            {/* <div className={classNames(StyleSidebar.sub, { [StyleSidebar.active]: navId === route.name })}>
                {route.sub.map((sub, a) => (
                    <div className={StyleSidebar.subItem} key={a}>
                        <Link href={sub.href}>
                            <a
                                className={classNames(StyleSidebar.subLink, {
                                    [StyleSidebar.active]: navSubId === sub.name,
                                })}
                                onClick={() => setNavSubId(sub.name)}
                            >
                                {sub.name}
                            </a>
                        </Link>
                    </div>
                ))}
            </div> */}
        </React.Fragment>
    );
};

const SubMenuLink: React.FC<{
    route?: { href: string; name: string; icon: TypeIconNames };
    navId: string;
    setNavId: (_) => void;
}> = ({ route, navId, setNavId }): JSX.Element => {
    return (
        <Link href={route.href}>
            <a
                className={classNames(StyleSidebar.link, {
                    [StyleSidebar.active]: navId === route.name,
                })}
                onClick={() => setNavId(route.name)}
            >
                <div className={StyleSidebar.icon}>
                    <Icon name={route.icon} />
                </div>
                <div className={StyleSidebar.text}>{route.name}</div>
            </a>
        </Link>
    );
};

const SideMenu: React.FC<SideMenuProps> = ({ isExpanded, setIsExpanded }): JSX.Element => {
    const { navId, setNavId, navSubId, setNavSubId } = useDrawerNavToggle();
    const isAdmin = true;
    const renderRoutes = isAdmin ? adminRoutes : merchantRoutes;
    const renderToggleDrawer = isExpanded ? "show" : "hide";

    return (
        <aside className={classNames(StyleSidebar.wrapper, StyleSidebar[renderToggleDrawer])}>
            <div className={StyleSidebar.drawer}>
                {/* <div className={StyleSidebar.head}>
                    <ApplicationLogo href="/" iconOnly={!isExpanded} className={StyleSidebar.logo} />
                </div> */}
                <div className={StyleSidebar.body}>
                    {/* <nav className={StyleSidebar.content}>
                        <div className={StyleSidebar.nav}>
                            {renderRoutes.map((route, k) => (
                                <div className={StyleSidebar.item} key={k}>
                                    {route.href ? (
                                        <SubMenuLink route={route} navId={navId} setNavId={setNavId} />
                                    ) : (
                                        <SubMenuButton
                                            route={route}
                                            navId={navId}
                                            setNavId={setNavId}
                                            navSubId={navSubId}
                                            setNavSubId={setNavSubId}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav> */}
                    <Navigation
                        orientation="vertical"
                        appearance="graphics"
                        iconSize={96}
                        itemProps={{ alignItems: "center", justifyContent: "center", gap: 8 }}
                    >
                        {renderRoutes.map((route, k) => (
                            <NavigationItem key={k} href={route.href} icon={route.icon}>
                                {route.name}
                            </NavigationItem>
                        ))}
                    </Navigation>
                </div>
                <div className={StyleSidebar.foot}>
                    <div className={StyleSidebar.content}>
                        <Button
                            type="button"
                            shape="circle"
                            className={StyleSidebar.toggle}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <Icon name={isExpanded ? "ChevronLeft" : "Menu"} />
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;
