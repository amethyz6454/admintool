import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import { Grid, GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";
import { BlobLoader, PillLoader } from "@/components/ui/Loader";

const DocumentationPreloader: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Documentation Preloader">
            <Card.CardContainer>
                <Card.Body>
                    <Grid>
                        <Composition wrapper="h4" primary="Blob Loader" />

                        <GridCol>
                            <BlobLoader />
                        </GridCol>

                        <Composition
                            wrapper="h4"
                            primary="Blob Loader | TypeSizes"
                            sub="TypeSizes: 12 (default), 16, 18, 24, 32"
                        />

                        <GridCol grid="flex">
                            <BlobLoader />
                        </GridCol>

                        <GridCol grid="flex">
                            <BlobLoader size={16} />
                        </GridCol>

                        <GridCol grid="flex">
                            <BlobLoader size={18} />
                        </GridCol>

                        <GridCol grid="flex">
                            <BlobLoader size={24} />
                        </GridCol>

                        <GridCol grid="flex">
                            <BlobLoader size={32} />
                        </GridCol>

                        <Composition wrapper="h4" primary="Pill Loader" />

                        <GridCol>
                            <PillLoader />
                        </GridCol>
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default DocumentationPreloader;
