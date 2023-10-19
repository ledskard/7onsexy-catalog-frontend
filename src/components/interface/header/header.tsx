"use client";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Logo } from "./logo";
import { Navbar } from "./navigation/navbar";
import { Search } from "../search";
import { useSelectedLayoutSegment } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GoSignOut } from "react-icons/go";

type HeaderProps = ComponentProps<"header">;

export const Header = ({ className, ...props }: HeaderProps) => {
  const pathName = useSelectedLayoutSegment();
  const { data: session } = useSession({
    required: false,
  });

  return (
    <header
      className={twMerge("bg-red-main w-full h-14", className)}
      {...props}
    >
      <Navbar>
        <Logo />
        {pathName === null && (
          <Search.Input className="sm:hidden flex border-white bg-white" />
        )}
        {session && (
          <Button className="w-fit text-xl" onClick={() => signOut()}>
            <GoSignOut />
          </Button>
        )}
      </Navbar>
    </header>
  );
};
