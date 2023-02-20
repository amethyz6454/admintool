import React from "react";
import type { NextPage } from "next";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Authenticated from "@/components/layout/Authenticated";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Pagination from "@/components/ui/Pagination";
import { GetExchangeRatesList } from "@/api/hello";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import CurrencyDropdown from "@/components/form/constants/CurrencyDropdown";
import { GridCol, GridSpacer } from "@/components/ui/Grid";

const ExchangeRates: NextPage = (): JSX.Element => {
    const ExchangeRatesList = GetExchangeRatesList(10);
    const [showFilterModal, setShowFilterModal] = React.useState<boolean>(false);
    const exchangeRateTabs = [
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
            title="Exchange Rates"
            actions={
                <Button color="secondary" size="sm">
                    Refresh Rates
                </Button>
            }
        >
            <Card.CardContainer variant="table">
                <Card.Header enableGrid gap={16} className="text-xs">
                    <GridSpacer />
                    <GridCol grid="auto">Filters:</GridCol>
                    <GridCol grid="auto">
                        Base Currency: <strong>PHP</strong>
                    </GridCol>
                    <GridCol grid="auto">
                        Exchange Currency: <strong>USD</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Base Currency</TableCell>
                                <TableCell>Exchange Currency</TableCell>
                                <TableCell>Rate</TableCell>
                                <TableCell>Marked Up Rates</TableCell>
                                <TableCell>Last update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ExchangeRatesList.map((rate, k) => (
                                <TableRow key={k}>
                                    <TableCell>{rate.baseCurrency}</TableCell>
                                    <TableCell>{rate.exchangeCurrency}</TableCell>
                                    <TableCell>{rate.rate}</TableCell>
                                    <TableCell>{rate.markedUpRates}</TableCell>
                                    <TableCell>{rate.lastUpdate}</TableCell>
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
                    <CurrencyDropdown id="base_currency" name="base_currency" label="Base Currency" />
                    <CurrencyDropdown id="exchange_currency" name="exchange_currency" label="Exchange Currency" />
                </ModalBody>
                <ModalFooter>
                    <Button>Apply</Button>
                </ModalFooter>
            </Modal>

            <Docker items={exchangeRateTabs} />
        </Authenticated>
    );
};

export default ExchangeRates;
