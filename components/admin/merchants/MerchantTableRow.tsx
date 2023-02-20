import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { TableCard, TableCell, TableRow, TableRowExpandable } from "@/components/table/Table";
import { IconRoundMinus, IconRoundPlus } from "@/components/ui/Icons";
import { ListContainer, ListItem } from "@/components/ui/List";
import StyleTable from "@/sass/components/table.module.scss";

const MerchantTableRow: React.FC<any> = ({ merchant }): JSX.Element => {
    const [showExtension, setShowExtension] = React.useState<boolean>(false);

    return (
        <>
            <TableRow>
                <TableCell
                    className={classNames(StyleTable.action, {
                        disabled: !merchant.subMerchants,
                    })}
                    onClick={() => merchant.subMerchants && setShowExtension(!showExtension)}
                >
                    {!showExtension ? (
                        <IconRoundPlus className={StyleTable.icon} />
                    ) : (
                        <IconRoundMinus className={StyleTable.icon} />
                    )}
                </TableCell>
                <TableCell highlight>
                    <Link href={"/admin/merchants/" + merchant.merchantNumber}>
                        <a>{merchant.merchantNumber}</a>
                    </Link>
                </TableCell>
                <TableCell>{merchant.merchantName}</TableCell>
                <TableCell>{merchant.email}</TableCell>
                <TableCell>{merchant.companyName ? merchant.companyName : <>&mdash;</>}</TableCell>
            </TableRow>
            <TableRowExpandable show={showExtension}>
                {merchant.subMerchants &&
                    merchant.subMerchants &&
                    merchant.subMerchants.map((subMerchant, x) => (
                        <TableCard key={x}>
                            <ListContainer>
                                <ListItem label="Merchant Number" value={subMerchant.merchantNumber} />
                                <ListItem label="Merchant Name" value={subMerchant.merchantName} />
                                <ListItem label="Created At" value={subMerchant.createdAt} />
                            </ListContainer>
                        </TableCard>
                    ))}
            </TableRowExpandable>
        </>
    );
};

export default MerchantTableRow;
