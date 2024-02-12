"use client";

import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { AppProgressBar } from "next-nprogress-bar";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <ThemeProvider enableSystem={true} attribute="class">
                {children}
            </ThemeProvider>
            <AppProgressBar
                height="4px"
                color="rgb(16, 185, 129)"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </Suspense>
    );
}
