import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Link from "next/link";
import Pagination from "@/components/ui/Pagination";
import { InputField, SelectField } from "@/components/form/InputField";
import { Grid, GridSpacer } from "@/components/ui/Grid";
import { FormButtons } from "@/components/form/Form";
import { GetSettlementsEntries } from "@/api/hello";
import { TRANSACTION_STATUS_STATE } from "@/utils/Constants";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";

const SettlementsList: React.FC<any> = (): JSX.Element => {
    const SettlementsEntries = GetSettlementsEntries(10);

    return (
        <React.Fragment>
            <Card.CardContainer variant="table">
                <Card.Header>
                    <Grid>
                        <InputField
                            id="search"
                            name="search"
                            endIcon="Search"
                            label="Search"
                            grid="auto"
                            placeholder="Enter transaction number."
                        />
                        <SelectField id="merchant" name="merchant" label="Merchant" grid="auto">
                            <option>- Select Merchant -</option>
                        </SelectField>
                        <SelectField id="currency" name="currency" label="Currency" grid="auto">
                            <option>- Select Currency -</option>
                        </SelectField>
                        <SelectField id="status" name="status" label="Settlement Status" grid="auto">
                            <option>- Select Settlement Status -</option>
                        </SelectField>
                        <InputField id="settled_at" name="settled_at" label="Settled At" grid="auto" type="date" />
                        <FormButtons grid="auto">
                            <Button color="secondary">Reset</Button>
                        </FormButtons>
                        <GridSpacer />
                        <FormButtons grid="auto">
                            <Button>Export</Button>
                            <Button color="warning">Display</Button>
                        </FormButtons>
                    </Grid>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Operations</TableCell>
                                <TableCell>Record Time</TableCell>
                                <TableCell>Settlement Cut-off</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Settlement Tx. No.</TableCell>
                                <TableCell>Settlement Amount</TableCell>
                                <TableCell>MDR Fee</TableCell>
                                <TableCell>Fixed Fee</TableCell>
                                <TableCell>Settlement Fee</TableCell>
                                <TableCell>Rolling Reserve</TableCell>
                                <TableCell>RR Return</TableCell>
                                <TableCell>Other Fees</TableCell>
                                <TableCell>Total Settled Amount</TableCell>
                                <TableCell>Settlement Status</TableCell>
                                <TableCell>Settled Date</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {SettlementsEntries.map((settlement, k) => (
                                <TableRow key={k}>
                                    <TableCell>&nbsp;</TableCell>
                                    <TableCell>{settlement.recordedTime}</TableCell>
                                    <TableCell>
                                        {settlement.settlementCutOff === "" ? (
                                            <>&mdash;</>
                                        ) : (
                                            settlement.settlementCutOff
                                        )}
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={"/admin/accounts/" + settlement.accountNumber}>
                                            <a>{settlement.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{settlement.merchantName}</TableCell>
                                    <TableCell highlight>
                                        <Link href={"/admin/transactions/" + settlement.settlementTaxNo}>
                                            <a>{settlement.settlementTaxNo}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.settlementAmount}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.MDRFee}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.fixedFee}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.settlementFee}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.rollingReverse}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.rrReturn}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency} {settlement.otherFees}
                                    </TableCell>
                                    <TableCell>
                                        {settlement.currency}{" "}
                                        {parseInt(settlement.settlementAmount.replace(/\,/g, "")) +
                                            parseInt(settlement.MDRFee.replace(/\,/g, "")) +
                                            parseInt(settlement.fixedFee.replace(/\,/g, "")) +
                                            parseInt(settlement.settlementFee.replace(/\,/g, "")) +
                                            parseInt(settlement.rollingReverse.replace(/\,/g, "")) +
                                            parseInt(settlement.rrReturn.replace(/\,/g, "")) +
                                            parseInt(settlement.otherFees.replace(/\,/g, ""))}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={TRANSACTION_STATUS_STATE[settlement.settlementStatus]}>
                                            {settlement.settlementStatus}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {settlement.settlementDate === "" ? <>&mdash;</> : settlement.settlementDate}
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={"/admin/settlements/" + settlement.settlementTaxNo}>
                                            <a>View/Edit</a>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer>
                </Card.Body>
                <Card.Footer>
                    <Pagination />
                </Card.Footer>
            </Card.CardContainer>
        </React.Fragment>
    );
};

export default SettlementsList;
