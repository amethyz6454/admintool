import React from "react";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Pagination from "@/components/ui/Pagination";
import Badge from "@/components/ui/Badge";
import CurrencyDropdown from "@/components/form/constants/CurrencyDropdown";
import Composition from "@/components/ui/Composition";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import { InputField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GridCol } from "@/components/ui/Grid";
import { GetTopUpsHistoryList } from "@/api/hello";
import { TRANSACTION_STATUS_STATE } from "@/utils/Constants";
// import useKeyPress from "@/hooks/useKeyPress";

const TopUpsHistory: React.FC<{
    title: string;
    showSearchModal: boolean;
    setShowSearchModal: (e: boolean) => void;
    showFilterModal: boolean;
    setShowFilterModal: (e: boolean) => void;
}> = ({ title, showSearchModal, setShowSearchModal, showFilterModal, setShowFilterModal }): JSX.Element => {
    const TopUpsHistoryList = GetTopUpsHistoryList(10);
    const searchFieldRef = React.useRef(null);

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

    // useKeyPress(["ctrl", "alt", "s"], handleOpenSearch);
    // useKeyPress(["ctrl", "alt", "f"], handleOpenFilter);
    // useKeyPress(["ctrl", "alt", "x"], handleCloseAll);

    return (
        <>
            <Card.CardContainer variant="table">
                <Card.Header enableGrid gap={16} className="text-xs">
                    <Composition wrapper="h4" primary={title} />
                    <GridCol grid="flex">
                        Searching for: <strong>Search text query here</strong>
                    </GridCol>
                    <GridCol grid="auto">Filters:</GridCol>
                    <GridCol grid="auto">
                        Currency: <strong>EUR</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Date: <strong>2022-12-12 ~ 2022-12-15</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Transaction Date</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Transaction Number</TableCell>
                                <TableCell>Top-up Amount</TableCell>
                                <TableCell>Top-up Fee</TableCell>
                                <TableCell>Note</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TopUpsHistoryList.map((history, k) => (
                                <TableRow key={k}>
                                    <TableCell>{history.transactionDate}</TableCell>
                                    <TableCell>
                                        <Link href={"/accounts/" + history.accountNumber}>
                                            <a>{history.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{history.merchantName}</TableCell>
                                    <TableCell>
                                        <Link href={"/accounts/" + history.transactionNumber}>
                                            <a>{history.transactionNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        {history.currency} {history.topUpAmount}
                                    </TableCell>
                                    <TableCell>
                                        {history.currency} {history.topUpFee}
                                    </TableCell>
                                    <TableCell>{history.note}</TableCell>
                                    <TableCell>
                                        <Badge variant={TRANSACTION_STATUS_STATE[history.status]}>
                                            {history.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>action</TableCell>
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
                    <CurrencyDropdown id="currency" name="currency" label="Currency" />
                    <InputField id="date" name="date" label="Date" placeholder="Filter Date." type="date" />
                </ModalBody>
                <ModalFooter>
                    <Button>Apply</Button>
                </ModalFooter>
            </Modal>

            <Modal title="Search" size="sm" onClose={() => setShowSearchModal(false)} show={showSearchModal}>
                <ModalBody>
                    <InputField
                        endIcon="Search"
                        grid="auto"
                        id="search"
                        label="Search"
                        name="search"
                        noLabel
                        placeholder="Enter account number or merchant name."
                        ref={searchFieldRef}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button>Search</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default TopUpsHistory;
