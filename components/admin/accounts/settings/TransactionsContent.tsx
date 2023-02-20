import React from "react";
import { Grid, GridCol } from "@/components/ui/Grid";
import { OptionsField } from "@/components/form/InputField";
import { FormFieldset } from "@/components/form/Form";
import TransactionsContentCard from "./TransactionsContentCard";
import { GetTransactionLimits } from "@/api/hello";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Composition from "@/components/ui/Composition";

const AccountSettingsTransactions: React.FC = (): JSX.Element => {
    const TransactionLimits = GetTransactionLimits(10);
    return (
        <GridCol grid="flex">
            <Grid>
                <Composition wrapper="h4" primary="Transactions" />
                <FormFieldset
                    content="buttonOptions"
                    grid={6}
                    title="Types"
                    subTitle="Remove or add transaction types allowed to do when using the API"
                >
                    <OptionsField name="types" id="deposit" label="Deposit" />
                    <OptionsField name="types" id="withdrawal" label="Withdrawal" />
                    <OptionsField name="types" id="correction" label="Correction" />
                </FormFieldset>
                <FormFieldset
                    grid={6}
                    content="buttonOptions"
                    innerGrid={2}
                    title="Methods"
                    subTitle="Remove or add transaction methods allowed to do when using the API"
                >
                    <OptionsField name="methods" id="credit_debit_card" label="Credit Debit Card" />
                    <OptionsField name="methods" id="e_wallet" label="E-Wallet" />
                    <OptionsField name="methods" id="local_bank_transfer" label="Local Bank Transfer" />
                    <OptionsField name="methods" id="manual" label="Manual" />
                    <OptionsField name="methods" id="top_up" label="Top-Up" />
                </FormFieldset>
                <FormFieldset
                    content="buttonOptions"
                    grid={6}
                    innerGrid={2}
                    title="Solutions"
                    subTitle="Remove or add transaction solutions allowed to do when using the API"
                >
                    <OptionsField name="solutions" id="dixonpay" label="Credit Debit Card" />
                    <OptionsField name="solutions" id="jpay" label="E-Wallet" />
                    <OptionsField name="solutions" id="local_bank_indonesia" label="Local Bank Indonesia" />
                    <OptionsField name="solutions" id="local_bank_thailand" label="Local Bank Thailand" />
                    <OptionsField name="solutions" id="local_bank_vietnam" label="Local Bank Vietnam" />
                    <OptionsField name="solutions" id="oriental_wallet" label="Oriental Wallet" />
                    <OptionsField name="solutions" id="pearlpay" label="PearlPay" />
                </FormFieldset>
                <FormFieldset
                    title="Transaction Limits"
                    subTitle="Remove or add transaction methods allowed to do when using the API"
                >
                    <TableContainer>
                        <TableHead sticky>
                            <TableRow>
                                <TableCell as="th">Type</TableCell>
                                <TableCell as="th">Method</TableCell>
                                <TableCell as="th">Solution</TableCell>
                                <TableCell as="th">Currency</TableCell>
                                <TableCell as="th">Minimum Amount</TableCell>
                                <TableCell as="th">Maximum Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TransactionLimits.map((limits, k) => (
                                <TransactionsContentCard limits={limits} key={k} />
                            ))}
                        </TableBody>
                    </TableContainer>
                </FormFieldset>
            </Grid>
        </GridCol>
    );
};

export default AccountSettingsTransactions;
