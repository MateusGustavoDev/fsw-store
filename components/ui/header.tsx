"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { SheetMenu } from "./sheet-menu";

export function Header() {
  return (
    <div className="w-full bg-background justify-between items-center flex p-6 border-b border-b-border">
      <SheetMenu />
      <h1 className="font-poppins text-lg font-semibold text-white">
        <span className="font-semi text-lg text-violet">FSW</span> Store
      </h1>
      <Button variant="outline" className="border border-border rounded-lg p-2">
        <ShoppingCart size={22} />
      </Button>
    </div>
  );
}
