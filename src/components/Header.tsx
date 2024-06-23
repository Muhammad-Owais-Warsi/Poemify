"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import {useSession, signOut} from "next-auth/react";
import {User} from "next-auth";
import {PoemifyLogo} from "@/components/PoemifyLogo";

export default function Header() {

    const { data: session } = useSession();
    const user: User = session?.user as User;

    return (
        <Navbar>
            <NavbarBrand>
                <PoemifyLogo/>
                <Link href="/" className="font-bold text-inherit">Poemify</Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">

                {
                    session ?
                        (
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src={user.image ?? undefined}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">{user.email}</p>
                                    </DropdownItem>
                                    <DropdownItem key="settings">My Settings</DropdownItem>
                                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                    <DropdownItem onClick={() => signOut({callbackUrl: "/", redirect: true})} key="logout" color="danger">
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )
                        :
                        (
                            <NavbarItem>
                                <button className="relative p-1">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
                                    <div className="px-4 py-2 bg-black rounded-[6px] relative text-white hover:bg-transparent transition duration-200">
                                        <Link href="/sign-in" className="text-gray-100">
                                            Sign In
                                        </Link>
                                    </div>
                                </button>
                            </NavbarItem>
                        )
                }


            </NavbarContent>
        </Navbar>
    );
}
