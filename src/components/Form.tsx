
export enum Status{
    Approved = "Approved",
    Denied = "Denied",
    Pending = "Pending"
}


interface FormProps {
    name: string,
    id: number,
    loanAmount: number,
    status: Status
}

function Form({ name, id, loanAmount, status }: FormProps) {

    return (
        <div className="border-4 rounded-lg m-4 pl-4 pr-4 pt-6 pb-6">
            <div className="text-left">
                <div className="flex">
                    <p className="font-semibold mr-1">Form ID: </p>
                    <p>{id}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Name: </p>
                    <p>{name}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Loan Amount: </p>
                    <p>${loanAmount}</p>
                </div>

                <div className="flex">
                    <p className="font-semibold mr-1">Status: </p>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default Form