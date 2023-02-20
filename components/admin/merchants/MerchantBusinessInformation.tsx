import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import Composition from "@/components/ui/Composition";
import { FormButtons } from "@/components/form/Form";
import { InputField, TextArea } from "@/components/form/InputField";

const MerchantBusinessInformation: React.FC<any> = (): JSX.Element => {
    return (
        <Card.CardContainer as="form">
            <Card.Body enableGrid>
                <Composition wrapper="h4" primary="Business Information" />
                <InputField id="bi_business_name" label="Business Name" name="bi_business_name" />
                <InputField id="bi_business_address" label="Business Address" name="bi_business_address" />
                <InputField id="bi_country" label="Country" name="bi_country" />
                <InputField id="bi_website" label="Website" name="bi_website" />
                <InputField id="bi_tags" label="Tags" name="bi_tags" />
                <TextArea id="bi_remarks" label="Remarks" name="bi_remarks" />
                <FormButtons>
                    <Button>Save</Button>
                </FormButtons>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default MerchantBusinessInformation;
