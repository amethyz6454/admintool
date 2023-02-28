import React from "react";
import Button from "@/components/buttons/Button";
import Icon from "./Icons";
import { ButtonGroup } from "@/components/form/Form";

const Pagination: React.FC = (): JSX.Element => {
    return (
        <ButtonGroup>
            <Button appearance="link" shape="square">
                <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button appearance="link" shape="square">
                <Icon name="ChevronDoubleLeft" size={16} />
            </Button>
            <Button color="primary" shape="square">
                {1}
            </Button>
            <Button appearance="link" shape="square">
                {2}
            </Button>
            <Button appearance="link" shape="square">
                {3}
            </Button>
            <Button appearance="link" shape="square">
                {4}
            </Button>
            <Button appearance="link" shape="square">
                {5}
            </Button>
            <Button appearance="link" shape="square">
                {99999}
            </Button>
            <Button appearance="link" shape="square">
                <Icon name="ChevronDoubleRight" size={16} />
            </Button>
            <Button appearance="link" shape="square">
                <Icon name="ChevronRight" size={16} />
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;
