import Head from "next/head";
import React from "react";
import classNames from "classnames";
import Header from "@/components/layout/Header";
import SideMenu from "@/components/layout/Sidebar";
import Composition from "@/components/ui/Composition";
import { useDrawerToggle } from "contexts/DrawerToggleContext";
import StyleLayout from "@/sass/layouts/layout.module.scss";

const Authenticated: React.FC<{
    children: React.ReactNode;
    title: string;
    subTitle?: string;
    tabNavigation?: React.ReactNode;
    actions?: React.ReactNode;
    layout?: "fill" | "contain";
}> = ({ children, title, subTitle, tabNavigation, actions, layout = "fill" }): JSX.Element => {
    const { isExpanded, setIsExpanded } = useDrawerToggle();

    return (
        <div className={StyleLayout.layout}>
            <Head>
                <title>{title} - PayStage</title>
            </Head>
            <SideMenu isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <main className={StyleLayout.main}>
                <Header />
                <div className={StyleLayout.heading}>
                    <div className={classNames(StyleLayout.headInner, StyleLayout[layout])}>
                        <Composition wrapper="h1" color="secondary" primary={title} sub={subTitle} />
                        {actions && <div className={StyleLayout.actions}>{actions}</div>}
                    </div>
                </div>
                <div className={StyleLayout.body}>
                    <div className={classNames(StyleLayout.bodyInner, StyleLayout[layout])}>{children}</div>
                </div>
                <footer className={StyleLayout.foot}>
                    <p>&copy; PayStage {new Date().getFullYear()}</p>
                </footer>
            </main>
        </div>
    );
};

export default Authenticated;
