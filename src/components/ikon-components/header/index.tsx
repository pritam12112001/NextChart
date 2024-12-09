"use client"
import ModeToggle from '@/components/ikon-components/mode-toggle'
import TopMenuUser from '@/components/ikon-components/top-menu-user'
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import Link from 'next/link'

function Header() {
    const { isMobile } = useSidebar()
    return (
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background px-4 py-2">
            {isMobile && <SidebarTrigger />}
            <div className='ms-auto flex items-center gap-3'>
                <Link href={"/examples"}>Examples</Link>
                <ModeToggle />
                <TopMenuUser />
            </div>

        </header>
    )
}

export default Header