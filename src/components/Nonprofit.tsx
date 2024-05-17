import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import InputField from './InputField.tsx'
import Form from './Form.tsx'

export enum Status{
    Approved = "Approved",
    Denied = "Denied",
    Pending = "Pending"
}

function Nonprofit() {

    const [searchParams, setSearchParams] = useSearchParams();
    const userID = searchParams.get("user_id")

    // const [forms, addForm] = useState<Form[]>([])
    const [forms, addForm] = useState<Form[]>(() => {
        // Iterate through all local storage keys, and create Form components
        const temp: JSX.Element[] = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)!
            const item = JSON.parse(localStorage.getItem(key)!)

            console.log(item)
            console.log(item["status"])

            const f = <Form name={item["name"]} id={item["formID"]} loanAmount={item["loanAmount"]} status={item["status"]} />
            temp.push(f)
         }
         return temp
    })

    const onFormSubmit = (name: string, loanAmount: number) => {
        const formID = forms.length + 1
        const status = Status.Pending

        const newForm = <Form name={name} id={formID} loanAmount={loanAmount} status={status}/>
        addForm(forms => [...forms, newForm] );
        console.log(forms)

        const obj = {
            name: name,
            userID: userID,
            formID: formID,
            loanAmount: loanAmount,
            status: statusLookupTable[status]
        }
        localStorage.setItem(String(forms.length), JSON.stringify(obj))
    }

    let renderForms = forms.map((f, i) => {
        return (
            <div className="col-span-1" key={i}>
                {f}
            </div>
        )
    })

    return (
        <>
            <p className="absolute top-5 left-5 text-1xl font-semibold">Nonprofit Organization</p>

            {/* If ID is not present in URL, let ID be 0. Otherwise, show ID */}
            <p className="text-2xl font-semibold m-3">User ID: {userID ? userID : 0}</p>
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