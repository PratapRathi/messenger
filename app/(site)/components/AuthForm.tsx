"use client"
import Button from '@/app/components/Button';
import Input from '@/app/components/input/Input';
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant, setVariant] = useState<variant>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") setVariant("REGISTER");
        else setVariant("LOGIN");
    }, [variant])

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === "REGISTER") {
            // Axios API call
        }

        else if (variant === "LOGIN") {
            // Next-Auth Login
        }

        setIsLoading(false);
    }

    const socialActions = (actions: string) => {
        setIsLoading(true);

        // Next-Auth social sign In

        setIsLoading(false);
    }

    return (
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant==="REGISTER" && (
                        <Input id='name' label='Name' register={register} errors={errors}/>
                    )}
                    <Input id='email' label='Email' type='email' register={register} errors={errors}/>
                    <Input id='password' label='Password' type='password' register={register} errors={errors}/>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default AuthForm
