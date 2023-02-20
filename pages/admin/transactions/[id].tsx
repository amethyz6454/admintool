import Authenticated from "@/components/layout/Authenticated";
import type { NextPage } from "next";
import { Masonry } from "@/components/ui/Masonry";
import TransactionDetailsSection from "@/components/admin/transactions/TransactionDetailsSection";
import CardDetailsSection from "@/components/admin/transactions/CardDetailsSection";
import SettlementDetailsSection from "@/components/admin/transactions/SettlementDetailsSection";
import MerchantDetailsSection from "@/components/admin/transactions/MerchantDetailsSection";
import AccountDetailsSection from "@/components/admin/transactions/AccountDetailsSection";
import CustomerDetailsSection from "@/components/admin/transactions/CustomerDetailsSection";
import APIRequestsHistory from "@/components/admin/transactions/APIRequestsHistory";
import TransactionActivities from "@/components/admin/transactions/TransactionActivities";
import { SectionGroup, SectionMain, SectionSide } from "@/components/layout/Sections";

const TransactionDetails: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Transaction - 2241093139">
            <SectionGroup>
                <SectionMain>
                    <Masonry>
                        <TransactionDetailsSection />
                        <CardDetailsSection />
                        <SettlementDetailsSection />
                        <MerchantDetailsSection />
                        <AccountDetailsSection />
                        <CustomerDetailsSection />
                    </Masonry>
                </SectionMain>
                <SectionSide>
                    <TransactionActivities />
                </SectionSide>
            </SectionGroup>
            <SectionGroup>
                <SectionMain>
                    <APIRequestsHistory />
                </SectionMain>
            </SectionGroup>
        </Authenticated>
    );
};

export default TransactionDetails;
