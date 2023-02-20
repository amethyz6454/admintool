import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import { FormButtons } from "@/components/form/Form";
import { InputField } from "@/components/form/InputField";
import Composition from "@/components/ui/Composition";

const MerchantInformation: React.FC<any> = (): JSX.Element => {
    return (
        <Card.CardContainer as="form">
            <Card.Body enableGrid>
                <Composition wrapper="h4" primary="Merchant information" />
                <InputField
                    defaultValue="2453657892"
                    grid={6}
                    id="user_number"
                    label="User Number"
                    name="user_number"
                    readOnly
                />
                <InputField defaultValue="John Doe" grid={6} id="name" label="Name" name="name" readOnly />
                <InputField defaultValue="username@domain.com" id="email" label="Email Address" name="email" readOnly />
                <InputField label="Affiliate Code" id="code" name="code" />
                <FormButtons>
                    <Button>Save</Button>
                </FormButtons>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default MerchantInformation;
