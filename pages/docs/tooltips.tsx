import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import { Grid, GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";
import Tooltip from "@/components/ui/Tooltip";

const DocumentationTooltips: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Documentation Tooltips">
            <Card.CardContainer>
                <Card.Body>
                    <Grid>
                        <Composition wrapper="h4" primary="Tooltip TypePlacements" />

                        <GridCol grid="flex">
                            <p>Placement: Top (default)</p>
                            <Tooltip
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <GridCol grid="flex">
                            <p>Placement: Right</p>
                            <Tooltip
                                placement="right"
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <GridCol grid="flex">
                            <p>Placement: Bottom</p>
                            <Tooltip
                                placement="bottom"
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <GridCol grid="flex">
                            <p>Placement: Left</p>
                            <Tooltip
                                placement="left"
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <p>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                            pain was born and I will give you a complete account of the system, and expound the actual
                            teachings of the great explorer of the truth, the master-builder of human happiness. No one
                            rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who
                            do not know how to pursue pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial example, which of us ever undertakes
                            laborious physical exercise, except to obtain some advantage from it? But who has any right
                            to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                            or one who avoids a pain that produces no resultant pleasure?
                        </p>

                        <GridCol grid="flex">
                            <p>Placement: Top (default)</p>
                            <Tooltip
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <GridCol grid="flex">
                            <p>Placement: Right</p>
                            <Tooltip
                                placement="right"
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <GridCol grid="flex">
                            <p>Placement: Bottom</p>
                            <Tooltip
                                placement="bottom"
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>

                        <GridCol grid="flex">
                            <p>Placement: Left</p>
                            <Tooltip
                                placement="left"
                                title={
                                    <React.Fragment>
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure
                                        that has no annoying consequences, or one who avoids a pain that produces no
                                        resultant pleasure?
                                    </React.Fragment>
                                }
                            >
                                <Button>Button Solid</Button>
                            </Tooltip>
                        </GridCol>
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default DocumentationTooltips;
