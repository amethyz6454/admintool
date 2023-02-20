import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";
import React from "react";

const CustomerDetailsSection: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Customer" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" itemBordered itemJustify="space-between" gap={12}>
                    <ListItem direction="row" label="Name" value="Maria Helen" />
                    <ListItem
                        direction="row"
                        label="Email Address"
                        value={
                            <>
                                <span className="text-green">(Verified)</span> | aijpayqatest@gmail.com
                            </>
                        }
                    />
                    <ListItem
                        direction="row"
                        label="Phone Number"
                        value={
                            <>
                                <span className="text-orange">(Unverified)</span> | 09178638446
                            </>
                        }
                    />
                    <ListItem
                        direction="row"
                        label="Address"
                        value="12 Moria St. Rivindel Galadriel Alley, Middle Earth"
                    />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default CustomerDetailsSection;
