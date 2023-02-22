import React from "react";
import type { NextPage } from "next";
import Card from "@/components/card/Card";
import Authenticated from "@/components/layout/Authenticated";
import { FormFieldset } from "@/components/form/Form";
import { InputField, OptionsField, SelectField } from "@/components/form/InputField";
import { Grid } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";
import { TypeGridLengths } from "@/utils/Interfaces/UI";

const DocumentationInputFields: NextPage = (): JSX.Element => {
    const [toggleType, setToggleType] = React.useState<boolean>(false);
    const fieldCount = [1, 2, 3, 4, 5];
    const builtInGrid = [
        { label: "Text input (default null)", value: null },
        { label: "Grid 4", value: 4 },
        { label: "Grid 2", value: 2 },
        { label: "Grid flex", value: "flex" },
        { label: "Grid auto", value: "flex" },
    ];

    return (
        <Authenticated title="Documentation Input Fields">
            <Card.CardContainer>
                <Card.Body>
                    <Grid>
                        <Composition wrapper="h4" primary="Built-In Grid Column" />
                        {builtInGrid.map((grid, k) => (
                            <InputField
                                key={k}
                                id={"text_input-" + k}
                                name="text_input"
                                label={grid.label}
                                grid={grid.value as TypeGridLengths}
                            />
                        ))}
                        <Composition wrapper="h4" primary="Field State" />
                        <InputField
                            id="text_input_"
                            name="text_input"
                            label="Start Icon Placement"
                            grid="flex"
                            startIcon="Email"
                            error="Field is required."
                        />
                        <Composition wrapper="h4" primary="Icon TypePlacements" />
                        <InputField
                            id="text_input6"
                            name="text_input"
                            label="Start Icon Placement"
                            grid="flex"
                            startIcon="Email"
                        />
                        <InputField
                            id="text_input7"
                            name="text_input"
                            label="End Icon Placement"
                            grid="flex"
                            endIcon="Email"
                        />
                        <InputField
                            id="text_input8"
                            name="text_input"
                            label="Start Icon Placement (Clickable)"
                            grid="flex"
                            startIcon={toggleType ? "View" : "ViewHide"}
                            startIconClick={() => setToggleType(!toggleType)}
                        />
                        <InputField
                            id="text_input9"
                            name="text_input"
                            label="End Icon Placement (Clickable)"
                            grid="flex"
                            endIcon={toggleType ? "View" : "ViewHide"}
                            endIconClick={() => setToggleType(!toggleType)}
                        />
                        <Composition wrapper="h4" primary="Select Fields" />
                        <SelectField id="select_field1" name="select_field">
                            <option>- Select Options -</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </SelectField>

                        <Composition wrapper="h4" primary="Option Fields" />

                        <OptionsField id="option_field_checkbox_1" name="option_field" label="Checkbox (default)" />
                        <OptionsField id="option_field_radio_2" name="option_field" label="Radio" type="radio" />

                        <FormFieldset title="In Fieldset (Checkbox)" content="options" grid={6}>
                            {fieldCount.map((c, k) => (
                                <OptionsField
                                    key={k}
                                    id={"option_field_a_" + c}
                                    name="option_field_a"
                                    label={"Checkbox " + c}
                                />
                            ))}
                        </FormFieldset>
                        <FormFieldset title="In Fieldset (Radio Button)" content="options" grid={6}>
                            {fieldCount.map((r, k) => (
                                <OptionsField
                                    key={k}
                                    id={"option_field_b_" + r}
                                    name="option_field_b"
                                    label={"Radio " + r}
                                    type="radio"
                                />
                            ))}
                        </FormFieldset>
                        <FormFieldset title="In Fieldset (Button Options)" content="buttonOptions">
                            {fieldCount.map((c, k) => (
                                <OptionsField
                                    key={k}
                                    id={"option_field_c_" + c}
                                    name="option_field_c"
                                    label={"Option " + c}
                                />
                            ))}
                        </FormFieldset>
                        <FormFieldset
                            title="In Fieldset (Button Options | Inner Grid)"
                            content="buttonOptions"
                            innerGrid={3}
                        >
                            {fieldCount.map((r, k) => (
                                <OptionsField
                                    key={k}
                                    id={"option_field_d_" + r}
                                    name="option_field_d"
                                    label={"Option " + r}
                                    type="radio"
                                />
                            ))}
                        </FormFieldset>

                        <Composition wrapper="h4" primary="Option Fields (Switch)" />
                        <OptionsField id="switch_field_1" name="switch_field" label="Switch 1" appearance="switch" />
                        <OptionsField
                            appearance="switch-word"
                            id="switch_field_2"
                            label="Worded Switch 1"
                            name="switch_field"
                        />
                        <OptionsField
                            appearance="switch-word"
                            id="switch_field_3"
                            label="Custom Worded Switch 1"
                            name="switch_field"
                            textFalse="This is OFF"
                            textTrue="This is ON"
                        />
                    </Grid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default DocumentationInputFields;
