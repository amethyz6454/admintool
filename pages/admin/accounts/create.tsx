import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import type { NextPage } from "next";
import { FormButtons, FormGrid } from "@/components/form/Form";
import { InputField } from "@/components/form/InputField";
import Button from "@/components/buttons/Button";
import Composition from "@/components/ui/Composition";

const CreateAccount: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Create Account" layout="contain">
            <Card.CardContainer>
                <Card.Body>
                    <FormGrid>
                        <Composition wrapper="h4" primary="Merchant Information" />
                        <InputField id="merchants" name="merchants" label="Select Merchant" list="merchant_list" />
                        <datalist id="merchant_list">
                            <option>Charlize Penn</option>
                            <option>Robson Stephens</option>
                            <option>Lachlan Montoya</option>
                            <option>Elyas Martinez</option>
                            <option>Juliet Wall</option>
                            <option>Eiliyah Harrison</option>
                            <option>Nisha Winter</option>
                            <option>Dillan Haley</option>
                            <option>Zi Correa</option>
                            <option>Gillian Marks</option>
                            <option>Brandan Berg</option>
                            <option>Varun Morgan</option>
                            <option>Shane Miller</option>
                            <option>Hetty Holland</option>
                            <option>Coral Travis</option>
                            <option>Samara Atkins</option>
                            <option>Musa Strickland</option>
                            <option>Margo Schmidt</option>
                            <option>Hebe Rosa</option>
                            <option>Jude Simmons</option>
                        </datalist>

                        <InputField id="account" name="account" label="Account Name" />

                        <InputField id="webhook" name="webhook" label="Webhook URL" type="url" />

                        <FormButtons>
                            <Button>Create Merchant</Button>
                        </FormButtons>
                    </FormGrid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default CreateAccount;
