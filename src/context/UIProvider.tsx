import {NextUIProvider} from '@nextui-org/react'
import React from "react";

export function UIProvider({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}
