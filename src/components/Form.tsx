
import Status from './Status.tsx'
import Select from 'react-select'

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

function AdminStatus() {

    const options = [
        { value: "Approved", label: Status.Approved },
        { value: "Denied", label: Status.Denied },
        { value: "Pending", label: Status.Pending }
    ]

    return (
        <div className="flex">
            <p className="font-semibold mr-1">Status: </p>
            <Select className=" ml-2 text-sm text-black max-w-full max-h-[10px]"
                    options={options} />
        </div>
    )
}

function Form({ name, formID, userID, loanAmount, status, isUser = true }: FormProps) {

    return (
        <div className="border-4 rounded-lg m-4 pl-4 pr-4 pt-6 pb-6">
            <div className="text-left">
                {/* <div className="flex">
                    <p className="font-semibold mr-1">Form ID: </p>
                    <p>{formID}</p>
                </div> */}

                <div className="flex">
                    <p className="font-semibold mr-1">User ID: </p>
                    <p>{userID}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Name: </p>
                    <p>{name}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Loan Amount: </p>
                    <p>${loanAmount}</p>
                </div>

                {isUser ? <UserStatus status={status} /> : <AdminStatus status={status} />}
            </div>
        </div>
    )
}

export default Form