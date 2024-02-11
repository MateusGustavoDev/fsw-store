import { productWithTotalPrice } from "@/helpers/product";
import { ArrowDown01Icon, ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";

interface ProductItemProps {
  product: productWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex max-w-[156px] flex-col gap-4 ">
        <div className="relative flex h-[170px] w-[156px] border  items-center justify-center gap-4 rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[90px] w-auto"
            style={{ objectFit: "contain" }}
            alt={product.name}
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-2 bg-violet top-2 text-white font-poppins font-semibold px-2 py-[2px]">
              <ArrowDownIcon size={14} />
              <span>{product.discountPercentage}%</span>
            </Badge>
          )}
        </div>
        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>
          <div className="flex items-center  gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold">
                  R$ {Number(product.totalPrice).toFixed(2)}
                </p>
                <p className="text-xs font-semibold line-through opacity-75">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-xs font-semibold line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
