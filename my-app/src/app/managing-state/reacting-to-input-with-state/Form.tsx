import { ChangeEvent, useState } from 'react';
import { Spinner } from '@chakra-ui/react'

interface ErrorType {
    message: string;
}

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState<ErrorType | null>(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>;
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err: any) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(e.target.value);
    }

    return (
        <>
            {status === 'submitting' ? <Spinner /> :
            <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable
                water? (답: lima)
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    className='border'
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button
                    className='border p-1 text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed'
                    disabled={answer.length === 0 || status === 'submitting'}
                >
                    Submit
                </button>
                {error !== null && <p className='Error text-red-600'>{error?.message}</p>}
            </form>
            </>
            }
        </>
    );
}

function submitForm(answer: string): Promise<void> {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
