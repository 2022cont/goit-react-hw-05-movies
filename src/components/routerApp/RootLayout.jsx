import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'App.styled';
import MainNavigation from 'components/MainNavigation';



export default function RootLayout() {
    return (
        <Container>
            <MainNavigation />
            <Suspense fallback={null}>
            <main>
                <Outlet />
            </main>
            </Suspense>

        </Container>
    )

} 