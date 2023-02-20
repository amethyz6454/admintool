import React from "react";
import { Grid, GridCol } from "@/components/ui/Grid";
import { InputField, SelectField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Composition from "@/components/ui/Composition";

const AccountSettingsRequestLimitsContentContent: React.FC = (): JSX.Element => {
    return (
        <GridCol>
            <Grid>
                <Composition wrapper="h4" primary="Request Limits" />
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Threshold</TableCell>
                            <TableCell>Limit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Deposit</TableCell>
                            <TableCell enableGrid>
                                <SelectField id="depositThreshold" name="depositThreshold" size="sm" grid="auto">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Annual</option>
                                </SelectField>
                            </TableCell>
                            <TableCell enableGrid>
                                <InputField
                                    label="Deposit Limit"
                                    noLabel
                                    grid="auto"
                                    size="sm"
                                    id="depositLimit"
                                    name="depositLimit"
                                    endIcon="Plus"
                                    startIcon="Minus"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Withdrawal</TableCell>
                            <TableCell enableGrid>
                                <SelectField id="withdrawalThreshold" name="withdrawalThreshold" size="sm" grid="auto">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Annual</option>
                                </SelectField>
                            </TableCell>
                            <TableCell enableGrid>
                                <InputField
                                    label="Withdrawal Limit"
                                    noLabel
                                    grid="auto"
                                    size="sm"
                                    id="withdrawalLimit"
                                    name="withdrawalLimit"
                                    endIcon="Plus"
                                    startIcon="Minus"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Correction</TableCell>
                            <TableCell enableGrid>
                                <SelectField id="correctionThreshold" name="correctionThreshold" size="sm" grid="auto">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Annual</option>
                                </SelectField>
                            </TableCell>
                            <TableCell enableGrid>
                                <InputField
                                    label="Correction Limit"
                                    noLabel
                                    grid="auto"
                                    size="sm"
                                    id="correctionLimit"
                                    name="correctionLimit"
                                    endIcon="Plus"
                                    startIcon="Minus"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Settlement</TableCell>
                            <TableCell enableGrid>
                                <SelectField id="settlementThreshold" name="settlementThreshold" size="sm" grid="auto">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Annual</option>
                                </SelectField>
                            </TableCell>
                            <TableCell enableGrid>
                                <InputField
                                    label="Settlement Limit"
                                    noLabel
                                    grid="auto"
                                    size="sm"
                                    id="settlementLimit"
                                    name="settlementLimit"
                                    endIcon="Plus"
                                    startIcon="Minus"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Grid>
        </GridCol>
    );
};

export default AccountSettingsRequestLimitsContentContent;
