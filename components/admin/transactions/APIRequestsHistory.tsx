import React from "react";
import Card from "@/components/card/Card";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import Composition from "@/components/ui/Composition";

const APIRequestsHistory: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer variant="table">
            <Card.Header>
                <Composition wrapper="h4" primary="API Requests History" />
            </Card.Header>
            <Card.Body>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Request URL</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>User Agent</TableCell>
                            <TableCell>API Key</TableCell>
                            <TableCell>Digest</TableCell>
                            <TableCell>Requested At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>https://api-staging.paystage.net/deposit/intent</TableCell>
                            <TableCell>136.158.48.100</TableCell>
                            <TableCell>PostmanRuntime/7.29.2</TableCell>
                            <TableCell>pk_OgxumUr87vGcqMeY94Lmnz6OxtHVRqzR</TableCell>
                            <TableCell>0debd2f8ee82e2755a65ab5a787a4142</TableCell>
                            <TableCell>08/24/2022</TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default APIRequestsHistory;
