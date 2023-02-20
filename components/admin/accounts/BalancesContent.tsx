import Card from "@/components/card/Card";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Composition from "@/components/ui/Composition";
import Pagination from "@/components/ui/Pagination";

const AccountBalances: React.FC<{ title: string }> = ({ title }): JSX.Element => {
    return (
        <Card.CardContainer variant="table">
            <Card.Header>
                <Composition wrapper="h4" primary={title} />
            </Card.Header>
            <Card.Body>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Solution</TableCell>
                            <TableCell>Currency</TableCell>
                            <TableCell>Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>CCD</TableCell>
                            <TableCell>EUR</TableCell>
                            <TableCell>0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CCD</TableCell>
                            <TableCell>EUR</TableCell>
                            <TableCell>0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CCD</TableCell>
                            <TableCell>EUR</TableCell>
                            <TableCell>0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CCD</TableCell>
                            <TableCell>EUR</TableCell>
                            <TableCell>0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CCD</TableCell>
                            <TableCell>EUR</TableCell>
                            <TableCell>0.00</TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Card.Body>
            <Card.Footer>
                <Pagination />
            </Card.Footer>
        </Card.CardContainer>
    );
};

export default AccountBalances;
