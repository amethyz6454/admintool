import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import { SectionGroup, SectionMain, SectionSide } from "@/components/layout/Sections";
import MerchantBalances from "@/components/admin/merchants/MerchantBalances";
import MerchantInformation from "@/components/admin/merchants/MerchantInformation";
import MerchantBusinessInformation from "@/components/admin/merchants/MerchantBusinessInformation";
import SettlementBankAccount from "@/components/admin/merchants/SettlementBankAccount";
import { Grid, GridCol } from "@/components/ui/Grid";
import MerchantTransactions from "@/components/admin/merchants/MerchantTransactions";

const MerchantDetails: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="John Doe - AC2243927014">
            <SectionGroup>
                <SectionMain>
                    <Grid gap={16}>
                        <GridCol grid={6}>
                            <Grid gap={16}>
                                <MerchantInformation />
                                <SettlementBankAccount />
                            </Grid>
                        </GridCol>
                        <GridCol grid={6}>
                            <MerchantBusinessInformation />
                        </GridCol>
                    </Grid>
                </SectionMain>
                <SectionSide>
                    <MerchantBalances />
                </SectionSide>
            </SectionGroup>
            <SectionGroup>
                <SectionMain>
                    <MerchantTransactions />
                </SectionMain>
            </SectionGroup>
        </Authenticated>
    );
};

export default MerchantDetails;
