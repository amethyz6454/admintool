import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Docker, { DockerItemTypes } from "@/components/ui/Docker";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import Pagination from "@/components/ui/Pagination";
import { InputField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GetCustomersList } from "@/api/hello";
// import useKeyPress from "@/hooks/useKeyPress";

const Customers: NextPage = (): JSX.Element => {
    const CustomersList = GetCustomersList(10);
    const searchFieldRef = React.useRef(null);
    const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
    const customersTabs = [
        { title: "Search", icon: "Search", onClick: () => setShowSearchModal(true), notify: true },
    ] as DockerItemTypes;

    // const handleOpenSearch = () => {
    //     setShowSearchModal(true);
    //     searchFieldRef.current.focus();
    // };

    // useKeyPress(["ctrl", "alt", "s"], handleOpenSearch);
    // useKeyPress(["ctrl", "alt", "x"], () => setShowSearchModal(false));

    return (
        <Authenticated title="Customers">
            <Card.CardContainer variant="table">
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Customer Number</TableCell>
                                <TableCell>Customer Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {CustomersList.map((customer, k) => (
                                <TableRow key={k}>
                                    <TableCell highlight>
                                        <Link href={"/admin/accounts/" + customer.accountNumber}>
                                            <a>{customer.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell highlight>
                                        <Link href={"/admin/customers/" + customer.customerNumber}>
                                            <a>{customer.customerNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{customer.customerName}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>{customer.mobileNumber}</TableCell>
                                    <TableCell>{customer.city}</TableCell>
                                    <TableCell>{customer.country}</TableCell>
                                </TableRow>
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

            <Docker items={customersTabs} />
        </Authenticated>
    );
};

export default Customers;
