import React from "react";
import { CURRENCIES } from "@/utils/Constants";
import { InputField, InputFieldProps } from "@/components/form/InputField";

const CurrencyPicker: React.FC<InputFieldProps> = (props) => {
    const { id } = props;

    return (
        <>
            <InputField {...props} />
            <datalist id={id + "-list"}>
                {CURRENCIES.map((currency, k) => (
                    <option value={currency} key={k}>
                        {currency}
                    </option>
                ))}
            </datalist>
        </>
    );
};

export default CurrencyPicker;
