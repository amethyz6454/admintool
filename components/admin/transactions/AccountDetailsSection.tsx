import React from "react";
import Link from "next/link";
import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";

const AccountDetailsSection: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Account" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" itemBordered itemJustify="space-between" gap={12}>
                    <ListItem
                        direction="row"
                        label="Account Number"
                        value={
                            <Link href="/admin/accounts/AC2257150713">
                                <a>AC2257150713</a>
                            </Link>
                        }
                    />
                    <ListItem direction="row" label="Account Name" value="Merchant Aileen DEVQ" />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default AccountDetailsSection;
