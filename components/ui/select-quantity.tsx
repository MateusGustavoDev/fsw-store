import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface SelectQuantityProps {
  quantity: number;
  handleDecreaseQuantityClick: () => void;
  handleIncreaseQuantityClick: () => void;
}

export function SelectQuantity({
  quantity,
  handleDecreaseQuantityClick,
  handleIncreaseQuantityClick,
}: SelectQuantityProps) {
  return (
    <div className="flex">
      <Button
        size="icon"
        variant="outline"
        onClick={handleDecreaseQuantityClick}
        className="h-8 w-8"
      >
        <ChevronLeft />
      </Button>
      <div className="w-8 h-8 flex items-center justify-center">
        {quantity}
      </div>
      <Button
        size="icon"
        variant="outline"
        onClick={handleIncreaseQuantityClick}
        className="h-8 w-8"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
