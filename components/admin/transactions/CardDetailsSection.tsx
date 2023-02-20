import React from "react";
import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";

const CardDetailsSection: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Card Details" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" itemBordered itemJustify="space-between" gap={12}>
                    <ListItem direction="row" label="Account Name" value="Test QA" />
                    <ListItem direction="row" label="Card Number" value="************1118" />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default CardDetailsSection;
