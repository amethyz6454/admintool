import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import GuestLayout, { GuestSliderItem } from "@/components/layout/GuestLayout";
import Button from "@/components/buttons/Button";
import Emphasis from "@/components/ui/Emphasis";
import { Grid } from "@/components/ui/Grid";
import { InputField } from "@/components/form/InputField";
import { ListContainer, ListItemGraphics } from "@/components/ui/List";
import Toast from "@/components/ui/Toast";

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
                        message="Ut enim ad minima veniam quis nostrum."
                        image="/images/login-photo.png"
                    />
                }
            >
                <Emphasis title="Password Requirements" collapsible>
                    <ListContainer>
                        <ListItemGraphics icon="RoundCheck" color="success">
                            Password must have at least 8 characters
                        </ListItemGraphics>
                        <ListItemGraphics color="danger">Password must have at least one number</ListItemGraphics>
                        <ListItemGraphics color="danger">
                            Password must have an upper and lower case characters
                        </ListItemGraphics>
                        <ListItemGraphics color="danger">
                            Password must have at least one special character
                        </ListItemGraphics>
                    </ListContainer>
                </Emphasis>
                <div className="flex flex-col pt-6 pb-12">
                    <form>
                        <Grid>
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
                            <div className="pt-4">
                                <Button length="block">Create Password</Button>
                            </div>
                        </Grid>
                    </form>
                </div>
                <div className="text-center">
                    <p>
                        Don&apos;t have an account? Register <Link href="/register">here</Link>.
                    </p>
                    <p>
                        Back to <Link href="http://paystage.net">PayStage.net</Link>
                    </p>
                </div>
            </GuestLayout>
        </React.Fragment>
    );
};

export default CreatePassword;
