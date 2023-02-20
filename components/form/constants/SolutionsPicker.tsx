import React from "react";
import { SOLUTIONS } from "@/utils/Constants";
import { InputField, InputFieldProps } from "@/components/form/InputField";

const SolutionsPicker: React.FC<InputFieldProps> = (props) => {
    const { id } = props;

    return (
        <>
            <InputField {...props} />
            <datalist id={id + "-list"}>
                {SOLUTIONS.map((solution, k) => (
                    <option value={solution.name} key={k}>
                        {solution.name}
                    </option>
                ))}
            </datalist>
        </>
    );
};

export default SolutionsPicker;
