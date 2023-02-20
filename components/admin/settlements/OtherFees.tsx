import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import { ListContainer, ListItem } from "@/components/ui/List";
import { InputField, SelectField, TextArea } from "@/components/form/InputField";
import { FormButtons, FormGrid } from "@/components/form/Form";
import { IconRoundPlus } from "@/components/ui/Icons";

const SettlementsOtherFees: React.FC<any> = (): JSX.Element => {
    return (
        <Card.CardContainer>
            <Card.Body>
                <div className="max-w-4xl">
                    <ListContainer itemBordered>
                        <ListItem variant="data">
                            <FormGrid>
                                <SelectField
                                    grid={3}
                                    id="settlement_type"
                                    name="settlement_type"
                                    label="Settlement Type"
                                >
                                    <option>- Select Settlement Type -</option>
                                </SelectField>
                                <SelectField grid={3} id="currency" name="currency" label="Currency">
                                    <option>- Select Currency -</option>
                                </SelectField>
                                <InputField grid={3} id="fees" name="fees" label="Fees" />
                                <TextArea size="sm" id="comments" name="comments" label="Comments" />
                            </FormGrid>
                        </ListItem>
                        <ListItem>
                            <Button length="block" appearance="link" color="secondary">
                                <IconRoundPlus /> Add More Fees
                            </Button>
                        </ListItem>
                        <FormButtons>
                            <Button>Edit</Button>
                            <Button color="secondary">Back</Button>
                        </FormButtons>
                    </ListContainer>
                </div>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default SettlementsOtherFees;
