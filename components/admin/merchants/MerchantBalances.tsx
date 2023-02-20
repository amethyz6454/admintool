import React from "react";
import Card from "@/components/card/Card";
import { ListContainer, ListItem } from "@/components/ui/List";
import { GetMerchantBalancesEntries } from "@/api/hello";
import Composition from "@/components/ui/Composition";

const MerchantBalances: React.FC<any> = (): JSX.Element => {
    const MerchantBalancesEntries = GetMerchantBalancesEntries(10);

    return (
        <Card.CardContainer>
            <Card.Body>
                <Composition wrapper="h4" primary="Balances" />
                <ListContainer itemBordered direction="column" itemJustify="space-between" gap={8} className="text-sm">
                    <ListItem direction="row">
                        <strong>Solution</strong>
                        <strong>Balance</strong>
                    </ListItem>
                    {MerchantBalancesEntries.map((balance, k) => (
                        <ListItem
                            key={k}
                            direction="row"
                            label={balance.solution}
                            value={
                                <span>
                                    <strong>{balance.currency}</strong> {balance.balance}
                                </span>
                            }
                        />
                    ))}
                </ListContainer>
            </Card.Body>
        </Card.CardContainer>
    );
};

export default MerchantBalances;
