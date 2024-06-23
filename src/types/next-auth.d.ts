import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {
        name: string,
        email: string,
        image: string,
    }
    interface Session {
        user: {
            name: string,
            email: string,
            image: string,
        } & DefaultSession["user"];
    }
}
