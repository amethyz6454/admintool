import React from "react";
import { GAMES } from "@/utils/Constants";
import { InputField, InputFieldProps } from "@/components/form/InputField";

const SolutionsPicker: React.FC<InputFieldProps> = (props) => {
    const { id } = props;

    return (
        <>
            <InputField {...props} />
            <datalist id={id + "-list"}>
                {GAMES.map((game, k) => (
                    <option value={game} key={k}>
                        {game}
                    </option>
                ))}
            </datalist>
        </>
    );
};

export default SolutionsPicker;
