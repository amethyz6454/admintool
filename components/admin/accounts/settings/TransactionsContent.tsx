import React from "react";
import { Grid, GridCol } from "@/components/ui/Grid";
import { OptionsField } from "@/components/form/InputField";
import { FormFieldset } from "@/components/form/Form";
import TransactionsContentCard from "./TransactionsContentCard";
import { GetTransactionLimits } from "@/api/hello";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Composition from "@/components/ui/Composition";
import { GAMES, TRANSACTION_METHODS } from "@/utils/Constants";
import { formatId } from "@/utils/GeneralUtil";

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
                    {Object.keys(TRANSACTION_METHODS).map((method, k) => (
                        <OptionsField name="methods" id={formatId(method) + "-" + k} key={k} label={method} />
                    ))}
                </FormFieldset>
                <FormFieldset
                    content="buttonOptions"
                    grid={6}
                    innerGrid={2}
                    title="Games"
                    subTitle="Remove or add games allowed to do when using the API"
                >
                    {GAMES.map((game, k) => (
                        <OptionsField name="games" id={formatId(game) + "-" + k} key={k} label={game} />
                    ))}
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
