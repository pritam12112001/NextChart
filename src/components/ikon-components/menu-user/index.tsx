import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function MenuUser() {
    const user = {
        name: "John Doe",
        avatar: "https://example.com/avatar.jpg",
        email: "john.doe@example.com",
    }
    return (
        <>
            <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
            </div>
        </>
    )
}

export default MenuUser