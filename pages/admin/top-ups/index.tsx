import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import TopUpsBalances from "@/components/admin/top-ups/BalanceContent";
import TopUpsHistory from "@/components/admin/top-ups/HistoryContent";
import { FormButtons } from "@/components/form/Form";
import { assertEqual } from "@/utils/GeneralUtil";

const TopUpsTabs = {
    TAB_BALANCES: "Balances",
    TAB_HISTORY: "History",
};

const TopUps: NextPage = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(TopUpsTabs.TAB_BALANCES);
    const [showBalanceSearchModal, setShowBalanceSearchModal] = React.useState<boolean>(false);
    const [showHistorySearchModal, setShowHistorySearchModal] = React.useState<boolean>(false);
    const [showHistoryFilterModal, setShowHistoryFilterModal] = React.useState<boolean>(false);
    const balancesTabs = [
        {
            title: TopUpsTabs.TAB_BALANCES,
            icon: "Credits",
            onClick: () => handleTopUpsBalancesTab(TopUpsTabs.TAB_BALANCES),
            selected: true,
        },
        {
            title: TopUpsTabs.TAB_HISTORY,
            icon: "History",
            onClick: () => handleTopUpsHistoryTab(TopUpsTabs.TAB_HISTORY),
            divider: true,
        },
        {
            title: "Search",
            icon: "Search",
            onClick: () => setShowBalanceSearchModal(true),
            notify: true,
        },
        { title: "Reset Search" },
    ] as DockerItemTypes;
    const historyTabs = [
        {
            title: TopUpsTabs.TAB_BALANCES,
            icon: "Credits",
            onClick: () => handleTopUpsBalancesTab(TopUpsTabs.TAB_BALANCES),
        },
        {
            title: TopUpsTabs.TAB_HISTORY,
            icon: "History",
            onClick: () => handleTopUpsHistoryTab(TopUpsTabs.TAB_HISTORY),
            selected: true,
            divider: true,
        },
        {
            title: "Search",
            icon: "Search",
            onClick: () => setShowHistorySearchModal(true),
            notify: true,
        },
        {
            title: "Filter",
            icon: "Filter",
            onClick: () => setShowHistoryFilterModal(true),
            notify: true,
            notifyCount: 2,
            divider: true,
        },
        { title: "Reset Filters" },
    ] as DockerItemTypes;
    const [topUpsTabs, setTopUpsTabs] = React.useState<DockerItemTypes>(balancesTabs);

    function handleTopUpsBalancesTab(k) {
        setSelectedTab(k);
        setTopUpsTabs(balancesTabs);
    }

    function handleTopUpsHistoryTab(k) {
        setSelectedTab(k);
        setTopUpsTabs(historyTabs);
    }

    return (
        <Authenticated
            title="Top-Ups"
            actions={
                <>
                    {assertEqual(selectedTab, TopUpsTabs.TAB_BALANCES) && (
                        <Button color="secondary" size="sm">
                            Export
                        </Button>
                    )}

                    {assertEqual(selectedTab, TopUpsTabs.TAB_HISTORY) && (
                        <FormButtons>
                            <Button color="secondary" size="sm">
                                Export
                            </Button>
                            <Button color="success" size="sm" href="/admin/top-ups/create">
                                Create Top-Up
                            </Button>
                        </FormButtons>
                    )}
                </>
            }
        >
            {assertEqual(selectedTab, TopUpsTabs.TAB_BALANCES) && (
                <TopUpsBalances
                    title={TopUpsTabs.TAB_BALANCES}
                    showSearchModal={showBalanceSearchModal}
                    setShowSearchModal={setShowBalanceSearchModal}
                />
            )}
            {assertEqual(selectedTab, TopUpsTabs.TAB_HISTORY) && (
                <TopUpsHistory
                    title={TopUpsTabs.TAB_HISTORY}
                    showSearchModal={showHistorySearchModal}
                    setShowSearchModal={setShowHistorySearchModal}
                    showFilterModal={showHistoryFilterModal}
                    setShowFilterModal={setShowHistoryFilterModal}
                />
            )}

            <Docker items={topUpsTabs} />
        </Authenticated>
    );
};

export default TopUps;
