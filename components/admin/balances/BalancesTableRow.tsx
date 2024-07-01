import React from "react";
import Link from "next/link";
import { TableCard, TableCell, TableRow, TableRowExpandable } from "@/components/table/Table";
import { IconRoundMinus, IconRoundPlus } from "@/components/ui/Icons";
import classNames from "classnames";
import BalancesTableRowCard from "./BalancesTableRowCard";
import { ACCOUNT_TYPE_STATE } from "@/utils/Constants";
import { ListContainer, ListItem } from "@/components/ui/List";
import StyleTable from "@/sass/components/table.module.scss";

const BalancesTableRow: React.FC<any> = ({ account }): JSX.Element => {
    const [showExtension, setShowExtension] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell
                    className={classNames(StyleTable.action, {
                        disabled: account.balances.length === 0 && account.subAccounts.length === 0,
                    })}
                    onClick={() => (account.balances || account.subAccounts) && setShowExtension(!showExtension)}
                >
                    {!showExtension ? <IconRoundPlus className={StyleTable.icon} /> : <IconRoundMinus className={StyleTable.icon} />}
                </TableCell>
                <TableCell highlight>
                    <Link href={"/admin/accounts/" + account.accountNumber}>{account.accountNumber}</Link>
                </TableCell>
                <TableCell>{account.merchantName}</TableCell>
                <TableCell severity={ACCOUNT_TYPE_STATE[account.type]} className={classNames("font-bold")}>
                    {account.type}
                </TableCell>
            </TableRow>
            <TableRowExpandable show={showExtension}>
                {(account.balances || account.subAccounts) && account.balances && (
                    <React.Fragment>
                        {account.balances.length !== 0 && (
                            <TableCard>
                                <ListContainer>
                                    <ListItem className="text-right">
                                        <strong>Currency</strong>
                                        <strong>Balance</strong>
                                    </ListItem>
                                    {account.balances.map((balance, x) => (
                                        <ListItem label={balance.currency} value={balance.balance} key={x} />
                                    ))}
                                </ListContainer>
                            </TableCard>
                        )}
                        {account.subAccounts.length !== 0 &&
                            account.subAccounts.map((subAccount, c) => <BalancesTableRowCard subAccount={subAccount} key={c} />)}
                    </React.Fragment>
                )}
            </TableRowExpandable>
        </React.Fragment>
    );
};

export default BalancesTableRow;
