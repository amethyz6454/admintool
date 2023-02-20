import React from "react";
import { IconInfo, IconRoundPlus } from "@/components/ui/Icons";
import { Grid, GridCol } from "@/components/ui/Grid";
import Card from "@/components/card/Card";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";

const SettlementDetailsSection: React.FC = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Header>
                <Composition wrapper="h4" primary="Settlement Details" />
            </Card.Header>
            <Card.Body>
                <ListContainer direction="column" itemBordered itemLabelValueFill itemJustify="space-between" gap={12}>
                    <ListItem
                        direction="row"
                        label="Debit Amount"
                        value={
                            <Grid>
                                <GridCol grid="flex" className="text-right">
                                    JPY
                                </GridCol>
                                <GridCol grid={4}>1,000.00</GridCol>
                                <GridCol grid="auto">
                                    <IconInfo className="text-blue" />
                                </GridCol>
                            </Grid>
                        }
                    />
                    <ListItem
                        direction="row"
                        label="Fee"
                        value={
                            <Grid>
                                <GridCol grid="flex" className="text-right">
                                    JPY
                                </GridCol>
                                <GridCol grid={4}>2,900.00</GridCol>
                                <GridCol grid="auto">
                                    <IconRoundPlus className="text-green" />
                                </GridCol>
                            </Grid>
                        }
                    />
                    <ListItem
                        direction="row"
                        label="Total"
                        highlight
                        value={
                            <Grid>
                                <GridCol grid="flex" className="text-right">
                                    JPY
                                </GridCol>
                                <GridCol grid={4}>5,050.00</GridCol>
                                <GridCol grid="auto">
                                    <IconInfo />
                                </GridCol>
                            </Grid>
                        }
                    />
                    <ListItem
                        direction="row"
                        label="Exchange Rate"
                        highlight
                        value={
                            <Grid>
                                <GridCol grid="flex" className="text-right">
                                    JPY
                                </GridCol>
                                <GridCol grid={4}>1.00 ~ 0</GridCol>
                                <GridCol grid="auto">
                                    <IconInfo className="text-blue" />
                                </GridCol>
                            </Grid>
                        }
                    />
                    <ListItem
                        direction="row"
                        label="Credit Amount"
                        highlight
                        value={
                            <Grid>
                                <GridCol grid="flex" className="text-right">
                                    JPY
                                </GridCol>
                                <GridCol grid={4}>5,000.00</GridCol>
                                <GridCol grid="auto">
                                    <IconInfo className="text-blue" />
                                </GridCol>
                            </Grid>
                        }
                    />
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default SettlementDetailsSection;
