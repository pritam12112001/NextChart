import Footer from '@/components/ikon-components/footer';
import Header from '@/components/ikon-components/header';
import { MainSideBar } from '@/components/ikon-components/main-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "49px",
                    } as React.CSSProperties
                }
            >
                <MainSideBar />
                <SidebarInset className='flex h-lvh overflow-hidden'>
                    <Header />
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <Footer />
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}

export default MainLayout