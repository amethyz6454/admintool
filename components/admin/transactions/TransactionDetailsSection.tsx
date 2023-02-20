import React from "react";
import Card from "@/components/card/Card";
import Badge from "@/components/ui/Badge";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";

const TransactionDetailsSection: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Transaction Details" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" itemBordered itemJustify="space-between" gap={12}>
                    <ListItem direction="row" label="Merchant Reference Number" value="AITESTdixon002" />
                    <ListItem direction="row" label="Status" value={<Badge variant="success">Completed</Badge>} />
                    <ListItem direction="row" label="Type" value="Withdrawal" valueSeverity="primary" />
                    <ListItem direction="row" label="Method" value="Credit/Debit Card" />
                    <ListItem direction="row" label="Solution" value="DixonPay" />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default TransactionDetailsSection;
