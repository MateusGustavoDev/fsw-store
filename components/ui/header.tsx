'use client'
import { LogOutIcon, User2Icon } from 'lucide-react'
import { Button } from './button'
import { SheetMenu } from './sheet-menu'
import Link from 'next/link'
import { Cart } from './cart'
import { Separator } from './separator'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar } from './avatar'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn()
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <div className="w-full bg-background border-b border-b-border">
      <div className="max-w-[1250px] w-full justify-between items-center m-auto flex p-6">
        <div className="lg:hidden">
          <SheetMenu />
        </div>
        <Link href="/">
          <h1 className="font-poppins text-lg lg:text-xl font-semibold text-white">
            <span className="font-semi text-lg text-dark-purple">FSW</span> Store
          </h1>
        </Link>
        <div className="flex max-lg:hidden items-center gap-6">
          <Link href="/" className="hover:text-dark-purple transition duration-200">
            Inicio
          </Link>
          <Separator orientation="vertical" className="bg-zinc-600 h-4" />
          <Link href="/catalog" className="hover:text-dark-purple transition duration-200">
            Catálogo
          </Link>
          <Separator orientation="vertical" className="bg-zinc-600 h-4" />
          <Link href="#" className="hover:text-dark-purple transition duration-200">
            Ofertas
          </Link>
        </div>
        <div className="flex gap-6 ">
          <div className="max-lg:hidden relative items-center">
            {status === 'unauthenticated' && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="border border-border hover:bg-black-01 flex gap-2 rounded-lg w-28 h-10 p-0"
              >
                <User2Icon size={22} />
                Entrar
              </Button>
            )}
            {status === 'authenticated' && data.user?.name && data.user.image && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="outline-none w-max h-max block ">
                    <Avatar className="w-10 h-10 ">
                      <Image src={data.user?.image} fill alt={data.user?.name} />
                    </Avatar>
                  </button>
                </Dialog.Trigger>
                <Dialog.Content className="absolute z-50 border gap-2 bg-black outline-none flex py-2 px-2 justify-center  items-center border-border rounded-md mt-2 left-1/2 -translate-x-1/2">
                  <Button
                    onClick={handleLogoutClick}
                    variant="outline"
                    className="font-poppins w-28 flex hover:bg-black-01 gap-2 items-center outline-none"
                  >
                    <LogOutIcon />
                    Sair
                  </Button>
                </Dialog.Content>
              </Dialog.Root>
            )}
          </div>
          <Cart />
        </div>
      </div>
    </div>
  )
}
