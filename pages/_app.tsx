import "@/sass/global/root.scss";
import "@/sass/global/reset.scss";
import "@/sass/global/global.scss";

import type { AppProps } from "next/app";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { DrawerNavToggleProvider, DrawerToggleProvider } from "contexts/DrawerToggleContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CookiesProvider>
            <DrawerToggleProvider>
                <DrawerNavToggleProvider>
                    <Component {...pageProps} />
                </DrawerNavToggleProvider>
            </DrawerToggleProvider>
        </CookiesProvider>
    );
}
