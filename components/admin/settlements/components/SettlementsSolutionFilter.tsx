import React from "react";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import { assertEqual } from "@/utils/GeneralUtil";

const SettlementsTabs = {
    TAB_DIXON: "Dixon",
    TAB_J_PAY: "J-Pay",
    TAB_LOCAL_BANK_INDONESIA: "Indonesia",
    TAB_LOCAL_BANK_MALAYSIA: "Malaysia",
    TAB_LOCAL_BANK_THAILAND: "Thailand",
    TAB_LOCAL_BANK_VIETNAM: "Vietnam",
    TAB_ORIENTAL_WALLET: "Oriental Wallet",
    TAB_PEARL_PAY: "PearlPay",
};

const SettlementsSolutionFilter: React.FC = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(SettlementsTabs.TAB_DIXON);

    return (
        <Navigation appearance="icon" iconSize={144}>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_DIXON)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_DIXON)}
                alt={SettlementsTabs.TAB_DIXON}
                image={"/logos/logo-" + SettlementsTabs.TAB_DIXON.toLowerCase() + ".png"}
            >
                {SettlementsTabs.TAB_DIXON}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_J_PAY)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_J_PAY)}
                alt={SettlementsTabs.TAB_J_PAY}
                image={"/logos/logo-" + SettlementsTabs.TAB_J_PAY.toLowerCase() + ".png"}
            >
                {SettlementsTabs.TAB_J_PAY}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_LOCAL_BANK_INDONESIA)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_LOCAL_BANK_INDONESIA)}
                alt={SettlementsTabs.TAB_LOCAL_BANK_INDONESIA}
                badge
                icon="Bank"
                badgeImage={"/flags/" + SettlementsTabs.TAB_LOCAL_BANK_INDONESIA + ".png"}
            >
                Local Bank {SettlementsTabs.TAB_LOCAL_BANK_INDONESIA}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_LOCAL_BANK_MALAYSIA)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_LOCAL_BANK_MALAYSIA)}
                alt={SettlementsTabs.TAB_LOCAL_BANK_MALAYSIA}
                badge
                icon="Bank"
                badgeImage={"/flags/" + SettlementsTabs.TAB_LOCAL_BANK_MALAYSIA + ".png"}
            >
                Local Bank {SettlementsTabs.TAB_LOCAL_BANK_MALAYSIA}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_LOCAL_BANK_THAILAND)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_LOCAL_BANK_THAILAND)}
                alt={SettlementsTabs.TAB_LOCAL_BANK_THAILAND}
                badge
                icon="Bank"
                badgeImage={"/flags/" + SettlementsTabs.TAB_LOCAL_BANK_THAILAND + ".png"}
            >
                Local Bank {SettlementsTabs.TAB_LOCAL_BANK_THAILAND}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_LOCAL_BANK_VIETNAM)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_LOCAL_BANK_VIETNAM)}
                alt={SettlementsTabs.TAB_LOCAL_BANK_VIETNAM}
                badge
                icon="Bank"
                badgeImage={"/flags/" + SettlementsTabs.TAB_LOCAL_BANK_VIETNAM + ".png"}
            >
                Local Bank {SettlementsTabs.TAB_LOCAL_BANK_VIETNAM}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_ORIENTAL_WALLET)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_ORIENTAL_WALLET)}
                alt={SettlementsTabs.TAB_ORIENTAL_WALLET}
                image={"/logos/logo-" + SettlementsTabs.TAB_ORIENTAL_WALLET.toLowerCase().replaceAll(" ", "-") + ".png"}
            >
                {SettlementsTabs.TAB_ORIENTAL_WALLET}
            </NavigationItem>
            <NavigationItem
                selected={assertEqual(selectedTab, SettlementsTabs.TAB_PEARL_PAY)}
                onClick={() => setSelectedTab(SettlementsTabs.TAB_PEARL_PAY)}
                alt={SettlementsTabs.TAB_PEARL_PAY}
                image={"/logos/logo-" + SettlementsTabs.TAB_PEARL_PAY.toLowerCase().replaceAll(" ", "-") + ".png"}
            >
                {SettlementsTabs.TAB_PEARL_PAY}
            </NavigationItem>
        </Navigation>
    );
};

export default SettlementsSolutionFilter;
