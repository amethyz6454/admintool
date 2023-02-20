import React from "react";
import Card from "./Card";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import Composition from "@/components/ui/Composition";

interface CardEmptyStateProps {
    appearance?: "solid" | "transparent";
    href?: string;
    image?: string;
    subTitle?: string;
    title?: string;
}

const CardEmptyState: React.FC<CardEmptyStateProps> = ({
    appearance = "transparent",
    href,
    image = "/vectors/icon-no-data-found.svg",
    subTitle,
    title,
}): JSX.Element => {
    return (
        <Card.CardContainer appearance={appearance} variant="empty">
            <Card.Body>
                <Image src={image} height={240} width={240} alt={title} />
                {title && <Composition wrapper="h4" primary={title} />}
                {subTitle && <Composition primary={subTitle} />}
                {href && (
                    <Button href={href} size="lg" color="secondary">
                        Get Started
                    </Button>
                )}
            </Card.Body>
        </Card.CardContainer>
    );
};

export default CardEmptyState;
