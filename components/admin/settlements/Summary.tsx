import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import { SectionGroup, SectionMain } from "@/components/layout/Sections";
import { ListContainer, ListItem } from "@/components/ui/List";
import { InputField, SelectField, TextArea } from "@/components/form/InputField";
import { FormButtons } from "@/components/form/Form";
import Composition from "@/components/ui/Composition";
import { TableBody, TableCell, TableContainer, TableFoot, TableHead, TableRow } from "@/components/table/Table";

const SettlementsSummary: React.FC<any> = (): JSX.Element => {
    return (
        <SectionGroup>
            <SectionMain>
                <Card.CardContainer variant="table">
                    <Card.Body>
                        <TableContainer>
                            <TableHead>
                                <TableRow>
                                    <TableCell as="th">Settlement Type</TableCell>
                                    <TableCell as="th">Description</TableCell>
                                    <TableCell as="th">Count</TableCell>
                                    <TableCell as="th">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell rowSpan={2}>Regular Transaction</TableCell>
                                    <TableCell>Approved Transactions</TableCell>
                                    <TableCell>30</TableCell>
                                    <TableCell>0.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Declined Transactions</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>&mdash;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={3}>Irregular Transaction</TableCell>
                                    <TableCell>Refund Transactions</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>3,000.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>CB Transactions</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>3,000.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Retrieval Transactions</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>&mdash;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>RR Return</TableCell>
                                    <TableCell>30</TableCell>
                                    <TableCell>0.00</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFoot>
                                <TableRow>
                                    <TableCell colSpan={2} className="text-right">
                                        Total
                                    </TableCell>
                                    <TableCell>60</TableCell>
                                    <TableCell>6,000.00</TableCell>
                                </TableRow>
                            </TableFoot>
                        </TableContainer>
                    </Card.Body>
                </Card.CardContainer>
                <Card.CardContainer>
                    <Card.Body>
                        <ListContainer direction="column" itemJustify="space-between" itemDirection="row" gap={8}>
                            <ListItem>
                                <strong>Description</strong>
                                <strong>Amount</strong>
                            </ListItem>
                            <ListItem label="MDR Fee" value="0.00" />
                            <ListItem label="Fixed Fee" value="0.00" />
                            <ListItem label="Settlement Fee" value="30.00" />
                            <ListItem label="Refund Fee" value="0.00" />
                            <ListItem label="CB Fee" value="0.00" />
                            <ListItem label="Retrieval Fee" value="0.00" />
                            <ListItem label="Rolling Reserve" value="5.05" />
                            <ListItem label="Other Reserve" value="0.00" highlight />
                            <ListItem label="Total Deductions" value="10.05" highlight />
                            <ListItem label="Total Settled Amount" value="494.95" />
                        </ListContainer>
                    </Card.Body>
                </Card.CardContainer>
                <Card.CardContainer>
                    <Card.Header>
                        <Composition wrapper="h4" pre="Processed By" primary="John Doe" />
                    </Card.Header>
                    <Card.Body enableGrid as="form">
                        <ListContainer>
                            <ListItem label="Recorded time" value="2022-08-30T07:05:15.000000Z" />
                            <ListItem label="Settled Date" value={<>&mdash;</>} className="text-right" />
                        </ListContainer>

                        <hr />

                        <InputField
                            id="settlement_cut_off"
                            name="settlement_cut_off"
                            label="Settlement Cut-Off"
                            type="date"
                        />
                        <SelectField id="status" name="status" label="Status">
                            <option>- Select Status -</option>
                        </SelectField>
                        <TextArea id="remarks" name="remarks" label="Remarks" />
                        <FormButtons>
                            <Button>Update</Button>
                            <Button color="secondary">Back</Button>
                        </FormButtons>
                    </Card.Body>
                </Card.CardContainer>
            </SectionMain>
        </SectionGroup>
    );
};

export default SettlementsSummary;
