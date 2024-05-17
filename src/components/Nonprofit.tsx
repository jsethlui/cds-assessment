import { useState } from 'react'
import InputField from './InputField.tsx'
import Form from './Form.tsx'

function Nonprofit() {

    const [forms, addForm] = useState<Array<any>>([])

    const onFormSubmit = (name: string, loanAmount: number) => {
        console.log("Name: " + name)
        console.log("Loan Amount: " + loanAmount)
        const newForm = <Form name={name} id={forms.length + 1} loanAmount={loanAmount} />
        addForm(forms => [...forms, newForm] );
    }

    let renderForms = forms.map((f) => {
        return (
            <div className="col-span-1">
                {f}
            </div>
        )
    })

    return (
        <>
            <p className="absolute top-5 left-5 text-1xl font-semibold">Nonprofit Organization</p>

            <p className="text-2xl font-semibold m-3">User ID: </p>
            <div>
                <InputField onFormSubmit={onFormSubmit} />
            </div>

            <div className="grid grid-cols-3 gap-1">
                {renderForms}
            </div>
        </>
    )
}

export default Nonprofit