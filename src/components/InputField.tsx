import { useState } from 'react';

interface InputFieldProps {
    title: string
}

function InputField({ title }: InputFieldProps) {

    const [name, setName] = useState("")

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(name);
        setName("")
    }

    return (
        <form className="flex flex-row items-center" onSubmit={onSubmit}>
            <p className="text-lg flex items-center justify-center">{title}</p>
            <input onChange = {onChange}
                   value = {name}
                   className="m-4 pl-4 pt-2 pb-2 pr-4 bg-neutral-400 w-[400px]"
                   name="fullName" />
            <button className="pl-6 pt-2 pb-2 pr-6"
                    type="submit">
                Submit
            </button>
        </form>
    )
}

export default InputField