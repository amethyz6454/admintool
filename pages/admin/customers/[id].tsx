import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import CustomerGeneralDetails from "@/components/admin/customers/CustomerGeneralDetails";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import { assertEqual } from "@/utils/GeneralUtil";
import CustomerTransactions from "@/components/admin/customers/CustomerTransactions";

const CustomerTabs = {
    TAB_GENERAL: "General",
    TAB_TRANSACTION: "Transactions",
};

const CustomerDetails: NextPage = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(CustomerTabs.TAB_GENERAL);
    const customerDockerTabs = [
        {
            title: CustomerTabs.TAB_GENERAL,
            onClick: () => setSelectedTab(CustomerTabs.TAB_GENERAL),
            selected: assertEqual(selectedTab, CustomerTabs.TAB_GENERAL),
        },
        {
            title: CustomerTabs.TAB_TRANSACTION,
            onClick: () => setSelectedTab(CustomerTabs.TAB_TRANSACTION),
            selected: assertEqual(selectedTab, CustomerTabs.TAB_TRANSACTION),
        },
    ] as DockerItemTypes;

    return (
        <Authenticated
            title="Customer Details"
            layout={assertEqual(selectedTab, CustomerTabs.TAB_GENERAL) ? "contain" : "fill"}
        >
            {assertEqual(selectedTab, CustomerTabs.TAB_GENERAL) && <CustomerGeneralDetails />}
            {assertEqual(selectedTab, CustomerTabs.TAB_TRANSACTION) && <CustomerTransactions />}

            <Docker items={customerDockerTabs} />
        </Authenticated>
    );
};

export default CustomerDetails;
