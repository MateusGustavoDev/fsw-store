'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ProductImagesProps {
  name: string
  imagesUrls: string[]
}

const ProductImages = ({ imagesUrls, name }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(imagesUrls[0])

  return (
    <div className="relative">
      <div className="flex  lg:w-[736px] lg:h-[670px] flex-col">
        <div className="flex h-[23.75rem] lg:rounded-xl lg:h-full w-full items-center justify-center bg-black-01">
          <Image
            src={selectedImage}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex gap-3 lg:absolute lg:left-10 lg:top-10 lg:flex-col m-auto my-7">
          {imagesUrls.map((image) => (
            <div
              onClick={() => setSelectedImage(image)}
              key={image}
              className={`w-20 bg-bl h-20 border rounded-lg  ${
                image === selectedImage ? 'border-light-purple' : 'border-transparent hover:border-zinc-700'
              } bg-black-01 lg:bg-black items-center cursor-pointer justify-center border flex`}
            >
              <Image
                src={image}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductImages
