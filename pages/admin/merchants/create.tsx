import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import type { NextPage } from "next";
import { FormButtons, FormGrid } from "@/components/form/Form";
import { InputField } from "@/components/form/InputField";
import Button from "@/components/buttons/Button";
import CountryPicker from "@/components/form/constants/CountryPicker";
import Composition from "@/components/ui/Composition";

const CreateMerchants: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Create Admin Account" layout="contain">
            <Card.CardContainer>
                <Card.Body>
                    <FormGrid>
                        <Composition wrapper="h4" primary="Account Information" />
                        <InputField
                            autoComplete="given-name"
                            grid={6}
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            placeholder="Enter merchant's first name."
                        />
                        <InputField
                            autoComplete="family-name"
                            grid={6}
                            id="last_name"
                            label="Last Name"
                            name="last_name"
                            placeholder="Enter merchant's last name."
                        />
                        <InputField
                            autoComplete="email"
                            endIcon="Email"
                            id="email"
                            label="Email Address"
                            name="email"
                            placeholder="Enter merchant's email address."
                            type="email"
                        />

                        <Composition wrapper="h4" primary="Password" />
                        <InputField
                            autoComplete="new-password"
                            id="new_password"
                            label="New Password"
                            name="new_password"
                            placeholder="Enter merchant's new password."
                            type="password"
                        />
                        <InputField
                            autoComplete="new-password"
                            id="confirm_new_password"
                            label="Confirm New Password"
                            name="confirm_new_password"
                            placeholder="Confirm merchant's new password."
                            type="password"
                        />

                        <Composition wrapper="h4" primary="Business information" />
                        <InputField
                            id="business_name"
                            label="Business Name"
                            name="business_name"
                            placeholder="Enter your business name."
                        />
                        <InputField
                            id="business_address"
                            label="Business Address"
                            name="business_address"
                            placeholder="Enter your business address."
                        />
                        <CountryPicker
                            id="business_country"
                            label="Business Country"
                            name="business_country"
                            placeholder="Enter your business country."
                        />
                        <InputField
                            id="business_website"
                            label="Business Website"
                            name="business_website"
                            placeholder="Enter your business website."
                        />

                        <FormButtons>
                            <Button>Create Merchant</Button>
                        </FormButtons>
                    </FormGrid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default CreateMerchants;
