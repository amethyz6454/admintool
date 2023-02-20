import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import SettlementsSummary from "@/components/admin/settlements/Summary";
import TransactionDetails from "@/components/admin/settlements/TransactionDetails";
import IrregularTransactionDetails from "@/components/admin/settlements/IrregularTransactionDetails";
import OtherFees from "@/components/admin/settlements/OtherFees";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import { assertEqual } from "@/utils/GeneralUtil";

const SettlementsTabs = {
    TAB_SUMMARY: "Summary",
    TAB_TRANSACTION_DETAILS: "Transaction Details",
    TAB_IRREGULAR_TRANSACTION_DETAILS: "Irregular Transaction Details",
    TAB_OTHER_FEES: "Other Fees",
    TAB_RR_RETURN_DETAILS: "RR Return Details",
};

const SettlementDetails: NextPage = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(SettlementsTabs.TAB_SUMMARY);

    return (
        <Authenticated
            title="John Doe's Settlement - AC2243927014"
            layout={assertEqual(selectedTab, SettlementsTabs.TAB_SUMMARY) ? "contain" : "fill"}
        >
            <Navigation>
                <NavigationItem
                    selected={assertEqual(selectedTab, SettlementsTabs.TAB_SUMMARY)}
                    onClick={() => setSelectedTab(SettlementsTabs.TAB_SUMMARY)}
                >
                    {SettlementsTabs.TAB_SUMMARY}
                </NavigationItem>
                <NavigationItem
                    selected={assertEqual(selectedTab, SettlementsTabs.TAB_TRANSACTION_DETAILS)}
                    onClick={() => setSelectedTab(SettlementsTabs.TAB_TRANSACTION_DETAILS)}
                >
                    {SettlementsTabs.TAB_TRANSACTION_DETAILS}
                </NavigationItem>
                <NavigationItem
                    selected={assertEqual(selectedTab, SettlementsTabs.TAB_IRREGULAR_TRANSACTION_DETAILS)}
                    onClick={() => setSelectedTab(SettlementsTabs.TAB_IRREGULAR_TRANSACTION_DETAILS)}
                >
                    {SettlementsTabs.TAB_IRREGULAR_TRANSACTION_DETAILS}
                </NavigationItem>
                <NavigationItem
                    selected={assertEqual(selectedTab, SettlementsTabs.TAB_OTHER_FEES)}
                    onClick={() => setSelectedTab(SettlementsTabs.TAB_OTHER_FEES)}
                >
                    {SettlementsTabs.TAB_OTHER_FEES}
                </NavigationItem>
                <NavigationItem
                    selected={assertEqual(selectedTab, SettlementsTabs.TAB_RR_RETURN_DETAILS)}
                    onClick={() => setSelectedTab(SettlementsTabs.TAB_RR_RETURN_DETAILS)}
                >
                    {SettlementsTabs.TAB_RR_RETURN_DETAILS}
                </NavigationItem>
            </Navigation>
            {assertEqual(selectedTab, SettlementsTabs.TAB_SUMMARY) && <SettlementsSummary />}
            {assertEqual(selectedTab, SettlementsTabs.TAB_TRANSACTION_DETAILS) && <TransactionDetails />}
            {assertEqual(selectedTab, SettlementsTabs.TAB_IRREGULAR_TRANSACTION_DETAILS) && (
                <IrregularTransactionDetails />
            )}
            {assertEqual(selectedTab, SettlementsTabs.TAB_OTHER_FEES) && <OtherFees />}
        </Authenticated>
    );
};

export default SettlementDetails;
