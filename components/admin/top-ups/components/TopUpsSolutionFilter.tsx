import React from "react";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import { assertEqual } from "@/utils/GeneralUtil";

const TopUpsDeposit = {
    LOCAL_BANK_INDONESIA: "Indonesia",
    LOCAL_BANK_MALAYSIA: "Malaysia",
    LOCAL_BANK_THAILAND: "Thailand",
    LOCAL_BANK_VIETNAM: "Vietnam",
};

const TopUpsSolutionFilter: React.FC = (): JSX.Element => {
    const [selectedDepositTab, setSelectedDepositTab] = React.useState<string>(TopUpsDeposit.LOCAL_BANK_INDONESIA);

    return (
        <Navigation appearance="icon" iconSize={144}>
            <NavigationItem
                badge
                badgeImage={"/flags/" + TopUpsDeposit.LOCAL_BANK_INDONESIA + ".png"}
                icon="Bank"
                onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_INDONESIA)}
                selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_INDONESIA)}
            >
                Local Bank {TopUpsDeposit.LOCAL_BANK_INDONESIA}
            </NavigationItem>
            <NavigationItem
                badge
                badgeImage={"/flags/" + TopUpsDeposit.LOCAL_BANK_MALAYSIA + ".png"}
                icon="Bank"
                onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_MALAYSIA)}
                selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_MALAYSIA)}
            >
                Local Bank {TopUpsDeposit.LOCAL_BANK_MALAYSIA}
            </NavigationItem>
            <NavigationItem
                badge
                badgeImage={"/flags/" + TopUpsDeposit.LOCAL_BANK_THAILAND + ".png"}
                icon="Bank"
                onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_THAILAND)}
                selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_THAILAND)}
            >
                Local Bank {TopUpsDeposit.LOCAL_BANK_THAILAND}
            </NavigationItem>
            <NavigationItem
                badge
                badgeImage={"/flags/" + TopUpsDeposit.LOCAL_BANK_VIETNAM + ".png"}
                icon="Bank"
                onClick={() => setSelectedDepositTab(TopUpsDeposit.LOCAL_BANK_VIETNAM)}
                selected={assertEqual(selectedDepositTab, TopUpsDeposit.LOCAL_BANK_VIETNAM)}
            >
                Local Bank {TopUpsDeposit.LOCAL_BANK_VIETNAM}
            </NavigationItem>
        </Navigation>
    );
};

export default TopUpsSolutionFilter;
