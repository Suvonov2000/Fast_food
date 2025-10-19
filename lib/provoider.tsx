"use client";

import React from 'react';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit/AuthProvider';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient: QueryClient = new QueryClient();

const store = createStore({
    authName: "__auth",
    authType: "cookie",
    cookieDomain: '127.0.0.1',
    cookieSecure: false,
})

const Providers = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider store={store}>
                {children}
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default Providers;