import React from "react";
import Link from "next/link";
import { TableCard } from "@/components/table/Table";
import { ACCOUNT_TYPE_STATE } from "@/utils/Constants";
import { ListContainer, ListItem } from "@/components/ui/List";

const BalancesTableRowCard: React.FC<any> = ({ subAccount }): JSX.Element => {
    const [showSubAccounts, setShowSubAccounts] = React.useState<boolean>(false);

    return (
        <TableCard
            collapsible
            onClick={() => subAccount.subAccounts && setShowSubAccounts(!showSubAccounts)}
            disableButton={subAccount.subAccounts.length === 0}
            showContent={showSubAccounts}
            expandedContent={subAccount.subAccounts?.map((sub, v) => (
                <TableCard key={v}>
                    <ListContainer>
                        <ListItem label="Random Number" value={<Link href={"accounts/" + sub.merchantNumber}>{sub.merchantNumber}</Link>} />
                        <ListItem label="Somebody" value={sub.merchantName} />
                        <ListItem label="Type" value={sub.type} valueSeverity={ACCOUNT_TYPE_STATE[sub.type]} />
                    </ListContainer>
                </TableCard>
            ))}
        >
            <ListContainer>
                <ListItem label="Random Number" value={<Link href={"accounts/" + subAccount.merchantNumber}>{subAccount.merchantNumber}</Link>} />
                <ListItem label="Somebody" value={subAccount.merchantName} />
                <ListItem label="Type" value={subAccount.type} valueSeverity={ACCOUNT_TYPE_STATE[subAccount.type]} />
            </ListContainer>
        </TableCard>
    );
};

export default BalancesTableRowCard;
