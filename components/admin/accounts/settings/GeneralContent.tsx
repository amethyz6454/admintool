import { Grid, GridCol } from "@/components/ui/Grid";
import { OptionsField } from "@/components/form/InputField";
import { FormFieldset } from "@/components/form/Form";
import Composition from "@/components/ui/Composition";

const AccountSettingsGeneral: React.FC = (): JSX.Element => {
    return (
        <GridCol grid="flex">
            <Grid>
                <Composition wrapper="h4" primary="Account Status" />
                <FormFieldset title="Enable or disable account" content="buttonOptions" grid="flex">
                    <OptionsField
                        appearance="switch-word"
                        id="enable_account"
                        name="enable_account"
                        label="Enable Account"
                        direction="row-reverse"
                        justify="space-between"
                    />
                </FormFieldset>
            </Grid>
        </GridCol>
    );
};

export default AccountSettingsGeneral;
