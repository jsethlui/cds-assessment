import { useState } from 'react';

interface InputFieldProps {
    onFormSubmit: any
}

function InputField({ onFormSubmit }: InputFieldProps) {

    const [name, setName] = useState("")
    const [loanAmount, setLoanAmount] = useState(0)

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setName("")
        setLoanAmount(0)
        onFormSubmit(name, loanAmount)
    }

    return (
        <form className="flex flex-col items-center" onSubmit={onSubmit}>

            <div className="flex flex-row items-center">
                <p className="text-lg">Full Name</p>
                <input onChange = {(event) => {setName(event.target.value)}}
                    value={name}
                    className="m-4 pl-4 pt-2 pb-2 pr-4 bg-neutral-400 w-[400px] rounded-md"
                    name="fullName" />
            </div>

            <div className="flex flex-row items-center">
                <p className="text-lg">Loan Amount ($)</p>
                <input onChange = {(event) => (setLoanAmount(parseInt(event.target.value)))}
                    value={loanAmount}
                    className="m-4 pl-4 pt-2 pb-2 pr-4 bg-neutral-400 w-[100px] rounded-md"
                    name="loanAmount" />
            </div>

            <button className="pl-6 pt-2 pb-2 pr-6"
                    type="submit">
                Submit
            </button>
        </form>
    )
}

export default InputField