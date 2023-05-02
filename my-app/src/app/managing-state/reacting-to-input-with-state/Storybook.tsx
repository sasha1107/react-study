let statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

function Form({ status } : { status: string }) {
    if (status === 'success') {
        return <h1>That's right!</h1>;
    }
    return (
        <form>
            <textarea disabled={status === 'submitting'} />
            <br />
            <button disabled={status === 'empty' || status === 'submitting'}>
                Submit
            </button>
            {status === 'error' && (
                <p className='Error'>
                    Good guess but a wrong answer. Try again!
                </p>
            )}
        </form>
    );
}

export default function Storybook() {
    return (
        <>
            {statuses.map((status) => (
                <section key={status}>
                    <h4>Form ({status}):</h4>
                    <Form status={status} />
                </section>
            ))}
        </>
    );
}
