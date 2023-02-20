import React from "react";
import Button from "@/components/buttons/Button";
import Icon from "./Icons";
import { ButtonGroup } from "@/components/form/Form";

const Pagination: React.FC = (): JSX.Element => {
    return (
        <ButtonGroup>
            <Button color="secondary" shape="square">
                <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button color="secondary" shape="square">
                <Icon name="ChevronDoubleLeft" size={16} />
            </Button>
            <Button color="success" shape="square">
                {1}
            </Button>
            <Button color="secondary" shape="square">
                {2}
            </Button>
            <Button color="secondary" shape="square">
                {3}
            </Button>
            <Button color="secondary" shape="square">
                {4}
            </Button>
            <Button color="secondary" shape="square">
                {5}
            </Button>
            <Button color="secondary" shape="square">
                {99999}
            </Button>
            <Button color="secondary" shape="square">
                <Icon name="ChevronDoubleRight" size={16} />
            </Button>
            <Button color="secondary" shape="square">
                <Icon name="ChevronRight" size={16} />
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;
