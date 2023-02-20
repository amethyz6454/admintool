import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import type { NextPage } from "next";
import { FormButtons, FormGrid } from "@/components/form/Form";
import { InputField } from "@/components/form/InputField";
import Button from "@/components/buttons/Button";
import Composition from "@/components/ui/Composition";

const CreateAdmin: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Create Admin Account">
            <Card.CardContainer>
                <Card.Body>
                    <div className="max-w-xl">
                        <FormGrid>
                            <Composition wrapper="h4" primary="Account Information" />
                            <InputField
                                id="first_name"
                                name="first_name"
                                grid={6}
                                autoComplete="given-name"
                                label="First Name"
                                placeholder="Enter merchant's first name."
                            />
                            <InputField
                                id="last_name"
                                name="last_name"
                                grid={6}
                                autoComplete="family-name"
                                label="Last Name"
                                placeholder="Enter merchant's last name."
                            />
                            <InputField
                                id="email"
                                name="email"
                                label="Email Address"
                                autoComplete="email"
                                type="email"
                                placeholder="Enter merchant's email address."
                            />

                            <Composition wrapper="h4" primary="Password" />
                            <InputField
                                id="new_password"
                                name="new_password"
                                label="New Password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Enter merchant's new password."
                            />
                            <InputField
                                id="confirm_new_password"
                                name="confirm_new_password"
                                label="Confirm New Password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Confirm merchant's new password."
                            />

                            <FormButtons>
                                <Button>Create Merchant</Button>
                            </FormButtons>
                        </FormGrid>
                    </div>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default CreateAdmin;
