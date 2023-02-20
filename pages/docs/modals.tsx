import React from "react";
import type { NextPage } from "next";
import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import { Grid, GridCol } from "@/components/ui/Grid";
import Modal, { ModalAlert, ModalBody, ModalFooter } from "@/components/ui/Modal";
import Composition from "@/components/ui/Composition";
import Button from "@/components/buttons/Button";
import { TypeVariantColors } from "@/utils/Interfaces/UI";

const DocumentationModal: NextPage = (): JSX.Element => {
    const [showModalA, setShowModalA] = React.useState<boolean>(false);
    const [showModalXS, setShowModalXS] = React.useState<boolean>(false);
    const [showModalSM, setShowModalSM] = React.useState<boolean>(false);
    const [showModalMD, setShowModalMD] = React.useState<boolean>(false);
    const [showModalLG, setShowModalLG] = React.useState<boolean>(false);
    const [showModalAlert, setShowModalAlert] = React.useState<boolean>(true);
    const ModalVariants = ["primary", "secondary", "danger", "success", "info", "warning", "default"];
    const [variantModal, setVariantModal] = React.useState<TypeVariantColors>(ModalVariants[0] as TypeVariantColors);
    const [showModalLoading, setShowModalLoading] = React.useState<boolean>(false);
    const [preloadModal, setPreloadModal] = React.useState<boolean>(false);
    const [showModalAlertLoading, setShowModalAlertLoading] = React.useState<boolean>(false);
    const [preloadModalAlert, setPreloadModalAlert] = React.useState<boolean>(false);

    return (
        <Authenticated title="Documentation Modals">
            <Card.CardContainer>
                <Card.Body>
                    <Grid>
                        <Composition wrapper="h4" primary="Modal | Markup" />
                        <GridCol>
                            <Button onClick={() => setShowModalA(true)}>Open Modal A</Button>
                        </GridCol>

                        <Composition wrapper="h4" primary="Modal | TypeSizes" sub="Default: MD" />
                        <GridCol grid="auto">
                            <Button onClick={() => setShowModalXS(true)}>Open Modal XS</Button>
                        </GridCol>
                        <GridCol grid="auto">
                            <Button onClick={() => setShowModalSM(true)}>Open Modal SM</Button>
                        </GridCol>
                        <GridCol grid="auto">
                            <Button onClick={() => setShowModalMD(true)}>Open Modal MD</Button>
                        </GridCol>
                        <GridCol grid="auto">
                            <Button onClick={() => setShowModalLG(true)}>Open Modal LG</Button>
                        </GridCol>

                        <Composition
                            wrapper="h4"
                            primary="Modal | Alert"
                            sub="Variants: primary, secondary, danger, success, info, warning, default"
                        />
                        {ModalVariants.map((variant, k) => (
                            <GridCol grid="auto" key={k}>
                                <Button
                                    onClick={() => {
                                        setShowModalAlert(true);
                                        setVariantModal(variant as TypeVariantColors);
                                    }}
                                    color={variant as TypeVariantColors}
                                >
                                    Open Modal Alert {variant.charAt(0).toUpperCase() + variant.slice(1)}
                                </Button>
                            </GridCol>
                        ))}

                        <Composition wrapper="h4" primary="Modal | Loading" />
                        <GridCol grid="auto">
                            <Button
                                onClick={() => {
                                    setShowModalLoading(true);
                                    setPreloadModal(true);
                                    setTimeout(() => setPreloadModal(false), 5000);
                                }}
                            >
                                Open Loading Modal
                            </Button>
                        </GridCol>
                        <GridCol grid="auto">
                            <Button
                                onClick={() => {
                                    setShowModalAlertLoading(true);
                                    setPreloadModalAlert(true);
                                    setTimeout(() => setPreloadModalAlert(false), 5000);
                                }}
                            >
                                Open Loading Modal Alert
                            </Button>
                        </GridCol>
                    </Grid>
                </Card.Body>
            </Card.CardContainer>

            <Modal title="Title Here" onClose={() => setShowModalA(false)} show={showModalA}>
                <ModalBody enableGrid>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and I will give you a complete account of the system, and expound the actual teachings
                        of the great explorer of the truth, the master-builder of human happiness. No one rejects,
                        dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know
                        how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                        is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which toil and pain can procure him some great
                        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                        except to obtain some advantage from it? But who has any right to find fault with a man who
                        chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                        produces no resultant pleasure?
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary">Secondary</Button>
                    <Button>Primary</Button>
                </ModalFooter>
            </Modal>
            <Modal title="Extra Small Modal" size="xs" onClose={() => setShowModalXS(false)} show={showModalXS}>
                <ModalBody>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary">Secondary</Button>
                    <Button>Primary</Button>
                </ModalFooter>
            </Modal>
            <Modal title="Small Modal" size="sm" onClose={() => setShowModalSM(false)} show={showModalSM}>
                <ModalBody>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary">Secondary</Button>
                    <Button>Primary</Button>
                </ModalFooter>
            </Modal>
            <Modal title="Medium Modal" onClose={() => setShowModalMD(false)} show={showModalMD}>
                <ModalBody>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary">Secondary</Button>
                    <Button>Primary</Button>
                </ModalFooter>
            </Modal>
            <Modal title="Large Modal" size="lg" onClose={() => setShowModalLG(false)} show={showModalLG}>
                <ModalBody>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you a complete account of the system, and expound the actual teachings of the
                    great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                    avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                    loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                    from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                    annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary">Secondary</Button>
                    <Button>Primary</Button>
                </ModalFooter>
            </Modal>
            <ModalAlert
                message="Nor again is there anyone who loves or pursues or desires to obtain pain of itself."
                onClose={() => setShowModalAlert(false)}
                show={showModalAlert}
                title="Title is required"
                variant={variantModal}
            />
            <Modal
                title="Large Modal"
                size="lg"
                process={preloadModal}
                onClose={() => setShowModalLoading(false)}
                show={showModalLoading}
            >
                <ModalBody>Preload on Confirm</ModalBody>
                <ModalFooter>
                    <Button color="secondary">Secondary</Button>
                    <Button>Primary</Button>
                </ModalFooter>
            </Modal>
            <ModalAlert
                message="Nor again is there anyone who loves or pursues or desires to obtain pain of itself."
                onClose={() => setShowModalAlertLoading(false)}
                show={showModalAlertLoading}
                process={preloadModalAlert}
                title="Title is required"
                variant="warning"
                loadingLabel="Fetching content from API, but this has a very very long sentence, please wait..."
                icon="Customers"
            />
        </Authenticated>
    );
};

export default DocumentationModal;
