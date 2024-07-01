import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Pagination from "@/components/ui/Pagination";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import Authenticated from "@/components/layout/Authenticated";
import { InputField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GetAccountBalances } from "@/api/hello";
import { ACCOUNT_TYPE_STATE } from "@/utils/Constants";
import { GridCol } from "@/components/ui/Grid";
// import useKeyPress from "@/hooks/useKeyPress";

const AccountDetails: NextPage = (): JSX.Element => {
    const AccountBalances = GetAccountBalances(10);
    const searchFieldRef = React.useRef(null);
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
    const accountsTabs = [{ title: "Search", icon: "Search", onClick: () => setShowSearchModal(true), notify: true }] as DockerItemTypes;

    // const handleOpenSearch = () => {
    //     setShowSearchModal(true);
    //     searchFieldRef.current.focus();
    // };

    // useKeyPress(["ctrl", "alt", "s"], handleOpenSearch);
    // useKeyPress(["ctrl", "alt", "x"], () => setShowSearchModal(false));

    return (
        <Authenticated
            title="Accounts"
            actions={
                <Button color="success" size="sm" href="/admin/accounts/create">
                    Create an Account
                </Button>
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
                                <TableCell>Account Number</TableCell>
                                <TableCell>Somebody</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Created At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AccountBalances.map((account, k) => (
                                <TableRow key={k}>
                                    <TableCell highlight>
                                        <Link href={"/admin/accounts/" + account.accountNumber}>{account.accountNumber}</Link>
                                    </TableCell>
                                    <TableCell>{account.merchantName}</TableCell>
                                    <TableCell highlight severity={ACCOUNT_TYPE_STATE[account.type]}>
                                        {account.type}
                                    </TableCell>
                                    <TableCell>{account.createdAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer>
                </Card.Body>
                <Card.Footer>
                    <Pagination />
                </Card.Footer>
            </Card.CardContainer>

            <Modal title="Search Account Number" size="sm" onClose={() => setShowSearchModal(false)} show={showSearchModal}>
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

            <Docker items={accountsTabs} />
        </Authenticated>
    );
};

export default AccountDetails;
