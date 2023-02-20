import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import { TimeLine, TimeLineItem, TimeLineMuted } from "@/components/ui/TimeLine";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import { GetTimelineEntries } from "@/api/hello";
import Composition from "@/components/ui/Composition";

const AccountActivities: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const ActivityEntries = GetTimelineEntries(20);
    const GetFiveActivityEntries = ActivityEntries.slice(0, 5);

    return (
        <React.Fragment>
            <Card.CardContainer>
                <Card.Header>
                    <Composition wrapper="h4" primary="Activities" />
                </Card.Header>
                <Card.Body>
                    <TimeLine>
                        {GetFiveActivityEntries.map((entry, k) => (
                            <TimeLineItem key={k}>
                                <TimeLineMuted>{entry.date}</TimeLineMuted>
                                <span>{entry.note}</span>
                            </TimeLineItem>
                        ))}
                    </TimeLine>
                    <Button length="block" appearance="link" onClick={() => setShowModal(!showModal)}>
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
        </React.Fragment>
    );
};

export default AccountActivities;
