import Authenticated from "@/components/layout/Authenticated";
import Card from "@/components/card/Card";
import type { NextPage } from "next";
import { FormButtons, FormGrid } from "@/components/form/Form";
import { InputField, SelectField, TextArea } from "@/components/form/InputField";
import Button from "@/components/buttons/Button";
import Composition from "@/components/ui/Composition";

const CreateTopUp: NextPage = (): JSX.Element => {
    return (
        <Authenticated title="Create Top-Up" layout="contain">
            <Card.CardContainer>
                <Card.Body>
                    <FormGrid>
                        <Composition wrapper="h4" primary="Merchant Information" />
                        <InputField
                            id="merchants"
                            name="merchants"
                            label="Select a Merchant"
                            placeholder="Enter merchant account."
                            list="merchant_list"
                        />
                        <datalist id="merchant_list">
                            <option>AC2212345678920 - Joe John</option>
                            <option>AC2212345678920 - Ann Rebec</option>
                        </datalist>
                        <SelectField id="currency" name="currency" label="Select a Currency">
                            <option>- Select Currency -</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>HKD</option>
                            <option>IDR</option>
                            <option>JPY</option>
                            <option>MYR</option>
                            <option>PHP</option>
                            <option>THB</option>
                            <option>USD</option>
                            <option>VND</option>
                        </SelectField>
                        <InputField id="amount" name="amount" label="Amount" placeholder="Enter Amount." />
                        <TextArea
                            id="note"
                            name="note"
                            label="Note"
                            placeholder="Enter note if any."
                            note="(optional)"
                        />

                        <FormButtons>
                            <Button>Create Top-Up</Button>
                        </FormButtons>
                    </FormGrid>
                </Card.Body>
            </Card.CardContainer>
        </Authenticated>
    );
};

export default CreateTopUp;
