import React from "react";
import Link from "next/link";
import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import Pagination from "@/components/ui/Pagination";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { TRANSACTION_STATUS_STATE, TRANSACTION_TYPE_STATE } from "@/utils/Constants";
import { GetCustomerTransactions, GetTimelineEntries } from "@/api/hello";
import ViewAndEditTransactionModal from "@/components/admin/modals/ViewAndEditTransaction";

const CustomerTransactions: React.FC = (): JSX.Element => {
    const CustomerTransactionsEntries = GetCustomerTransactions(10);
    const [viewEditModal, setViewEditModal] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <Card.CardContainer variant="table">
                <Card.Header>
                    <Composition wrapper="h4" primary="Customer General Details" />
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
                                <TableCell>Amount</TableCell>
                                <TableCell>MDR Fee</TableCell>
                                <TableCell>Fixed Fee</TableCell>
                                <TableCell>Net Amount</TableCell>
                                <TableCell>Transaction Date</TableCell>
                                <TableCell>Settled at</TableCell>
                                <TableCell>Operation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {CustomerTransactionsEntries.map((transaction, k) => (
                                <TableRow key={k}>
                                    <TableCell highlight>
                                        <Link href={`/admin/transactions/${transaction.transactionNumber}`}>
                                            <a>{transaction.transactionNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={`/admin/accounts/${transaction.accountNumber}`}>
                                            <a>{transaction.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={`/admin/customers/${transaction.merchantName}`}>
                                            <a>{transaction.merchantName}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={`/admin/customers/${transaction.customer}`}>
                                            <a>{transaction.customer}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell highlight severity={TRANSACTION_TYPE_STATE[transaction.type]}>
                                        {transaction.type}
                                    </TableCell>
                                    <TableCell>{transaction.method}</TableCell>
                                    <TableCell highlight severity={TRANSACTION_STATUS_STATE[transaction.status]}>
                                        {transaction.status}
                                    </TableCell>
                                    <TableCell>{transaction.solution}</TableCell>
                                    <TableCell>
                                        {transaction.currency} {transaction.amount}
                                    </TableCell>
                                    <TableCell>
                                        {transaction.currency} {transaction.mdrFee}
                                    </TableCell>
                                    <TableCell>
                                        {transaction.currency} {transaction.fixedFee}
                                    </TableCell>
                                    <TableCell>
                                        {transaction.currency} {transaction.netAmount}
                                    </TableCell>
                                    <TableCell>{transaction.transactionDate}</TableCell>
                                    <TableCell>
                                        {transaction.settledAt === "" ? <>&mdash;</> : transaction.settledAt}
                                    </TableCell>
                                    <TableCell highlight>
                                        <a onClick={() => setViewEditModal(true)}>View / Edit</a>
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

            <ViewAndEditTransactionModal
                viewEditModal={viewEditModal}
                setViewEditModal={setViewEditModal}
                activityEntries={GetTimelineEntries(5)}
            />
        </React.Fragment>
    );
};

export default CustomerTransactions;
