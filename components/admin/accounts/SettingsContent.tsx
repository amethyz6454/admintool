import React from "react";
import Card from "@/components/card/Card";
import { GridCol } from "@/components/ui/Grid";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import AccountSettingsGeneral from "./settings/GeneralContent";
import AccountSettingsTransactions from "./settings/TransactionsContent";
import AccountSettingsWebhooks from "./settings/WebhooksContent";
import AccountSettingsExchangeCurrencyContent from "./settings/ExchangeCurrencyContent";
import AccountSettingsRequestLimitsContentContent from "./settings/RequestLimitsContent";
import AccountSettingsPermissions from "./settings/PermissionsContent";
import { assertEqual } from "@/utils/GeneralUtil";
import Composition from "@/components/ui/Composition";

const AccountSettingsTabs = {
    TAB_GENERAL: "General",
    TAB_TRANSACTIONS: "Transactions",
    TAB_EXCHANGE_CURRENCY: "Exchange Currency",
    TAB_LIMITS: "Request Limits",
    TAB_PERMISSIONS: "Account Permissions",
    TAB_WEBHOOKS: "Webhooks",
};

const AccountSettings: React.FC<{ title: string }> = ({ title }): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(AccountSettingsTabs.TAB_GENERAL);

    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary={title} />
            </Card.Header>
            <Card.Body enableGrid>
                <GridCol grid="auto">
                    <Navigation appearance="line" orientation="vertical" sticky>
                        <NavigationItem
                            selected={assertEqual(selectedTab, AccountSettingsTabs.TAB_GENERAL)}
                            onClick={() => setSelectedTab(AccountSettingsTabs.TAB_GENERAL)}
                        >
                            {AccountSettingsTabs.TAB_GENERAL}
                        </NavigationItem>
                        <NavigationItem
                            selected={assertEqual(selectedTab, AccountSettingsTabs.TAB_TRANSACTIONS)}
                            onClick={() => setSelectedTab(AccountSettingsTabs.TAB_TRANSACTIONS)}
                        >
                            {AccountSettingsTabs.TAB_TRANSACTIONS}
                        </NavigationItem>
                        <NavigationItem
                            selected={assertEqual(selectedTab, AccountSettingsTabs.TAB_EXCHANGE_CURRENCY)}
                            onClick={() => setSelectedTab(AccountSettingsTabs.TAB_EXCHANGE_CURRENCY)}
                        >
                            {AccountSettingsTabs.TAB_EXCHANGE_CURRENCY}
                        </NavigationItem>
                        <NavigationItem
                            selected={assertEqual(selectedTab, AccountSettingsTabs.TAB_LIMITS)}
                            onClick={() => setSelectedTab(AccountSettingsTabs.TAB_LIMITS)}
                        >
                            {AccountSettingsTabs.TAB_LIMITS}
                        </NavigationItem>
                        <NavigationItem
                            selected={assertEqual(selectedTab, AccountSettingsTabs.TAB_PERMISSIONS)}
                            onClick={() => setSelectedTab(AccountSettingsTabs.TAB_PERMISSIONS)}
                        >
                            {AccountSettingsTabs.TAB_PERMISSIONS}
                        </NavigationItem>
                        <NavigationItem
                            selected={assertEqual(selectedTab, AccountSettingsTabs.TAB_WEBHOOKS)}
                            onClick={() => setSelectedTab(AccountSettingsTabs.TAB_WEBHOOKS)}
                        >
                            {AccountSettingsTabs.TAB_WEBHOOKS}
                        </NavigationItem>
                    </Navigation>
                </GridCol>
                <GridCol grid="flex">
                    {assertEqual(selectedTab, AccountSettingsTabs.TAB_GENERAL) && <AccountSettingsGeneral />}
                    {assertEqual(selectedTab, AccountSettingsTabs.TAB_TRANSACTIONS) && <AccountSettingsTransactions />}
                    {assertEqual(selectedTab, AccountSettingsTabs.TAB_EXCHANGE_CURRENCY) && (
                        <AccountSettingsExchangeCurrencyContent />
                    )}
                    {assertEqual(selectedTab, AccountSettingsTabs.TAB_LIMITS) && (
                        <AccountSettingsRequestLimitsContentContent />
                    )}
                    {assertEqual(selectedTab, AccountSettingsTabs.TAB_PERMISSIONS) && <AccountSettingsPermissions />}
                    {assertEqual(selectedTab, AccountSettingsTabs.TAB_WEBHOOKS) && <AccountSettingsWebhooks />}
                </GridCol>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default AccountSettings;
