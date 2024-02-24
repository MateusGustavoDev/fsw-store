"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import Link from "next/link";
import { Button } from "./button";
import {
  AlignJustify,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
} from "lucide-react";
import { Separator } from "./separator";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function SheetMenu() {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="outline"
          className="border border-border rounded-lg w-10 h-10 p-0"
        >
          <AlignJustify size={22} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="font-lg font-poppins text-left font-semibold">
          Menu
        </SheetHeader>
        {status === "authenticated" && data?.user && (
          <div className="flex flex-col">
            <div className="flex items-center gap-3 py-4">
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>
              <span className="font-medium font-poppins">
                {data?.user?.name}
              </span>
            </div>
            <Separator className="my-2" />
          </div>
        )}
        <div className="mt-2 flex flex-col gap-2">
          {status === "unauthenticated" && (
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="flex w-full font-poppins rounded-md justify-start gap-2"
            >
              <LogInIcon size={16} />
              Fazer login
            </Button>
          )}
          {status === "authenticated" && (
            <Button
              onClick={handleLogoutClick}
              variant="outline"
              className="flex w-full font-poppins rounded-md justify-start gap-2"
            >
              <LogOutIcon size={16} />
              Fazer logout
            </Button>
          )}
          <SheetClose asChild>
            <Link href="/">
              <Button
                variant="outline"
                className="flex w-full font-poppins rounded-md justify-start gap-2"
              >
                <HomeIcon size={16} />
                Início
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/catalog">
              <Button
                variant="outline"
                className="flex w-full font-poppins rounded-md justify-start gap-2"
              >
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
