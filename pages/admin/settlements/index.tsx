import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import CardEmptyState from "@/components/card/CardEmptyState";
import SettlementsList from "@/components/admin/settlements/List";
import SettlementsSolutionFilter from "@/components/admin/settlements/components/SettlementsSolutionFilter";
import { SectionGroup, SectionMain } from "@/components/layout/Sections";

const Settlements: NextPage = (): JSX.Element => {
    const isEmpty = false;

    return (
        <Authenticated title="Settlements">
            <SectionGroup>
                <SectionMain>
                    {isEmpty ? (
                        <CardEmptyState
                            title="You have no Settlements yet on this solution"
                            subTitle="To get started, click the button below"
                            href="/admin/"
                        />
                    ) : (
                        <React.Fragment>
                            <SettlementsSolutionFilter />
                            <SettlementsList />
                        </React.Fragment>
                    )}
                </SectionMain>
            </SectionGroup>
        </Authenticated>
    );
};

export default Settlements;
