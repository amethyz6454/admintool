import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import GuestLayout, { GuestSliderItem } from "@/components/layout/GuestLayout";
import Button from "@/components/buttons/Button";
import { InputField } from "@/components/form/InputField";
import { GridCol } from "@/components/ui/Grid";
import Composition from "@/components/ui/Composition";

const login: NextPage = (): JSX.Element => {
    return (
        <GuestLayout
            title="Sign in to your Admintool account"
            subtext=""
            slides={
                <GuestSliderItem
                    title="Access to Diverse Markets"
                    message="The wise man therefore always holds in these matters to this principle of selection."
                />
            }
            enableGrid
        >
            <InputField type="email" id="emailAddress" name="emailAddress" placeholder="Email Address" endIcon="User" />
            <InputField type="password" id="password" name="password" placeholder="Password" endIcon="Lock" />
            <Button length="block">Login</Button>
            <GridCol>
                <Composition
                    primary={
                        <React.Fragment>
                            Don&apos;t have an account? Register <Link href="/register">here</Link>.
                        </React.Fragment>
                    }
                    textAlign="center"
                />
                <Composition
                    primary={
                        <React.Fragment>
                            Back to <Link href="/">Login</Link>
                        </React.Fragment>
                    }
                    textAlign="center"
                />
            </GridCol>
        </GuestLayout>
    );
};

export default login;
