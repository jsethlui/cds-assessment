import { useState } from 'react'
import Status from './Status.tsx'
import Select from 'react-select'
import {UilSave} from '@iconscout/react-unicons'

interface FormProps {
    name: string,
    formID: string,
    userID: string,
    loanAmount: number,
    status: Status
    isUser: boolean
}

function UserStatus({ status }: { status: Status}) {
    return (
        <div className="flex">
            <p className="font-semibold mr-1">Status: </p>
            <p>{status}</p>
        </div>
    )
}

function AdminStatus({ rawForm }: { rawForm: { [key:string]: any } }) {

    const options = [
        { value: "Approved", label: Status.Approved },
        { value: "Denied", label: Status.Denied },
        { value: "Pending", label: Status.Pending }
    ]

    const setDefaultValue = () => {
        const value = JSON.parse(localStorage.getItem(rawForm["formID"])!)
        return { value: value["status"], label: value["status"] }
    }

    const onChange = (event: any) => {
        rawForm["status"] = event.label
        console.log("rawForm (adminStatus): " + JSON.stringify(rawForm))
    }

    const render = () => {
        const item = JSON.parse(localStorage.getItem(rawForm["formID"])!)
        if (item["status"] === "Pending") {
            return <Select className=" ml-2 text-sm text-black max-w-full max-h-[10px]"
                           defaultValue={setDefaultValue()}
                           onChange={(event) => onChange(event)}
                           options={options} />
        }
        return <p>{rawForm["status"]}</p>
    }

    return (
        <div className="flex">
            <p className="font-semibold mr-1">Status: </p>
                {render()}
        </div>
    )
}

function SaveButton({ rawForm }: { rawForm: { [key:string]: any } }) {

    const onClick = () => {
        localStorage.setItem(rawForm["formID"], JSON.stringify(rawForm))
        alert("Status=" + rawForm["status"] + " saved")
    }

    return (
        <button className="bg-transparent focus:outline-none p-2"
                onClick={onClick}>
            <div className="flex">
                <UilSave className="mr-1" />
                <p>Save</p>
            </div>
        </button>
    )
}

function Form({ name, formID, userID, loanAmount, status, isUser }: FormProps) {

    // Object representation of Form component
    const [rawForm, setRawForm] = useState({ name: name,
                                             formID: formID,
                                             userID: userID,
                                             loanAmount: loanAmount,
                                             status: status,
                                             isUser: false })

    return (
        <div className="relative border-4 rounded-lg m-4 pl-8 pr-8 pt-16 pb-16">
            <div className="text-left">
                <div className="flex">
                    <p className="font-semibold mr-1">User ID: </p>
                    <p>{rawForm["userID"]}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Name: </p>
                    <p>{rawForm["name"]}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Loan Amount: </p>
                    <p>${rawForm["loanAmount"]}</p>
                </div>

                { isUser ? <UserStatus status={rawForm["status"]} /> : <AdminStatus rawForm={rawForm} formID={rawForm["formID"]}/> }

                <div className="absolute top-2 right-2">
                    { !isUser && rawForm["status"] === "Pending" ? <SaveButton rawForm={rawForm} /> : null }
                </div>

            </div>
        </div>
    )
}

export default Form