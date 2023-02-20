import React from "react";
import Card from "@/components/card/Card";
import { Grid, GridCol } from "@/components/ui/Grid";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import { IconBank, IconDeposit, IconWithdrawal } from "@/components/ui/Icons";
import { assertEqual } from "@/utils/GeneralUtil";

const TopUpsMethodTabs = {
    TAB_DEPOSIT: "deposit",
    TAB_WITHDRAWAL: "withdrawal",
};

const TopUpsDeposit = {
    LOCAL_BANK_INDONESIA: "Indonesia",
    LOCAL_BANK_MALAYSIA: "Malaysia",
    LOCAL_BANK_THAILAND: "Thailand",
    LOCAL_BANK_VIETNAM: "Vietnam",
};

const TopUpsWithdrawal = {
    LOCAL_BANK_INDONESIA: "Indonesia",
    LOCAL_BANK_MALAYSIA: "Malaysia",
    LOCAL_BANK_THAILAND: "Thailand",
    LOCAL_BANK_VIETNAM: "Vietnam",
};

const SolutionFilter: React.FC = (): JSX.Element => {
    const [selectedMethodTab, setSelectedMethodTab] = React.useState<string>(TopUpsMethodTabs.TAB_DEPOSIT);
    const [selectedDepositTab, setSelectedDepositTab] = React.useState<string>(TopUpsDeposit.LOCAL_BANK_INDONESIA);
    const [selectedWithdrawalTab, setSelectedWithdrawalTab] = React.useState<string>(
        TopUpsWithdrawal.LOCAL_BANK_INDONESIA
    );

    return (
        <Grid gap={8}>
            <GridCol grid="auto">
                <Navigation appearance="icon">
                    <NavigationItem
                        selected={assertEqual(selectedMethodTab, TopUpsMethodTabs.TAB_DEPOSIT)}
                        onClick={() => setSelectedMethodTab(TopUpsMethodTabs.TAB_DEPOSIT)}
                    >
                        <IconDeposit size={64} />
                        <span>Deposit</span>
                    </NavigationItem>
                    <NavigationItem
                        selected={assertEqual(selectedMethodTab, TopUpsMethodTabs.TAB_WITHDRAWAL)}
                        onClick={() => setSelectedMethodTab(TopUpsMethodTabs.TAB_WITHDRAWAL)}
                    >
                        <IconWithdrawal size={64} />
                        <span>Withdrawal</span>
                    </NavigationItem>
                </Navigation>
            </GridCol>
            <GridCol grid="flex">
                <Grid gap={8}>
                    <Card.CardContainer>
                        <Card.Body>
                            <Navigation
                                appearance="icon"
                                disabled={!assertEqual(selectedMethodTab, TopUpsMethodTabs.TAB_DEPOSIT)}
                            >
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_INDONESIA)}
                                    onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_INDONESIA)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Indonesia</span>
                                </NavigationItem>
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_MALAYSIA)}
                                    onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_MALAYSIA)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Malaysia</span>
                                </NavigationItem>
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_THAILAND)}
                                    onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_THAILAND)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Thailand</span>
                                </NavigationItem>
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_VIETNAM)}
                                    onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_VIETNAM)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Vietnam</span>
                                </NavigationItem>
                            </Navigation>
                        </Card.Body>
                    </Card.CardContainer>
                    <Card.CardContainer>
                        <Card.Body>
                            <Navigation
                                appearance="icon"
                                disabled={!assertEqual(selectedMethodTab, TopUpsMethodTabs.TAB_WITHDRAWAL)}
                            >
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedWithdrawalTab, TopUpsWithdrawal.LOCAL_BANK_INDONESIA)}
                                    onClick={() => setSelectedWithdrawalTab(TopUpsWithdrawal.LOCAL_BANK_INDONESIA)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Indonesia</span>
                                </NavigationItem>
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedWithdrawalTab, TopUpsWithdrawal.LOCAL_BANK_MALAYSIA)}
                                    onClick={() => setSelectedWithdrawalTab(TopUpsWithdrawal.LOCAL_BANK_MALAYSIA)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Malaysia</span>
                                </NavigationItem>
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedWithdrawalTab, TopUpsWithdrawal.LOCAL_BANK_THAILAND)}
                                    onClick={() => setSelectedWithdrawalTab(TopUpsWithdrawal.LOCAL_BANK_THAILAND)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Thailand</span>
                                </NavigationItem>
                                <NavigationItem
                                    appearance="transparent"
                                    selected={assertEqual(selectedWithdrawalTab, TopUpsWithdrawal.LOCAL_BANK_VIETNAM)}
                                    onClick={() => setSelectedWithdrawalTab(TopUpsWithdrawal.LOCAL_BANK_VIETNAM)}
                                >
                                    <IconBank size={64} />
                                    <span>Local Bank Vietnam</span>
                                </NavigationItem>
                            </Navigation>
                        </Card.Body>
                    </Card.CardContainer>
                </Grid>
            </GridCol>
        </Grid>
    );
};

export default SolutionFilter;
