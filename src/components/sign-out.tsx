import { signOut } from "@/auth";


export function SignOut() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut();
            }}
        >
            <button
                className="block border border-gray-100 rounded-3xl px-4 py-2
                hover:bg-gradient-to-r from-indigo-500 to-purple-500"
                type="submit"
            >
                Sign Out
            </button>
        </form>
    )
}
