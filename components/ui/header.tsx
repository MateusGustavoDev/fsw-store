import { AlignJustify, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export function Header() {
  return (
    <div className="w-full bg-background justify-between items-center flex p-6 border-b border-b-border">
      <Sheet>
        <SheetTrigger>
          <Button
            variant="outline"
            className="border border-border rounded p-2"
          >
            <AlignJustify size={22} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="font-lg font-poppins text-left font-semibold">
            Menu
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <h1 className="font-poppins text-lg font-semibold text-white">
        <span className="font-semi text-lg text-violet">FSW</span> Store
      </h1>
      <Button variant="outline" className="border border-border rounded p-2">
        <ShoppingCart size={22} />
      </Button>
    </div>
  );
}
