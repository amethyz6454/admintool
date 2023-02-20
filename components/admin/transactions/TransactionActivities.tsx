import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import { TimeLine, TimeLineButtons, TimeLineItem, TimeLineMuted } from "@/components/ui/TimeLine";
import Composition from "@/components/ui/Composition";
import { GetTimelineEntries } from "@/api/hello";

const TransactionActivities: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const ActivityEntries = GetTimelineEntries(20);

    return (
        <>
            <Card.CardContainer>
                <Card.Header>
                    <Composition wrapper="h4" primary="Activities" />
                </Card.Header>
                <Card.Body>
                    <TimeLine>
                        {ActivityEntries.slice(0, 5).map((entry, k) => (
                            <TimeLineItem key={k}>
                                <TimeLineMuted>{entry.date}</TimeLineMuted>
                                <span>{entry.note}</span>
                                {entry.actions && (
                                    <TimeLineButtons>
                                        {entry.actions.map((action, x) => (
                                            <Button color="secondary" size="xs" onClick={action.onClick} key={x}>
                                                {action.text}
                                            </Button>
                                        ))}
                                    </TimeLineButtons>
                                )}
                            </TimeLineItem>
                        ))}
                    </TimeLine>
                    <Button length="block" appearance="link">
                        See All Activities
                    </Button>
                </Card.Body>
            </Card.CardContainer>
            <Modal title="Activities" onClose={() => setShowModal(false)} show={showModal}>
                <ModalBody>
                    <TimeLine>
                        {ActivityEntries.map((entry, k) => (
                            <TimeLineItem key={k}>
                                <TimeLineMuted>{entry.date}</TimeLineMuted>
                                <span>{entry.note}</span>
                                {entry.actions && (
                                    <TimeLineButtons>
                                        {entry.actions.map((action, x) => (
                                            <Button color="secondary" size="xs" onClick={action.onClick} key={x}>
                                                {action.text}
                                            </Button>
                                        ))}
                                    </TimeLineButtons>
                                )}
                            </TimeLineItem>
                        ))}
                    </TimeLine>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button>Text</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default TransactionActivities;
