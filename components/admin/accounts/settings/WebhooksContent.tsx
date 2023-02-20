import React from "react";
import Button from "@/components/buttons/Button";
import { InputField } from "@/components/form/InputField";
import { FormGrid, FormButtons } from "@/components/form/Form";
import Composition from "@/components/ui/Composition";

const AccountSettingsWebhooks: React.FC = (): JSX.Element => {
    return (
        <FormGrid>
            <Composition
                wrapper="h4"
                primary="Webhook URL"
                sub="Specify the Webhook url of the account, PayStage will send notifications to this url."
            />
            <InputField type="url" id="webhooks" name="webhooks" grid={4} label="Set your webhook url" />
            <FormButtons grid="auto" align="end">
                <Button>Update</Button>
            </FormButtons>
        </FormGrid>
    );
};

export default AccountSettingsWebhooks;
