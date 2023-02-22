import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import type { NextPage } from "next";
import Pagination from "@/components/ui/Pagination";
import BalancesTableRow from "@/components/admin/balances/BalancesTableRow";
import { GetAccountBalances } from "@/api/hello";

const Admin: NextPage = (): JSX.Element => {
    const AccountBalances = GetAccountBalances(10);

    return (
        <Authenticated
            title="Expandable Table Row"
            subTitle="Subtitle Here"
            actions={
                <Button size="sm" color="secondary">
                    Export
                </Button>
            }
        >
            <Card.CardContainer variant="table">
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>&nbsp;</TableCell>
                                <TableCell>Account Number</TableCell>
                                <TableCell>Merchant Name</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AccountBalances?.map((account, z) => (
                                <BalancesTableRow account={account} key={z} />
                            ))}
                        </TableBody>
                    </TableContainer>
                </Card.Body>
                <Card.Footer>
                    <Pagination />
                </Card.Footer>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default Admin;
