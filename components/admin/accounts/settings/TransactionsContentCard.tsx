import React from "react";
import { InputField } from "@/components/form/InputField";
import { TRANSACTION_TYPE_STATE } from "@/utils/Constants";
import { TableCell, TableRow } from "@/components/table/Table";

const TransactionsContentCard: React.FC<any> = ({ limits }): JSX.Element => {
    const renderId = limits.currency.replaceAll(" ", "-") + "-" + limits.solution.replaceAll(" ", "-");
    return (
        <TableRow>
            <TableCell severity={TRANSACTION_TYPE_STATE[limits.type]}>{limits.type}</TableCell>
            <TableCell>{limits.method}</TableCell>
            <TableCell>{limits.solution}</TableCell>
            <TableCell>{limits.currency}</TableCell>
            <TableCell enableGrid>
                <InputField
                    label="Minimum Amount"
                    noLabel
                    grid="auto"
                    id={renderId}
                    name={renderId}
                    size="xs"
                    startIcon="Minus"
                    endIcon="Plus"
                />
            </TableCell>
            <TableCell enableGrid>
                <InputField
                    label="Maximum Amount"
                    noLabel
                    grid="auto"
                    id={renderId}
                    name={renderId}
                    size="xs"
                    startIcon="Minus"
                    endIcon="Plus"
                />
            </TableCell>
        </TableRow>
    );
};

export default TransactionsContentCard;
