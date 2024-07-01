import React from "react";
import Link from "next/link";
import ApplicationLogo from "@/components/ui/ApplicationLogo";
import Tooltip from "@/components/ui/Tooltip";
import { IconDocument, IconUser, IconLogout } from "@/components/ui/Icons";
import StyleHeader from "@/sass/layouts/header.module.scss";

const Header: React.FC = (): JSX.Element => {
    return (
        <header className={StyleHeader.header}>
            <div className={StyleHeader.head}>
                <div className={StyleHeader.branding}>
                    <ApplicationLogo className={StyleHeader.logo} href="/" />
                </div>
                <nav className="flex">
                    <ul className="flex">
                        <li className={StyleHeader.navItem}>
                            <Link href="/" className={StyleHeader.navLink}>
                                <span className={StyleHeader.chip}>
                                    <IconUser size={24} />
                                </span>
                                <span>Firstname Lastname</span>
                            </Link>
                        </li>
                        <Tooltip title="API Docs" placement="bottom">
                            <li className={StyleHeader.navItem}>
                                <Link href="/" className={StyleHeader.navLink}>
                                    <IconDocument size={24} />
                                </Link>
                            </li>
                        </Tooltip>
                        <Tooltip title="Logout" placement="bottom">
                            <li className={StyleHeader.navItem}>
                                <Link href="/" className={StyleHeader.navLink}>
                                    <IconLogout size={24} />
                                </Link>
                            </li>
                        </Tooltip>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
