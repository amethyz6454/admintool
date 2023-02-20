import React from "react";
import ErrorLayout from "@/components/layout/ErrorLayout";
import Button from "@/components/buttons/Button";

const error500 = () => {
    return (
        <ErrorLayout title="500" subtitle="Generic Error Response" image="/images/500.svg">
            <div className="text-center">
                <p className="my-4">The link you clicked may be broken or the page may have been removed or renamed.</p>
                <Button length="block" href="/">
                    Go back to Homepage
                </Button>
            </div>
        </ErrorLayout>
    );
};

export default error500;
