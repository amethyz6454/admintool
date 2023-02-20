import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Authenticated from "@/components/layout/Authenticated";
import Badge from "@/components/ui/Badge";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import Pagination from "@/components/ui/Pagination";
import { InputField, SelectField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GridCol } from "@/components/ui/Grid";
import { TRANSACTION_STATUS_STATE, TRANSACTION_TYPES, TRANSACTION_TYPE_STATE } from "@/utils/Constants";
import { GetTransactionsList } from "@/api/hello";
// import useKeyPress from "@/hooks/useKeyPress";

const Transactions: NextPage = (): JSX.Element => {
    const TransactionsList = GetTransactionsList(10);
    const searchFieldRef = React.useRef(null);
    const [showFilterModal, setShowFilterModal] = React.useState<boolean>(false);
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);

    // const handleCloseAll = () => {
    //     setShowFilterModal(false);
    //     setShowSearchModal(false);
    // };

    // const handleOpenSearch = () => {
    //     setShowSearchModal(true);
    //     setShowFilterModal(false);
    //     searchFieldRef.current.focus();
    // };

    // const handleOpenFilter = () => {
    //     setShowSearchModal(false);
    //     setShowFilterModal(true);
    // };

    const transactionsTabs = [
        { title: "Search", icon: "Search", onClick: () => setShowSearchModal(true), notify: true },
        {
            title: "Filter",
            icon: "Filter",
            onClick: () => setShowFilterModal(true),
            notify: true,
            notifyCount: 2,
            divider: true,
        },
        { title: "Reset Filters" },
    ] as DockerItemTypes;

    // useKeyPress(["ctrl", "alt", "s"], handleOpenSearch);
    // useKeyPress(["ctrl", "alt", "f"], handleOpenFilter);
    // useKeyPress(["ctrl", "alt", "x"], handleCloseAll);

    return (
        <Authenticated
            title="Transactions"
            actions={
                <Button color="secondary" size="sm">
                    Export
                </Button>
            }
        >
            <Card.CardContainer variant="table">
                <Card.Header enableGrid gap={16} className="text-xs">
                    <GridCol grid="flex">
                        Searching for: <strong>Search text query here</strong>
                    </GridCol>
                    <GridCol grid="auto">Filters:</GridCol>
                    <GridCol grid="auto">
                        Transaction Type: <strong>Withdrawal</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Method: <strong>E-Wallet</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Solution: <strong>Local Bank Malaysia</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Status: <strong>Completed</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Currency: <strong>IDR</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Settled At: <strong>2023-01-17 ~ 2023-01-20</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Transaction Number</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Method</TableCell>
                                <TableCell>Solution</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Fee</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Settled At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TransactionsList.map((transaction, k) => (
                                <TableRow key={k}>
                                    <TableCell highlight>
                                        <Link href={"/admin/transactions/" + transaction.transactionNumber}>
                                            <a>{transaction.transactionNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={"/admin/accounts/" + transaction.accountNumber}>
                                            <a>{transaction.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{transaction.customerName}</TableCell>
                                    <TableCell>{transaction.merchantName}</TableCell>
                                    <TableCell highlight severity={TRANSACTION_TYPE_STATE[transaction.type]}>
                                        {transaction.type}
                                    </TableCell>
                                    <TableCell>{transaction.method}</TableCell>
                                    <TableCell>{transaction.solution}</TableCell>
                                    <TableCell>
                                        <Badge variant={TRANSACTION_STATUS_STATE[transaction.status]}>
                                            {transaction.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {transaction.currency} {transaction.fee}
                                    </TableCell>
                                    <TableCell>
                                        {transaction.currency} {transaction.total}
                                    </TableCell>
                                    <TableCell>{transaction.settledAt}</TableCell>
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
                    <SelectField id="transaction_type" name="transaction_type" label="Transaction Type">
                        <option value={0}>- Select Type -</option>
                        {Object.values(TRANSACTION_TYPES).map((type) => (
                            <option value={type} key={type}>
                                {type}
                            </option>
                        ))}
                    </SelectField>
                    <SelectField id="methods" name="methods" label="Method">
                        <option>- Select Method -</option>
                        <option>Credit/Debit Card</option>
                        <option>E-Wallet</option>
                        <option>Local Bank Transfer</option>
                    </SelectField>
                    <SelectField id="solution" name="solution" label="Solution">
                        <option>- Select Solution -</option>
                        <option>CCD</option>
                        <option>Local Bank Malaysia</option>
                        <option>Oriental Wallet</option>
                    </SelectField>
                    <SelectField id="status" name="status" label="Status">
                        <option>- Select Status -</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Expired</option>
                    </SelectField>
                    <SelectField id="currency" name="currency" label="Currency">
                        <option>- Select Currency -</option>
                        <option>Completed</option>
                        <option>Pending</option>
                        <option>Expired</option>
                    </SelectField>
                    <InputField id="settled" name="settled" label="Settled At" placeholder="Filter date." type="date" />
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
                        ref={searchFieldRef}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button>Search</Button>
                </ModalFooter>
            </Modal>

            <Docker items={transactionsTabs} />
        </Authenticated>
    );
};

export default Transactions;
