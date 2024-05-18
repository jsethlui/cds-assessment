import Form from './Form.tsx'

function Government() {

    const forms = () => {
        const renderedForms: JSX.Element[] = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)!
            if (key == "loglevel") {
                continue
            }
            const item = JSON.parse(localStorage.getItem(key)!)

            const f = <Form name={item["name"]}
                            formID={item["formID"]}
                            userID={item["userID"]}
                            loanAmount={item["loanAmount"]}
                            status={item["status"]}
                            isUser={false} />
            renderedForms.push(f)
        }
        return renderedForms
    }

    return (
        <>
            <p className="absolute top-5 left-5 text-1xl font-semibold">Admin</p>
            <p className="text-2xl font-semibold">Forms</p>
            <div className="grid grid-cols-3 gap-1">
                {forms()}
            </div>
        </>
    )
}

export default Government