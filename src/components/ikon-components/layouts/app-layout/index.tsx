import AppSidebar from '@/components/ikon-components/app-sidebar';
import { ReactNode } from 'react';
import { AppLayoutProvider } from './AppLayoutProvider';

function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <AppLayoutProvider>
                <div className='h-full flex'>
                    <AppSidebar />
                    <div className='h-full overflow-auto p-4 flex-grow'>
                        {children}
                    </div>
                </div>
            </AppLayoutProvider>
        </>
    )
}

export default AppLayout