import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import { FormButtons } from "@/components/form/Form";
import { InputField, TextArea } from "@/components/form/InputField";
import Composition from "@/components/ui/Composition";

const SettlementBankAccount: React.FC<any> = (): JSX.Element => {
    const [toggleForm, setToggleForm] = React.useState<boolean>(true);

    return (
        <Card.CardContainer as="form">
            <Card.Header>
                <Composition wrapper="h4" primary="Settlement Bank Account" />
            </Card.Header>
            <Card.Body enableGrid className={toggleForm && "hidden"}>
                <InputField id="bank_name" grid={6} label="Bank Name" name="bank_name" required />
                <InputField id="beneficiary_name" grid={6} label="Beneficiary Name" name="beneficiary_name" />
                <InputField id="account_number" grid={6} label="Account Number" name="account_number" />
                <InputField id="beneficiary_address" grid={6} label="Beneficiary Address" name="beneficiary_address" />
                <InputField id="swift" grid={6} label="SWIFT" name="swift" />
                <InputField id="preferred_currency" grid={6} label="Preferred Currency" name="preferred_currency" />
                <InputField id="bank_address" label="Bank Address" name="bank_address" />
                <TextArea id="remarks" label="Remarks" name="remarks" />
                <FormButtons>
                    <Button>Save</Button>
                    <Button appearance="outline">Delete</Button>
                </FormButtons>
            </Card.Body>
            <Card.Footer>
                <Button length="block" appearance="link" onClick={() => setToggleForm(!toggleForm)}>
                    {toggleForm ? "Show More" : "Show Less"}
                </Button>
            </Card.Footer>
        </Card.CardContainer>
    );
};

export default SettlementBankAccount;
