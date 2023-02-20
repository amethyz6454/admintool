import React from "react";
import { Grid, GridCol } from "@/components/ui/Grid";
import { InputField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { CURRENCIES } from "@/utils/Constants";
import Composition from "@/components/ui/Composition";

const AccountSettingsExchangeCurrencyContent: React.FC = (): JSX.Element => {
    return (
        <GridCol grid="flex">
            <Grid>
                <Composition wrapper="h4" primary="Markup Fees Rate" />
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>&nbsp;</TableCell>
                            {CURRENCIES.map((currency, k) => (
                                <TableCell key={k}>{currency}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {CURRENCIES.map((currency, k) => (
                            <TableRow key={k}>
                                <TableCell>{currency}</TableCell>
                                {CURRENCIES.map((inner, c) => (
                                    <TableCell key={c}>
                                        <InputField
                                            label={inner}
                                            noLabel
                                            size="xs"
                                            id={inner.toLowerCase() + "_" + k + "_" + c}
                                            name={inner.toLowerCase() + "_" + k + "_" + c}
                                            endIcon="Plus"
                                            startIcon="Minus"
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Grid>
        </GridCol>
    );
};

export default AccountSettingsExchangeCurrencyContent;
