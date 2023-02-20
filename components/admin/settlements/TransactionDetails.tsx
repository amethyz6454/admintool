import React from "react";
import Card from "@/components/card/Card";
import Pagination from "@/components/ui/Pagination";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GetSettlementsTransactionDetailsList } from "@/api/hello";

const SettlementsTransactionDetails: React.FC<any> = (): JSX.Element => {
    const SettlementsTransactionDetailsList = GetSettlementsTransactionDetailsList(10);

    return (
        <Card.CardContainer variant="table">
            <Card.Body>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Settlement Type</TableCell>
                            <TableCell>Settlement Cut-Off</TableCell>
                            <TableCell>Account Number</TableCell>
                            <TableCell>Merchant Name</TableCell>
                            <TableCell>Transaction Date</TableCell>
                            <TableCell>Transaction Number</TableCell>
                            <TableCell>Settlement Amount</TableCell>
                            <TableCell>MDR Fee</TableCell>
                            <TableCell>Fixed Fee</TableCell>
                            <TableCell>Rolling Reserve</TableCell>
                            <TableCell>Total Settled Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {SettlementsTransactionDetailsList.map((transaction, k) => (
                            <TableRow key={k}>
                                <TableCell>{transaction.settlementType}</TableCell>
                                <TableCell>{transaction.settlementCutOff}</TableCell>
                                <TableCell>{transaction.accountNumber}</TableCell>
                                <TableCell>{transaction.merchantName}</TableCell>
                                <TableCell>{transaction.transactionDate}</TableCell>
                                <TableCell>{transaction.transactionNumber}</TableCell>
                                <TableCell>{transaction.settlementAmount}</TableCell>
                                <TableCell>{transaction.MDRFee}</TableCell>
                                <TableCell>{transaction.fixedFee}</TableCell>
                                <TableCell>{transaction.rollingReserve}</TableCell>
                                <TableCell>{transaction.totalSettledAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Card.Body>
            <Card.Footer>
                <Pagination />
            </Card.Footer>
        </Card.CardContainer>
    );
};

export default SettlementsTransactionDetails;
