import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import GuestLayout, { GuestSliderItem } from "@/components/layout/GuestLayout";
import Button from "@/components/buttons/Button";
import { InputField } from "@/components/form/InputField";
import { Grid } from "@/components/ui/Grid";

const login: NextPage = (): JSX.Element => {
    return (
        <GuestLayout
            title="Sign in to your PayStage account"
            subtext=""
            slides={
                <GuestSliderItem
                    title="Access to Diverse Markets"
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    image="/images/login-photo.png"
                />
            }
        >
            <div className="flex flex-col pt-6 pb-12">
                <form>
                    <Grid>
                        <InputField id="emailAddress" name="emailAddress" placeholder="Email Address" endIcon="User" />
                        <InputField type="password" id="password" name="password" placeholder="Password" />
                        <div className="pt-4">
                            <Button length="block">Login</Button>
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
    );
};

export default login;
