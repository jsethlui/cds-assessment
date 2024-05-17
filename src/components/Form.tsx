
export enum Status{
    Approved,
    Pending,
    WaitingDecision
}

interface FormProps {
    name: string,
    id: number,
    loanAmount: number,
    status?: Status
}

function Form({ name, id, loanAmount, status = Status.Pending }: FormProps) {

    // Map Status enum values to string representation
    const statusLookupTable: { [index: string]: any; } = {};
    statusLookupTable[Status.Approved] = "Approved"
    statusLookupTable[Status.Pending] = "Pending"
    statusLookupTable[Status.WaitingDecision] = "Waiting Decision"

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
                    <p>{statusLookupTable[status]}</p>
                </div>
            </div>
        </div>
    )
}

export default Form