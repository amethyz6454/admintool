import React from "react";
import { FieldsBaseProps, SelectField } from "@/components/form/InputField";
import { CURRENCIES } from "@/utils/Constants";

const CurrencyDropdown: React.FC<FieldsBaseProps> = (props) => {
    return (
        <SelectField {...props}>
            <option value={0}>- Select Currency -</option>
            {CURRENCIES.map((currency, k) => (
                <option value={currency} key={k}>
                    {currency}
                </option>
            ))}
        </SelectField>
    );
};

export default CurrencyDropdown;
