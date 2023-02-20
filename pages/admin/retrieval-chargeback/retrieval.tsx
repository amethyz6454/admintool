import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import CardEmptyState from "@/components/card/CardEmptyState";
import CurrencyDropdown from "@/components/form/constants/CurrencyDropdown";
import { InputField, SelectField } from "@/components/form/InputField";
import Authenticated from "@/components/layout/Authenticated";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import { GridCol } from "@/components/ui/Grid";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import Pagination from "@/components/ui/Pagination";
import { NextPage } from "next";
import React from "react";

const Retrieval: NextPage = (): JSX.Element => {
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
    const [showFilterModal, setShowFilterModal] = React.useState<boolean>(false);
    const retrievalTabs = [
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
            title: "Reset",
        },
    ] as DockerItemTypes;

    return (
        <Authenticated
            title="Retrieval"
            actions={
                <Button size="sm" color="secondary">
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
                        Retrieval Status: <strong>Retrieval</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Currency: <strong>IDR</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Recorded Date: <strong>2023-01-17 ~ 2023-01-20</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Recorded Date</TableCell>
                                <TableCell>Received Date</TableCell>
                                <TableCell>Retrieval Date</TableCell>
                                <TableCell>Transaction Number</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>MDR Fee</TableCell>
                                <TableCell>Fixed Fee</TableCell>
                                <TableCell>Net Amount</TableCell>
                                <TableCell>Transaction Date</TableCell>
                                <TableCell>Settled At</TableCell>
                                <TableCell>Retrieval Status</TableCell>
                                <TableCell>Remarks</TableCell>
                                <TableCell>Processed by</TableCell>
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
                    <SelectField id="retrieval_status" name="retrieval_status" label="Retrieval Status">
                        <option>- Select Status -</option>
                    </SelectField>
                    <CurrencyDropdown id="currency" name="currency" label="Currency" />
                    <InputField id="recorded_date" name="recorded_date" label="Recorded Date" type="date" />
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
                    />
                </ModalBody>
                <ModalFooter>
                    <Button>Search</Button>
                </ModalFooter>
            </Modal>

            <Docker items={retrievalTabs} />
        </Authenticated>
    );
};

export default Retrieval;
