import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import GuestLayout, { GuestSliderItem } from "@/components/layout/GuestLayout";
import Button from "@/components/buttons/Button";
import { InputField } from "@/components/form/InputField";
import { Grid } from "@/components/ui/Grid";

const register: NextPage = (): JSX.Element => {
    return (
        <GuestLayout
            title="Sign up to your Admintool account"
            subtext=""
            slides={
                <GuestSliderItem
                    title="Access to Diverse Markets"
                    message="Sed ut perspiciatis unde omnis iste natus error sit."
                />
            }
        >
            <div className="flex flex-col pt-6 pb-12">
                <form>
                    <Grid>
                        <InputField id="firstName" name="firstName" placeholder="First Name" />
                        <InputField id="lastName" name="lastName" placeholder="Last Name" />
                        <InputField id="emailAddress" name="emailAddress" placeholder="Email Address" endIcon="User" />
                        <InputField type="password" id="password" name="password" placeholder="Password" />
                        <InputField
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />
                        <div className="pt-4">
                            <Button length="block">Register</Button>
                        </div>
                    </Grid>
                </form>
            </div>
            <div className="text-center">
                <p>
                    <Link href="/login">Already registered?</Link>
                </p>
                <p>
                    Back to <Link href="http://admintool.net">Admintool.net</Link>
                </p>
            </div>
        </GuestLayout>
    );
};

export default register;
