import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import { Grid, GridCol } from "@/components/ui/Grid";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import { assertEqual } from "@/utils/GeneralUtil";
import Composition from "@/components/ui/Composition";

const AccountTabs = {
    TAB_GENERAL: "general",
    TAB_BALANCES: "balances",
    TAB_TRANSACTIONS: "transactions",
    TAB_CUSTOMERS: "customers",
    TAB_SETTINGS: "settings",
    TAB_FEES: "fees",
};

const DocumentationNavigation: NextPage = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(AccountTabs.TAB_GENERAL);

    return (
        <Authenticated title="Documentation Navigation">
            <Card.CardContainer>
                <Card.Body>
                    <Grid>
                        <Composition wrapper="h4" primary="Navigation | line | horizontal" />
                        <GridCol>
                            <Navigation>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_GENERAL)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_GENERAL)}
                                >
                                    General
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_BALANCES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_BALANCES)}
                                >
                                    Balances
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_TRANSACTIONS)}
                                >
                                    Transactions
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_CUSTOMERS)}
                                >
                                    Customers
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_SETTINGS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_SETTINGS)}
                                >
                                    Settings
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_FEES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_FEES)}
                                >
                                    Fees
                                </NavigationItem>
                            </Navigation>
                        </GridCol>

                        <Composition wrapper="h4" primary="Navigation | line | vertical" />
                        <GridCol>
                            <Navigation orientation="vertical">
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_GENERAL)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_GENERAL)}
                                >
                                    General
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_BALANCES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_BALANCES)}
                                >
                                    Balances
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_TRANSACTIONS)}
                                >
                                    Transactions
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_CUSTOMERS)}
                                >
                                    Customers
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_SETTINGS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_SETTINGS)}
                                >
                                    Settings
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_FEES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_FEES)}
                                >
                                    Fees
                                </NavigationItem>
                            </Navigation>
                        </GridCol>

                        <Composition wrapper="h4" primary="Navigation | button | horizontal" />
                        <GridCol>
                            <Navigation appearance="button">
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_GENERAL)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_GENERAL)}
                                >
                                    General
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_BALANCES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_BALANCES)}
                                >
                                    Balances
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_TRANSACTIONS)}
                                >
                                    Transactions
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_CUSTOMERS)}
                                >
                                    Customers
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_SETTINGS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_SETTINGS)}
                                >
                                    Settings
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_FEES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_FEES)}
                                >
                                    Fees
                                </NavigationItem>
                            </Navigation>
                        </GridCol>

                        <Composition wrapper="h4" primary="Navigation | button | vertical" />
                        <GridCol>
                            <Navigation appearance="button" orientation="vertical">
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_GENERAL)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_GENERAL)}
                                >
                                    General
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_BALANCES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_BALANCES)}
                                >
                                    Balances
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_TRANSACTIONS)}
                                >
                                    Transactions
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_CUSTOMERS)}
                                >
                                    Customers
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_SETTINGS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_SETTINGS)}
                                >
                                    Settings
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_FEES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_FEES)}
                                >
                                    Fees
                                </NavigationItem>
                            </Navigation>
                        </GridCol>

                        <Composition wrapper="h4" primary="Navigation | icon | horizontal" />
                        <GridCol>
                            <Navigation appearance="icon">
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_GENERAL)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_GENERAL)}
                                >
                                    General
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_BALANCES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_BALANCES)}
                                >
                                    Balances
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_TRANSACTIONS)}
                                >
                                    Transactions
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_CUSTOMERS)}
                                >
                                    Customers
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_SETTINGS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_SETTINGS)}
                                >
                                    Settings
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_FEES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_FEES)}
                                >
                                    Fees
                                </NavigationItem>
                            </Navigation>
                        </GridCol>

                        <Composition wrapper="h4" primary="Navigation | icon | vertical" />
                        <GridCol>
                            <Navigation appearance="icon" orientation="vertical">
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_GENERAL)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_GENERAL)}
                                >
                                    General
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_BALANCES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_BALANCES)}
                                >
                                    Balances
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_TRANSACTIONS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_TRANSACTIONS)}
                                >
                                    Transactions
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_CUSTOMERS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_CUSTOMERS)}
                                    icon="Bank"
                                >
                                    Customers
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_SETTINGS)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_SETTINGS)}
                                    image="/logos/logo-j-pay.png"
                                >
                                    Settings
                                </NavigationItem>
                                <NavigationItem
                                    selected={assertEqual(selectedTab, AccountTabs.TAB_FEES)}
                                    onClick={() => setSelectedTab(AccountTabs.TAB_FEES)}
                                >
                                    Fees
                                </NavigationItem>
                            </Navigation>
                        </GridCol>
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default DocumentationNavigation;
