import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import Icon, { TypeIconNames } from "@/components/ui/Icons";
import { Grid, GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";

const MonoIconsList = [
    "Check",
    "ChevronDoubleLeft",
    "ChevronDoubleRight",
    "ChevronDown",
    "ChevronLeft",
    "ChevronRight",
    "ChevronUp",
    "Close",
    "Copy",
    "Email",
    "Info",
    "Lock",
    "Menu",
    "Minus",
    "Plus",
    "Refresh",
    "RoundCheck",
    "RoundCross",
    "RoundMinus",
    "RoundPlus",
    "View",
    "ViewHide",
    "Warning",
];

const IconsList = [
    "Accounts",
    "Admin",
    "ChargeBack",
    "Credits",
    "Customers",
    "Dashboard",
    "Document",
    "ExchangeRate",
    "Filter",
    "History",
    "Logout",
    "Merchant",
    "Refund",
    "Search",
    "Settings",
    "Settlements",
    "TopUp",
    "Transactions",
    "User",
];

const BigIconsList = ["Bank", "Deposit", "SafeBox", "Withdrawal"];

const DocumentationIcons: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Documentation Icons">
            <Card.CardContainer>
                <Card.Header>
                    <Composition wrapper="h4" primary="One Tone Icons" />
                </Card.Header>
                <Card.Body>
                    <Grid gap={48}>
                        {MonoIconsList.map((icon, k) => (
                            <GridCol grid={4} key={k}>
                                <Grid>
                                    <GridCol>
                                        <strong>{icon}</strong>
                                        <hr />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={16} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={32} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={48} />
                                    </GridCol>
                                </Grid>
                            </GridCol>
                        ))}
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
            <Card.CardContainer>
                <Card.Header>
                    <Composition wrapper="h4" primary="Two Tone Icons" />
                </Card.Header>
                <Card.Body>
                    <Grid gap={48}>
                        {IconsList.map((icon, k) => (
                            <GridCol grid={4} key={k}>
                                <Grid>
                                    <GridCol>
                                        <strong>{icon}</strong>
                                        <hr />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={16} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={32} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={48} />
                                    </GridCol>
                                </Grid>
                            </GridCol>
                        ))}
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
            <Card.CardContainer>
                <Card.Header>
                    <Composition wrapper="h4" primary="Three Tone Icons (Large)" />
                </Card.Header>
                <Card.Body>
                    <Grid gap={48}>
                        {BigIconsList.map((icon, k) => (
                            <GridCol grid={4} key={k}>
                                <Grid>
                                    <GridCol>
                                        <strong>{icon}</strong>
                                        <hr />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={64} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={96} />
                                    </GridCol>
                                    <GridCol grid="auto">
                                        <Icon name={icon as TypeIconNames} size={128} />
                                    </GridCol>
                                </Grid>
                            </GridCol>
                        ))}
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default DocumentationIcons;
