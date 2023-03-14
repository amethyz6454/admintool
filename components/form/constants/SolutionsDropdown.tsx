import React from "react";
import { FieldsBaseProps, SelectField } from "@/components/form/InputField";
import { GAMES } from "@/utils/Constants";

const SolutionsDropdown: React.FC<FieldsBaseProps> = (props) => {
    return (
        <SelectField {...props}>
            <option value={0}>- Select Currency -</option>
            {GAMES.map((game, k) => (
                <option value={game} key={k}>
                    {game}
                </option>
            ))}
        </SelectField>
    );
};

export default SolutionsDropdown;
