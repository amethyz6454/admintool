import React from "react";
import { OptionsField } from "@/components/form/InputField";
import { FormFieldset } from "@/components/form/Form";
import { Grid, GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";

const AccountSettingsPermissions: React.FC = (): JSX.Element => {
    return (
        <GridCol grid="flex">
            <Grid>
                <Composition wrapper="h4" primary="Account Permissions" />
                <FormFieldset title="Enable or disable account permission" content="buttonOptions" grid={4}>
                    <OptionsField
                        appearance="switch-word"
                        id="can_view_api_documentation"
                        label="Can View API Documentation"
                        name="can_view_api_documentation"
                        justify="space-between"
                        direction="row-reverse"
                    />
                </FormFieldset>
            </Grid>
        </GridCol>
    );
};

export default AccountSettingsPermissions;
