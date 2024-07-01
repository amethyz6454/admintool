import React from "react";
import Link from "next/link";
import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";

const MerchantDetailsSection: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Merchant" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" itemBordered itemJustify="space-between" gap={12}>
                    <ListItem direction="row" label="Random Number" value={<Link href="/admin/accounts/2226791912">2226791912</Link>} />
                    <ListItem direction="row" label="Somebody" value="Merchant Aileen DEVQ" />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default MerchantDetailsSection;
