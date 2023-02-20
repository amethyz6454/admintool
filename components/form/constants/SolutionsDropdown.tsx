import React from "react";
import { FieldsBaseProps, SelectField } from "@/components/form/InputField";
import { SOLUTIONS } from "@/utils/Constants";

const SolutionsDropdown: React.FC<FieldsBaseProps> = (props) => {
    return (
        <SelectField {...props}>
            <option value={0}>- Select Currency -</option>
            {SOLUTIONS.map((solution, k) => (
                <option value={solution.name} key={k}>
                    {solution.name}
                </option>
            ))}
        </SelectField>
    );
};

export default SolutionsDropdown;
