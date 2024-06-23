import {SignIn} from "@/components/sign-in";
import Link from "next/link";
import {redirect} from "next/navigation";
import {auth} from "@/auth";

export default async function Page() {
    const session = await auth();

    if (session) {
        redirect("/app");
    }

    return (
        <section className="flex flex-col justify-center items-center mx-auto max-w-xl min-h-screen">
            <h1 className="text-3xl mb-5">
                Welcome to Poemify
            </h1>
            <div className="flex flex-col items-center justify-center gap-5">
                <SignIn/>
            </div>
            <div className="flex justify-center items-center my-10">
                <span className="text-sm">
                    By continuing, you agree to Poemify {" "}
                    <Link className="border-b border-b-amber-200" href="/" target="_blank">
                        Terms of Service {" "}
                    </Link>
                    And {" "}
                     <Link className="border-b border-b-amber-200" href="/" target="_blank" >
                        Privacy Policy .
                    </Link>
                </span>
            </div>
        </section>
    )
}
