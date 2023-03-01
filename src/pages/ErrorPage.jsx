import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <MainNavigation />
            <p>An error occurred!</p>
            <p>{error.message}</p>
        </>
    )
}