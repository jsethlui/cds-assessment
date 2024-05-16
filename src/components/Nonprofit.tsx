import InputField from './InputField.tsx'

function Nonprofit() {
    return (
        <>
            <p className="text-2xl font-semibold">NonProfit</p>
            <div className="">
                <InputField title="Full Name" />
                <InputField title="Loan Amount" />
            </div>
        </>
    )
}

export default Nonprofit