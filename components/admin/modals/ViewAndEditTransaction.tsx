import Button from "@/components/buttons/Button";
import { FormFieldset } from "@/components/form/Form";
import { OptionsField } from "@/components/form/InputField";
import Composition from "@/components/ui/Composition";
import { ListContainer, ListItem } from "@/components/ui/List";
import Modal, { ModalBody, ModalFooter } from "@/components/ui/Modal";
import { TimeLine, TimeLineItem, TimeLineMuted } from "@/components/ui/TimeLine";
import React from "react";

const ViewAndEditTransactionModal: React.FC<{
    viewEditModal: boolean;
    setViewEditModal: (e: boolean) => void;
    activityEntries: Array<{ date: string; note: string }>;
}> = ({ viewEditModal, setViewEditModal, activityEntries }): JSX.Element => {
    return (
        <Modal title="View or Edit Transaction" onClose={() => setViewEditModal(false)} show={viewEditModal}>
            <ModalBody enableGrid gap={24}>
                <ListContainer direction="column" itemJustify="space-between" gap={8} itemBordered>
                    <ListItem direction="row" label="Merchant Name" value="John M. Doe" />
                    <ListItem direction="row" label="Account Number" value="AC2250376508" />
                    <ListItem direction="row" label="Transaction Number" value="2239129688" />
                </ListContainer>
                <FormFieldset title="Transaction" content="buttonOptions" innerGrid={1}>
                    <OptionsField
                        label="Charge Back"
                        appearance="switch-word"
                        direction="row-reverse"
                        justify="space-between"
                        id="chargeBack"
                        name="chargeBack"
                    />
                    <OptionsField
                        label="Retrieval"
                        appearance="switch-word"
                        direction="row-reverse"
                        justify="space-between"
                        id="retrieval"
                        name="retrieval"
                    />
                </FormFieldset>

                <Composition wrapper="h4" primary="Activities" />
                <TimeLine>
                    {activityEntries.map((entry, k) => (
                        <TimeLineItem key={k}>
                            <TimeLineMuted>{entry.date}</TimeLineMuted>
                            <span>{entry.note}</span>
                        </TimeLineItem>
                    ))}
                </TimeLine>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" appearance="outline">
                    Close
                </Button>
                <Button>Apply</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ViewAndEditTransactionModal;
