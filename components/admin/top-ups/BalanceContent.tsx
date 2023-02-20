import React from "react";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Pagination from "@/components/ui/Pagination";
import Composition from "@/components/ui/Composition";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import { InputField } from "@/components/form/InputField";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { GridCol } from "@/components/ui/Grid";
import { GetTopUpsBalancesList } from "@/api/hello";
import { ACCOUNT_TYPE_STATE } from "@/utils/Constants";
import TopUpsSolutionFilter from "./components/TopUpsSolutionFilter";
// import useKeyPress from "@/hooks/useKeyPress";

const TopUpsBalances: React.FC<{
    title: string;
    showSearchModal: boolean;
    setShowSearchModal: (e: boolean) => void;
}> = ({ title, showSearchModal, setShowSearchModal }): JSX.Element => {
    const TopUpsBalancesList = GetTopUpsBalancesList(10);
    const searchFieldRef = React.useRef(null);

    // const handleOpenSearch = () => {
    //     setShowSearchModal(true);
    //     searchFieldRef.current.focus();
    // };

    // useKeyPress(["ctrl", "alt", "s"], handleOpenSearch);
    // useKeyPress(["ctrl", "alt", "x"], () => setShowSearchModal(false));

    return (
        <>
            {/* <Card.CardContainer variant="table"> */}
            {/* <Card.Header> */}
            <TopUpsSolutionFilter />
            {/* </Card.Header> */}
            {/* </Card.CardContainer> */}
            <Card.CardContainer variant="table">
                <Card.Header enableGrid gap={16} className="text-xs">
                    <Composition wrapper="h4" primary={title} />
                    <GridCol grid="flex">
                        Searching for: <strong>Search text query here</strong>
                    </GridCol>
                </Card.Header>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Total Top-up Amount</TableCell>
                                <TableCell>Total Withdrawal Amount</TableCell>
                                <TableCell>Available Balance</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TopUpsBalancesList.map((balance, k) => (
                                <TableRow key={k}>
                                    <TableCell highlight>
                                        <Link href={"/admin/accounts/" + balance.accountNumber}>
                                            <a>{balance.accountNumber}</a>
                                        </Link>
                                    </TableCell>
                                    <TableCell>{balance.merchantName}</TableCell>
                                    <TableCell highlight severity={ACCOUNT_TYPE_STATE[balance.type]}>
                                        {balance.type}
                                    </TableCell>
                                    <TableCell>{balance.totalTopUpAmount}</TableCell>
                                    <TableCell>{balance.totalWithdrawalAmount}</TableCell>
                                    <TableCell>{balance.availableBalance}</TableCell>
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
                <ModalBody enableGrid>
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
        </>
    );
};

export default TopUpsBalances;
