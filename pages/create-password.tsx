import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import GuestLayout, { GuestSliderItem } from "@/components/layout/GuestLayout";
import Button from "@/components/buttons/Button";
import Emphasis from "@/components/ui/Emphasis";
import { Grid, GridCol } from "@/components/ui/Grid";
import { InputField } from "@/components/form/InputField";
import { ListContainer, ListItem } from "@/components/ui/List";
import Toast from "@/components/ui/Toast";
import Composition from "@/components/ui/Composition";

const CreatePassword: NextPage = (): JSX.Element => {
    const [togglePassword, setTogglePassword] = React.useState<boolean>(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = React.useState<boolean>(false);
    const [showToast, setShowToast] = React.useState(true);
    return (
        <React.Fragment>
            <Toast startIcon="Info" endIcon="Close" onClose={() => setShowToast(false)} show={showToast}>
                This is a notification.
            </Toast>
            <GuestLayout
                title="Create Password"
                subtext="Choose a strong password and don't reuse it for other accounts or websites."
                slides={
                    <GuestSliderItem
                        title="Access to Diverse Markets"
                        message="The wise man therefore always holds in these matters to this principle of selection."
                    />
                }
                enableGrid
            >
                <Emphasis title="Password Requirements" collapsible>
                    <ListContainer>
                        <ListItem icon="RoundCheck" iconColor="success">
                            Password must have at least 8 characters
                        </ListItem>
                        <ListItem icon="Minus" iconColor="danger">
                            Password must have at least one number
                        </ListItem>
                        <ListItem icon="Minus" iconColor="danger">
                            Password must have an upper and lower case characters
                        </ListItem>
                        <ListItem icon="Minus" iconColor="danger">
                            Password must have at least one special character
                        </ListItem>
                    </ListContainer>
                </Emphasis>
                <InputField
                    autoComplete="new-password"
                    id="new_password"
                    noLabel
                    name="new_password"
                    label="New Password"
                    placeholder="Enter your new password."
                    startIcon="Lock"
                    type={togglePassword ? "text" : "password"}
                    endIcon={togglePassword ? "ViewHide" : "View"}
                    endIconClick={() => setTogglePassword(!togglePassword)}
                />
                <InputField
                    autoComplete="new-password"
                    noLabel
                    id="confirm_password"
                    name="confirm_password"
                    label="Confirm Password"
                    placeholder="Confirm your new password."
                    startIcon="Lock"
                    type={toggleConfirmPassword ? "text" : "password"}
                    endIcon={toggleConfirmPassword ? "ViewHide" : "View"}
                    endIconClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                />
                <Button length="block">Create Password</Button>
                <GridCol>
                    <Composition
                        primary={
                            <React.Fragment>
                                Don&apos;t have an account? Register <Link href="/register">here</Link>.
                            </React.Fragment>
                        }
                    />
                    <Composition
                        primary={
                            <React.Fragment>
                                Back to <Link href="/">Login</Link>
                            </React.Fragment>
                        }
                    />
                </GridCol>
            </GuestLayout>
        </React.Fragment>
    );
};

export default CreatePassword;
