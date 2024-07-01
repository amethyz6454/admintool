import React from "react";
import Card from "@/components/card/Card";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { InputField } from "@/components/form/InputField";
import Pagination from "@/components/ui/Pagination";
import Link from "next/link";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import Button from "@/components/buttons/Button";
import { GetAccountCustomers } from "@/api/hello";
import Composition from "@/components/ui/Composition";

interface AccountCustomersProps {
    title: string;
    showSearchModal: boolean;
    setShowSearchModal: (e: boolean) => void;
}

const AccountCustomers = React.forwardRef<HTMLInputElement, AccountCustomersProps>((props, ref): JSX.Element => {
    const { title, showSearchModal, setShowSearchModal } = props;
    const accountCustomers = GetAccountCustomers(10);

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
                                <TableCell>Account number</TableCell>
                                <TableCell>Customer Number</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell>Email Address</TableCell>
                                <TableCell>Mobile #</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {accountCustomers.map((customer, k) => (
                                <TableRow key={k}>
                                    <TableCell>
                                        <Link href={"accounts/" + customer.accountNumber}>
                                            {customer.accountNumber}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={"customer/" + customer.customerNumber}>
                                            {customer.customerNumber}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{customer.customer}</TableCell>
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
                        ref={ref}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button>Search</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
});

export default AccountCustomers;

AccountCustomers.displayName = "AccountCustomers";
