"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useSignINFeature } from "./features";
import { useState } from "react";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const { signIn: { mutate: signIn, isPending } } = useSignINFeature();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form className={cn("flex flex-col gap-6", className)} onSubmit={(e) => e.preventDefault()} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Enter your email below to login to your account
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => setEmail(e.target.value)} />
                </Field>
                <Field>
                    <div className="flex items-center">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
                </Field>
                <Field>
                    <Button disabled={isPending} onClick={() => signIn({ email, password })}>
                        {
                            isPending ? "Loading..." : "Login"
                        }
                    </Button>
                </Field>
                <FieldSeparator>Or continue with</FieldSeparator>
                <Field>

                    <FieldDescription className="text-center">
                        Don&apos;t have an account?{" "}
                        <a href="#" className="underline underline-offset-4">
                            Sign up
                        </a>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}


export default function SignIn() {
    return (
        <div className=" min-h-svh flex">
            <div className="bg-muted relative hidden lg:block flex-2">
                <img
                    src="/images/sign-in.png"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10 flex-1">

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <LoginForm />
                    </div>
                </div>
            </div>

        </div>
    )
}