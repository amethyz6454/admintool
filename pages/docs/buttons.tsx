import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Icon from "@/components/ui/Icons";
import { Grid, GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";
import { TypeVariantColors } from "@/utils/Interfaces/UI";

const DocumentationButtons: NextPage = (): JSX.Element => {
    const uppercaseFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
    const ButtonVariants = ["primary", "secondary", "danger", "success", "info", "warning", "default"];
    const ButtonLengths = [null, "wide", "block"];

    return (
        <Authenticated title="Documentation Buttons">
            <Card.CardContainer>
                <Card.Body>
                    <Grid>
                        <Composition wrapper="h4" primary="Button Appearances" color="primary" fontWeight="medium" />

                        <GridCol grid={3}>
                            <p>Solid (default)</p>
                            <Button>Button Solid</Button>
                        </GridCol>
                        <GridCol grid={3}>
                            <p>Outline</p>
                            <Button appearance="outline">Button Outline</Button>
                        </GridCol>
                        <GridCol grid={3}>
                            <p>Link</p>
                            <Button appearance="link">Button Link</Button>
                        </GridCol>

                        <Composition wrapper="h4" primary="Button Colors" color="primary" fontWeight="medium" />
                        {ButtonVariants.map((variant, k) => (
                            <GridCol key={k} grid={3}>
                                <Composition
                                    primary={`${uppercaseFirst(variant)}${
                                        variant === "primary" ? " (default | null)" : ""
                                    }`}
                                    gutterBottom
                                />
                                <Button color={variant as TypeVariantColors}>Button {uppercaseFirst(variant)}</Button>
                            </GridCol>
                        ))}

                        <Composition wrapper="h4" primary="Button Lengths" color="primary" fontWeight="medium" />

                        {ButtonLengths.map((l, k) => (
                            <GridCol grid={3}>
                                <Composition
                                    key={k}
                                    primary={l === null ? "Default (null)" : uppercaseFirst(l)}
                                    gutterBottom
                                />
                                {l === null ? <Button>Button</Button> : <Button length={l}>Button</Button>}
                            </GridCol>
                        ))}

                        <Composition wrapper="h4" primary="Button Size" color="primary" fontWeight="medium" />

                        <GridCol grid="flex">
                            <p>Extra Small</p>
                            <Button size="xs">Button Extra Small</Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>Small</p>
                            <Button size="sm">Button Small</Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>Default (null)</p>
                            <Button>Button Default</Button>
                        </GridCol>

                        <Composition wrapper="h4" primary="Button Shape" color="primary" fontWeight="medium" />

                        <GridCol grid="flex">
                            <p>Circle</p>
                            <Button shape="circle">1</Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>Square</p>
                            <Button shape="square">1</Button>
                        </GridCol>

                        <Composition wrapper="h4" primary="Button Icon Placement" color="primary" fontWeight="medium" />

                        <GridCol grid="flex">
                            <p>Front Placement</p>
                            <Button startIcon="User" size="xs">
                                Button Icon
                            </Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>Front Placement</p>
                            <Button startIcon="User" size="sm">
                                Button Icon
                            </Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>Front Placement</p>
                            <Button startIcon="User">Button Icon</Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>End Placement</p>
                            <Button endIcon="User">Button Icon</Button>
                        </GridCol>
                        <GridCol grid="flex">
                            <p>Circle Icon</p>
                            <Button shape="circle">
                                <Icon name="Close" />
                            </Button>
                        </GridCol>

                        <Composition wrapper="h4" primary="Disabled" color="primary" fontWeight="medium" gutterBottom />

                        <GridCol grid="flex">
                            <Button disabled>Disabled</Button>
                        </GridCol>

                        <Composition wrapper="h4" primary="Preloading (process)" color="primary" fontWeight="medium" />

                        <GridCol grid="flex">
                            <Button process>Preloading</Button>
                        </GridCol>
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default DocumentationButtons;
