"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface AppLayoutContextType {
    appMenus: [] | null;
    setAppMenus: (menu: [] | null) => void;
}

// Create the context
const AppLayoutContext = createContext<AppLayoutContextType | undefined>(undefined);


export function AppLayoutProvider({ children }: { children: ReactNode }) {
    const [appMenus, setAppMenus] = useState<[] | null>(null);
    return (
        <>
            <AppLayoutContext.Provider value={{ appMenus, setAppMenus }}>
                {children}
            </AppLayoutContext.Provider>
        </>
    )
}

export const useAppLayout = () => {
    const context = useContext(AppLayoutContext);
    if (!context) {
        throw new Error("useAppRouter must be used within an AppRouterProvider");
    }
    return context;
};