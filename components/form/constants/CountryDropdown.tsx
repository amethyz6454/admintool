import React from "react";
import { COUNTRIES } from "@/utils/Constants";
import { FieldsBaseProps, SelectField } from "@/components/form/InputField";

const CountryDropdown: React.FC<FieldsBaseProps> = (props) => {
    return (
        <SelectField {...props}>
            <option value={0}>- Select Country -</option>
            {COUNTRIES.map((country, k) => (
                <option value={country.name} key={k}>
                    {country.name}
                </option>
            ))}
        </SelectField>
    );
};

export default CountryDropdown;
