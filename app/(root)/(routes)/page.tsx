import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return (
        <div>
            Root (protected)
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}

export default RootPage