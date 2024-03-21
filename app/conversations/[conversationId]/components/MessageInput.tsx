"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface MessageInputProps {
    placeholder?: string;
    required?: boolean;
    type?: string;
    id: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({ errors, id, register, placeholder, required, type }) => {
    return (
        <div className="relative w-full">
            <input id={id} type={type} autoComplete={id} {...register(id, { required })} placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
            />
        </div>
    )
}

export default MessageInput
