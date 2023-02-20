import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import type { NextPage } from "next";
import Pagination from "@/components/ui/Pagination";
import BalancesTableRow from "@/components/admin/balances/BalancesTableRow";
import { GetAccountBalances } from "@/api/hello";

const Home: NextPage = (): JSX.Element => {
    const AccountBalances = GetAccountBalances(10);

    return (
        <Authenticated
            title="Expandable Table Row"
            subTitle="Subtitle Here"
            actions={
                <Button size="sm" color="secondary">
                    Action
                </Button>
            }
        >
            <Card.CardContainer variant="table">
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell as="th" sort="ascending">
                                    &nbsp;
                                </TableCell>
                                <TableCell as="th" sort="descending">
                                    Account Number
                                </TableCell>
                                <TableCell as="th">Merchant Name</TableCell>
                                <TableCell as="th">Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AccountBalances.map((account, z) => (
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

export default Home;
