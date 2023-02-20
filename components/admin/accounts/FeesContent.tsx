import React from "react";
import Card from "@/components/card/Card";
import Button from "@/components/buttons/Button";
import Icon from "@/components/ui/Icons";
import Composition from "@/components/ui/Composition";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@/components/table/Table";
import { InputField, SelectField } from "@/components/form/InputField";
import { FormButtons } from "@/components/form/Form";
import { assertEqual } from "@/utils/GeneralUtil";
import { SOLUTION_METHODS } from "@/utils/Constants";
import { Grid, GridCol } from "@/components/ui/Grid";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";

const AccountFees: React.FC = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = React.useState<string>(Object.keys(SOLUTION_METHODS)[0]);

    return (
        <Card.CardContainer variant="tabs">
            <Card.Header>
                {Object.keys(SOLUTION_METHODS).map((solution, k) => (
                    <Card.TabItem
                        primary={solution}
                        key={k}
                        selected={assertEqual(selectedTab, solution)}
                        onClick={() => setSelectedTab(solution)}
                    />
                ))}
            </Card.Header>
            <Card.Body variant="table">
                <Grid>
                    {assertEqual(selectedTab, "Online Banking") && (
                        <GridCol grid="auto">
                            <Navigation appearance="line" orientation="vertical" sticky>
                                <NavigationItem selected={true}>BPI</NavigationItem>
                                <NavigationItem>BDO</NavigationItem>
                                <NavigationItem>RCBC</NavigationItem>
                                <NavigationItem>Security Bank</NavigationItem>
                                <NavigationItem>Metrobank</NavigationItem>
                                <NavigationItem>Eastwest</NavigationItem>
                                <NavigationItem>PNP</NavigationItem>
                                <NavigationItem>AUB</NavigationItem>
                            </Navigation>
                        </GridCol>
                    )}
                    <GridCol grid="flex">
                        <Grid>
                            <Composition wrapper="h4" primary="Deposit" />
                            <TableContainer>
                                <TableHead sticky>
                                    <TableRow>
                                        <TableCell as="th">&nbsp;</TableCell>
                                        <TableCell as="th">Fee Bearer</TableCell>
                                        <TableCell as="th">Currency</TableCell>
                                        <TableCell as="th">Markup Type</TableCell>
                                        <TableCell as="th">Fee</TableCell>
                                        <TableCell as="th">Min Value</TableCell>
                                        <TableCell as="th">Max Value</TableCell>
                                        <TableCell as="th">Fixed Fee</TableCell>
                                        <TableCell as="th">&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell as="th">Deposit</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Fee Bearer"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee_bearer"
                                                name="deposit_fee_bearer"
                                            >
                                                <option>Merchant</option>
                                                <option>Client</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" shape="circle">
                                                <Icon name="Plus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell as="th">Deposit</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Fee Bearer"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee_bearer"
                                                name="deposit_fee_bearer"
                                            >
                                                <option>Merchant</option>
                                                <option>Client</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" color="danger" shape="circle">
                                                <Icon name="Minus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </TableContainer>
                            <FormButtons>
                                <Button>Save</Button>
                                <Button appearance="outline" color="secondary">
                                    Reset
                                </Button>
                            </FormButtons>
                            <Composition wrapper="h4" primary="Settlements" />
                            <TableContainer>
                                <TableHead sticky>
                                    <TableRow>
                                        <TableCell as="th">&nbsp;</TableCell>
                                        <TableCell as="th">Currency</TableCell>
                                        <TableCell as="th">Markup Type</TableCell>
                                        <TableCell as="th">Fee</TableCell>
                                        <TableCell as="th">Min Value</TableCell>
                                        <TableCell as="th">Max Value</TableCell>
                                        <TableCell as="th">Fixed Fee</TableCell>
                                        <TableCell as="th">&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell as="th">Charge Back_fee</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" shape="circle">
                                                <Icon name="Plus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell as="th">Charge Back_fee</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" color="danger" shape="circle">
                                                <Icon name="Minus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell as="th">Refund Fee</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" shape="circle" disabled>
                                                <Icon name="Plus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell as="th">Refund Fee</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" color="danger" shape="circle">
                                                <Icon name="Minus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell as="th">Refund Fee</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" color="danger" shape="circle">
                                                <Icon name="Minus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell as="th">Refund Fee</TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Currency"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="currency_fee_bearer"
                                                name="currency_fee_bearer"
                                            >
                                                <option>USD</option>
                                                <option>EUR</option>
                                                <option>GBP</option>
                                                <option>JPY</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <SelectField
                                                label="Deposit Markup Type"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="markup_type_fee_bearer"
                                                name="markup_type_fee_bearer"
                                            >
                                                <option>Fixed</option>
                                                <option>Percentage</option>
                                            </SelectField>
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fee"
                                                name="deposit_fee"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Min Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_min_value"
                                                name="deposit_min_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Max Value"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_max_value"
                                                name="deposit_max_value"
                                            />
                                        </TableCell>
                                        <TableCell enableGrid>
                                            <InputField
                                                type="number"
                                                label="Deposit Fixed Fee"
                                                grid="auto"
                                                noLabel
                                                size="sm"
                                                id="deposit_fixed_fee"
                                                name="deposit_fixed_fee"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Button size="sm" color="danger" shape="circle">
                                                <Icon name="Minus" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </TableContainer>
                            <FormButtons>
                                <Button>Save</Button>
                                <Button appearance="outline" color="secondary">
                                    Reset
                                </Button>
                            </FormButtons>
                        </Grid>
                    </GridCol>
                </Grid>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default AccountFees;
