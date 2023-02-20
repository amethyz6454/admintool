import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Authenticated from "@/components/layout/Authenticated";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Pagination from "@/components/ui/Pagination";
import type { NextPage } from "next";
import Link from "next/link";

const AdminList: NextPage = (): JSX.Element => {
    return (
        <Authenticated
            title="Admins List"
            actions={
                <Button color="success" size="sm" href="/transactions/create">
                    Create an Admin
                </Button>
            }
        >
            <Card.CardContainer>
                <Card.Body>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Permissions</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>emilio@orientalwallet.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>&mdash;</TableCell>
                                <TableCell>
                                    <Link href="/admin/create">
                                        <a>Edit</a>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>emilio@orientalwallet.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>&mdash;</TableCell>
                                <TableCell>
                                    <Link href="/admin/create">
                                        <a>Edit</a>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>emilio@orientalwallet.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>&mdash;</TableCell>
                                <TableCell>
                                    <Link href="/admin/create">
                                        <a>Edit</a>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>emilio@orientalwallet.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>&mdash;</TableCell>
                                <TableCell>
                                    <Link href="/admin/create">
                                        <a>Edit</a>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>emilio@orientalwallet.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>&mdash;</TableCell>
                                <TableCell>
                                    <Link href="/admin/create">
                                        <a>Edit</a>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>emilio@orientalwallet.com</TableCell>
                                <TableCell>Admin</TableCell>
                                <TableCell>&mdash;</TableCell>
                                <TableCell>
                                    <Link href="/admin/create">
                                        <a>Edit</a>
                                    </Link>
                                </TableCell>
                            </TableRow>
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

export default AdminList;
