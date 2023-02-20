import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import Card from "@/components/card/Card";
import CardEmptyState from "@/components/card/CardEmptyState";
import Pagination from "@/components/ui/Pagination";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import SolutionsDropdown from "@/components/form/constants/SolutionsDropdown";
import CurrencyDropdown from "@/components/form/constants/CurrencyDropdown";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GridCol } from "@/components/ui/Grid";
import { InputField } from "@/components/form/InputField";
// import useKeyPress from "@/hooks/useKeyPress";

const PendingRefundRequest: NextPage = (): JSX.Element => {
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
    const [showFilterModal, setShowFilterModal] = React.useState<boolean>(false);
    const searchFieldRef = React.useRef(null);
    const refundTabs = [
        {
            title: "Search",
            icon: "Search",
            onClick: () => setShowSearchModal(true),
            notify: true,
        },
        {
            title: "Filter",
            icon: "Filter",
            onClick: () => setShowFilterModal(true),
            notify: true,
            notifyCount: 2,
            divider: true,
        },
        {
            title: "Reset Filters",
        },
    ] as DockerItemTypes;

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
        <Authenticated
            title="Pending Refund Request"
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
                        Solution: <strong>Local Bank Indonesia</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Currency: <strong>IDR</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Application Date: <strong>2023-01-17 ~ 2023-01-20</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Processed Date: <strong>2023-01-17 ~ 2023-01-20</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Application Date</TableCell>
                                <TableCell>Processed Date</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>MDR Fee</TableCell>
                                <TableCell>Fixed Fee</TableCell>
                                <TableCell>Net Amount</TableCell>
                                <TableCell>Transaction Date</TableCell>
                                <TableCell>Settled At</TableCell>
                                <TableCell>Refund Reason</TableCell>
                                <TableCell>Refund Status</TableCell>
                                <TableCell>Operation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={999}>
                                    <CardEmptyState
                                        image="/vectors/icon-no-transactions.svg"
                                        title="No pending refunds applications yet."
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

            <Modal title="Filter" size="sm" onClose={() => setShowFilterModal(false)} show={showFilterModal}>
                <ModalBody enableGrid>
                    <SolutionsDropdown id="solution" name="solution" label="Solution" />
                    <CurrencyDropdown id="currency" name="currency" label="Currency" />
                    <InputField id="application_date" name="application_date" label="Application Date" type="date" />
                    <InputField id="process_date" name="process_date" label="Process Date" type="date" />
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

            <Docker items={refundTabs} />
        </Authenticated>
    );
};

export default PendingRefundRequest;
