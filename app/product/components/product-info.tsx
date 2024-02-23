"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarsRating } from "@/components/ui/stars-rating";
import { cartContext } from "@/context/cart";
import { productWithTotalPrice } from "@/utils/compute-total-price";
import { formateToBrl } from "@/utils/formate-to-brl";
import {
  ArrowDownIcon,
  ChevronLeft,
  ChevronRight,
  TruckIcon,
} from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: productWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(cartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleToCartProductClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-2 flex-col">
        <span className="font-normal font-poppins text-xs text-light-gray">
          Novo | 100 vendidos
        </span>
        <span className="text-lg font-poppins">{product.name}</span>
      </div>
      <div className="flex gap-1 flex-col mt-2">
        <span className="font-light text-xs font-poppins text-light-purple">
          Disponível em estoque
        </span>
        <div className="flex gap-2">
          <StarsRating rating={3} />
          <span className="font-light font-poppins text-light-gray text-xs">
            (25 avaliações)
          </span>
        </div>
      </div>
      <div className="my-4">
        <div className="flex items-center gap-4">
          {product.discountPercentage > 0 ? (
            <div className="flex flex-col">
              <div className="flex gap-4">
                <span className="font-semibold text-xl">
                  {formateToBrl(Number(product.totalPrice))}
                </span>
                <Badge className="px-2 py-[2px] bg-dark-purple text-white text-xs">
                  <ArrowDownIcon size={14} /> {product.discountPercentage}%
                </Badge>
              </div>
              <span className="font-light text-sm font-poppins text-base-gray">
                De:{" "}
                <span className="line-through">
                  {formateToBrl(Number(product.basePrice))}
                </span>
              </span>
            </div>
          ) : (
            <span className="font-semibold text-xl">
              {formateToBrl(Number(product.totalPrice))}
            </span>
          )}
        </div>
        <div className="flex mt-4">
          <Button
            size="icon"
            variant="outline"
            onClick={handleDecreaseQuantityClick}
          >
            <ChevronLeft />
          </Button>
          <div className="w-10 h-10 flex items-center justify-center">
            {quantity}
          </div>
          <Button
            size="icon"
            variant="outline"
            onClick={handleIncreaseQuantityClick}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="flex my-8 flex-col gap-2">
        <span className="font-semibold text-md">Descrição</span>
        <p className="text-sm opacity-70 h-[100px] overflow-hidden text-light-gray font-poppins  text-ellipsis leading-6">
          {product.description}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <Button
          className="bg-dark-purple hover:bg-violet-800 font-poppins py-6 rounded-xl text-white uppercase font-semibold"
          onClick={handleToCartProductClick}
        >
          Adicionar ao carrinho
        </Button>
        <div className="flex items-center rounded-xl px-5 gap-2 py-4 justify-between bg-accent">
          <div className="flex items-center gap-4">
            <TruckIcon size={28} />
            <div className="flex flex-col">
              <span className="text-sm font-poppins font-light">
                Entrega via <span className="font-bold">FSPackt</span>
              </span>
              <span className="text-sm font-light font-poppins text-light-purple">
                Envio para <span className="font-bold">todo brasil</span>
              </span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">Frete grátis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
