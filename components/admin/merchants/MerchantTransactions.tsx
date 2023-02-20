import React from "react";
import Card from "@/components/card/Card";
import Pagination from "@/components/ui/Pagination";
import CardEmptyState from "@/components/card/CardEmptyState";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Composition from "@/components/ui/Composition";

const MerchantTransactions: React.FC<any> = (): JSX.Element => {
    return (
        <Card.CardContainer variant="table">
            <Card.Header>
                <Composition wrapper="h4" primary="Transactions" />
            </Card.Header>
            <Card.Body>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Transaction Number</TableCell>
                            <TableCell>Account Number</TableCell>
                            <TableCell>Merchant Name</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Method</TableCell>
                            <TableCell>Solution</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Fee</TableCell>
                            <TableCell>Total Amount</TableCell>
                            <TableCell>Settled At</TableCell>
                            <TableCell>Operation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={999}>
                                <CardEmptyState
                                    image="/vectors/icon-no-transactions.svg"
                                    appearance="transparent"
                                    title="Merchant has no transactions yet."
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Card.Body>
            <Card.Footer>
                <Pagination />
            </Card.Footer>
        </Card.CardContainer>
    );
};

export default MerchantTransactions;
