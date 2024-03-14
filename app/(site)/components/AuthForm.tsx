"use client"
import Button from '@/app/components/Button';
import Input from '@/app/components/input/Input';
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from '@/app/(site)/components/AuthSocialButton';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';
import axios from 'axios';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

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
            axios.post("/api/register", data).then((res)=>{
                toast.success("Account Created Successfully")
            }).catch((err)=>{
                toast.error("Something went wrong")
            }).finally(()=>{
                setIsLoading(false);
            })
        }

        else if (variant === "LOGIN") {
            // Next-Auth Login
            signIn("credentials", {
                ...data,
                redirect: false
            }).then((callback)=>{
                if(callback?.error){
                    console.log(callback.error)
                    toast.error("Invalid credentials")
                }
                if(callback?.ok && !callback?.error){
                    toast.success("Logged in Successfully")
                }
            }).finally(()=>{
                setIsLoading(false);
            })
        }
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
                    {variant === "REGISTER" && (
                        <Input id='name' label='Name' register={register} errors={errors} disabled={isLoading} />
                    )}
                    <Input id='email' label='Email' type='email' register={register} errors={errors} disabled={isLoading} />
                    <Input id='password' label='Password' type='password' register={register} errors={errors} disabled={isLoading} />
                    <Button type='submit' disabled={isLoading} fullWidth>{variant === "LOGIN" ? "Login" : "Register"}</Button>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">or continue with</span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton onClick={() => socialActions("github")} icon={FaGithub} />
                        <AuthSocialButton onClick={() => socialActions("google")} icon={FcGoogle} />
                    </div>
                </div>
                <div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
                    <div>
                        {variant==="LOGIN"? "New to Messenger?":"Already have an account!"}
                    </div>
                    <div className="underline cursor-pointer" onClick={toggleVariant}>
                        {variant==="LOGIN"? "Create an account":"Login"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
