import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import Home from './pages/home/home.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
       queries: {
          suspense: true,
          useErrorBoundary: false,
          refetchOnWindowFocus: import.meta.env.PROD,
       },
    },
 })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Container className={'mt-4'}>
                <Home/>
            </Container>
        </QueryClientProvider>
    </React.StrictMode>,
)
