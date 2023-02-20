import React from "react";
import Link from "next/link";
import Card from "@/components/card/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/buttons/Button";
import Pagination from "@/components/ui/Pagination";
import Composition from "@/components/ui/Composition";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { InputField, SelectField } from "@/components/form/InputField";
import { GetAccountTransactionList, GetTimelineEntries } from "@/api/hello";
import ViewAndEditTransactionModal from "@/components/admin/modals/ViewAndEditTransaction";
import { TRANSACTION_STATUS_STATE, TRANSACTION_TYPE_STATE } from "@/utils/Constants";

interface AccountTransactionsProps {
    title: string;
    showFilterModal: boolean;
    setShowFilterModal: (e: boolean) => void;
    showSearchModal: boolean;
    setShowSearchModal: (e: boolean) => void;
}

const AccountTransactions = React.forwardRef<HTMLInputElement, AccountTransactionsProps>((props, ref) => {
    const accountTransactionList = GetAccountTransactionList(10);
    const [viewEditModal, setViewEditModal] = React.useState<boolean>(false);
    const { title, showFilterModal, setShowFilterModal, showSearchModal, setShowSearchModal } = props;

    return (
        <React.Fragment>
            <Card.CardContainer variant="table">
                <Card.Header>
                    <Composition wrapper="h4" primary={title} />
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
                                <TableCell>Settled At</TableCell>
                                <TableCell>Operation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {accountTransactionList.map((transaction, k) => (
                                <TableRow key={k}>
                                    <TableCell>
                                        <Link href={"/admin/transactions/" + transaction.transactionNumber}>
                                            <a>{transaction.transactionNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={"/admin/transactions/" + transaction.accountNumber}>
                                            <a>{transaction.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{transaction.merchantName}</TableCell>
                                    <TableCell>{transaction.customer}</TableCell>
                                    <TableCell severity={TRANSACTION_TYPE_STATE[transaction.type]} highlight>
                                        {transaction.type}
                                    </TableCell>
                                    <TableCell>{transaction.method}</TableCell>
                                    <TableCell>{transaction.solution}</TableCell>
                                    <TableCell highlight>
                                        <Badge variant={TRANSACTION_STATUS_STATE[transaction.status]}>
                                            {transaction.status}
                                        </Badge>
                                    </TableCell>
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
                                        {transaction.settledAt === null ? <>&mdash;</> : transaction.transactionDate}
                                    </TableCell>
                                    <TableCell>
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

            <Modal title="Filter" size="sm" onClose={() => setShowFilterModal(false)} show={showFilterModal}>
                <ModalBody enableGrid>
                    <SelectField label="Types" id="types" name="types">
                        <option>- Select Types -</option>
                        <option>Deposit</option>
                        <option>Withdrawal</option>
                    </SelectField>
                    <SelectField label="Method" id="method" name="method">
                        <option>- Select Method -</option>
                        <option>Credit/Debit Card</option>
                        <option>Local Bank Transfer</option>
                        <option>E-Wallet</option>
                    </SelectField>
                    <SelectField label="Solution" id="solution" name="solution">
                        <option>- Select Solution -</option>
                        <option>Dixon</option>
                        <option>LBT (Indonesia)</option>
                        <option>LBT (Malaysia)</option>
                        <option>LBT (Thailand)</option>
                        <option>LBT (Vietnam)</option>
                        <option>Oriental Wallet</option>
                        <option>PearlPay</option>
                    </SelectField>
                    <SelectField label="Status" id="status" name="status">
                        <option>- Select Status -</option>
                        <option>Pending</option>
                        <option>Complete</option>
                        <option>Expired</option>
                        <option>Cancel</option>
                        <option>Failed</option>
                    </SelectField>
                    <SelectField label="Currency" id="currency" name="currency">
                        <option>- Select Currency -</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>HKD</option>
                        <option>IDR</option>
                        <option>JPY</option>
                        <option>MYR</option>
                        <option>PHP</option>
                        <option>THB</option>
                        <option>USD</option>
                        <option>VND</option>
                    </SelectField>
                    <InputField
                        type="date"
                        label="Settled At"
                        id="settled_at"
                        name="settled_at"
                        placeholder="Enter settled date."
                    />
                </ModalBody>
                <ModalFooter>
                    <Button>Apply</Button>
                </ModalFooter>
            </Modal>

            <Modal title="Search" size="sm" onClose={() => setShowSearchModal(false)} show={showSearchModal}>
                <ModalBody>
                    <InputField
                        endIcon="Search"
                        id="search"
                        label="Search"
                        name="search"
                        noLabel
                        placeholder="Enter account number, customer number or customer name."
                        ref={ref}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button>Search</Button>
                </ModalFooter>
            </Modal>

            <ViewAndEditTransactionModal
                viewEditModal={viewEditModal}
                setViewEditModal={setViewEditModal}
                activityEntries={GetTimelineEntries(5)}
            />
        </React.Fragment>
    );
});

AccountTransactions.displayName = "AccountTransactions";

export default AccountTransactions;
