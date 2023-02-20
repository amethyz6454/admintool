import React from "react";
import { COUNTRIES } from "@/utils/Constants";
import { InputField, InputFieldProps } from "@/components/form/InputField";

const CountryPicker: React.FC<InputFieldProps> = (props) => {
    const { id } = props;

    return (
        <>
            <InputField {...props} />
            <datalist id={id + "-list"}>
                {COUNTRIES.map((country, k) => (
                    <option value={country.name} key={k}>
                        {country.name}
                    </option>
                ))}
            </datalist>
        </>
    );
};

export default CountryPicker;
