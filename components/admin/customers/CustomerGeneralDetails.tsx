import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";
import React from "react";

const CustomerGeneralDetails: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Customer General Details" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" gap={8} itemBordered itemJustify="space-between">
                    <ListItem direction="row" label="Account Number" value="AC2226825341" />
                    <ListItem direction="row" label="Account Name" value="John Doe" />
                    <ListItem direction="row" label="Customer Number" value="2242390657" />
                    <ListItem direction="row" label="Customer" value="Maria Helena" />
                    <ListItem direction="row" label="Email Address" value="username@domain.com" />
                    <ListItem direction="row" label="Mobile Number" value="09123456789" />
                    <ListItem direction="row" label="City" value="Rivindel" />
                    <ListItem direction="row" label="Country" value="Middle Earth" />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default CustomerGeneralDetails;
