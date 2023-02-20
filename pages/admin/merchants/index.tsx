import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import MerchantTableRow from "@/components/admin/merchants/MerchantTableRow";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import Pagination from "@/components/ui/Pagination";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GetMerchantsList } from "@/api/hello";
import { InputField } from "@/components/form/InputField";
import { FormButtons } from "@/components/form/Form";
import { GridCol } from "@/components/ui/Grid";
// import useKeyPress from "@/hooks/useKeyPress";

const Merchants: NextPage = (): JSX.Element => {
    const MerchantsList = GetMerchantsList(10);
    const searchFieldRef = React.useRef(null);
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
    const merchantTabs = [
        { title: "Search", icon: "Search", onClick: () => setShowSearchModal(true), notify: true },
    ] as DockerItemTypes;

    // const handleOpenSearch = () => {
    //     setShowSearchModal(true);
    //     searchFieldRef.current.focus();
    // };

    // useKeyPress(["ctrl", "alt", "s"], handleOpenSearch);
    // useKeyPress(["ctrl", "alt", "x"], () => setShowSearchModal(false));

    return (
        <Authenticated
            title="Merchants"
            actions={
                <FormButtons>
                    <Button color="secondary" size="sm">
                        Export
                    </Button>
                    <Button color="success" size="sm" href="/admin/merchants/create">
                        Add Merchant
                    </Button>
                </FormButtons>
            }
        >
            <Card.CardContainer variant="table">
                <Card.Header enableGrid gap={16} className="text-xs">
                    <GridCol grid="flex">
                        Searching for: <strong>Search text query here</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>&nbsp;</TableCell>
                                <TableCell>Merchant Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Company Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {MerchantsList.map((merchant, z) => (
                                <MerchantTableRow merchant={merchant} key={z} />
                            ))}
                        </TableBody>
                    </TableContainer>
                </Card.Body>
                <Card.Footer>
                    <Pagination />
                </Card.Footer>
            </Card.CardContainer>

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

            <Docker items={merchantTabs} />
        </Authenticated>
    );
};

export default Merchants;
