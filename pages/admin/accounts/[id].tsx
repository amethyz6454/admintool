import React from "react";
import Authenticated from "@/components/layout/Authenticated";
import type { NextPage } from "next";
import { assertEqual } from "@/utils/GeneralUtil";
import AccountGeneral from "@/components/admin/accounts/GeneralContent";
import AccountBalances from "@/components/admin/accounts/BalancesContent";
import AccountCustomers from "@/components/admin/accounts/CustomersContent";
import AccountTransactions from "@/components/admin/accounts/TransactionsContent";
import AccountSettings from "@/components/admin/accounts/SettingsContent";
import AccountFees from "@/components/admin/accounts/FeesContent";
import Docker, { DockerItemGroupType, DockerItemTypes } from "@/components/ui/Docker";
// import useKeyPress from "@/hooks/useKeyPress";

const AccountTabs = {
    TAB_GENERAL: "General",
    TAB_BALANCES: "Balances",
    TAB_TRANSACTIONS: "Transactions",
    TAB_CUSTOMERS: "Customers",
    TAB_SETTINGS: "Settings",
    TAB_FEES: "Fees",
};

const AccountDetails: NextPage = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(AccountTabs.TAB_GENERAL);
    const searchFieldRef = React.useRef(null);
    const [showFilterModal, setShowFilterModal] = React.useState<boolean>(false);
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);

    // const handleCloseAll = () => {
    //     setShowFilterModal(false);
    //     setShowSearchModal(false);
    // };

    const handleOpenSearch = () => {
        setShowSearchModal(true);
        setShowFilterModal(false);
        searchFieldRef.current.focus();
    };

    const handleOpenFilter = () => {
        setShowSearchModal(false);
        setShowFilterModal(true);
    };

    const [accountDockerItems, setAccountDockerItems] = React.useState<DockerItemTypes>(null);
    const AccountDockerGroupItems = [
        {
            title: "Menu",
            icon: "Menu",
            divider: true,
            items: [
                {
                    title: "General",
                    selected: assertEqual(selectedTab, AccountTabs.TAB_GENERAL),
                    onClick: () => {
                        setSelectedTab(AccountTabs.TAB_GENERAL);
                        setAccountDockerItems(null);
                    },
                },
                {
                    title: "Balances",
                    selected: assertEqual(selectedTab, AccountTabs.TAB_BALANCES),
                    onClick: () => {
                        setSelectedTab(AccountTabs.TAB_BALANCES);
                        setAccountDockerItems(null);
                    },
                },
                {
                    title: "Transactions",
                    selected: assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS),
                    onClick: () => {
                        setSelectedTab(AccountTabs.TAB_TRANSACTIONS);
                        setAccountDockerItems([
                            {
                                title: "Search",
                                icon: "Search",
                                onClick: () => handleOpenSearch(),
                                notify: true,
                            },
                            {
                                title: "Filter",
                                icon: "Filter",
                                onClick: () => handleOpenFilter(),
                                notify: true,
                                notifyCount: 3,
                            },
                        ]);
                    },
                },
                {
                    title: "Customers",
                    selected: assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS),
                    notify: true,
                    onClick: () => {
                        setSelectedTab(AccountTabs.TAB_CUSTOMERS);
                        setAccountDockerItems([
                            {
                                title: "Search",
                                icon: "Search",
                                onClick: () => handleOpenSearch(),
                                notify: true,
                            },
                        ]);
                    },
                },
                {
                    title: "Settings",
                    selected: assertEqual(selectedTab, AccountTabs.TAB_SETTINGS),
                    onClick: () => {
                        setSelectedTab(AccountTabs.TAB_SETTINGS);
                        setAccountDockerItems(null);
                    },
                },
                {
                    title: "Fees",
                    selected: assertEqual(selectedTab, AccountTabs.TAB_FEES),
                    onClick: () => {
                        setSelectedTab(AccountTabs.TAB_FEES);
                        setAccountDockerItems(null);
                    },
                },
            ],
        },
    ] as DockerItemGroupType;

    // useKeyPress(["Shift", "Alt", "S"], handleOpenSearch);
    // useKeyPress(["Shift", "Alt", "F"], handleOpenFilter);
    // useKeyPress(["Shift", "Alt", "X"], handleCloseAll);

    return (
        <Authenticated title="John Doe - AC2252489794">
            {assertEqual(selectedTab, AccountTabs.TAB_GENERAL) && <AccountGeneral title={AccountTabs.TAB_GENERAL} />}
            {assertEqual(selectedTab, AccountTabs.TAB_BALANCES) && <AccountBalances title={AccountTabs.TAB_BALANCES} />}
            {assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS) && (
                <AccountTransactions
                    title={AccountTabs.TAB_TRANSACTIONS}
                    showFilterModal={showFilterModal}
                    setShowFilterModal={setShowFilterModal}
                    showSearchModal={showSearchModal}
                    setShowSearchModal={setShowSearchModal}
                    ref={searchFieldRef}
                />
            )}
            {assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS) && (
                <AccountCustomers
                    title={AccountTabs.TAB_CUSTOMERS}
                    showSearchModal={showSearchModal}
                    setShowSearchModal={setShowSearchModal}
                    ref={searchFieldRef}
                />
            )}
            {assertEqual(selectedTab, AccountTabs.TAB_SETTINGS) && <AccountSettings title={AccountTabs.TAB_SETTINGS} />}
            {assertEqual(selectedTab, AccountTabs.TAB_FEES) && <AccountFees />}

            <Docker groupItems={AccountDockerGroupItems} items={accountDockerItems} />
        </Authenticated>
    );
};

export default AccountDetails;
