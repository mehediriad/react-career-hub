
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='mt-40'>
        <div id="error-page" className='text-center'>
            <h1 className='text-6xl font-bold'>Oops!</h1>
            <p className='text-3xl my-4'>Sorry, an unexpected error has occurred.</p>
            <p className='my-4'>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link  to="/">Go to Home</Link>
        </div>
        </div>
        
    );
};

export default ErrorPage;