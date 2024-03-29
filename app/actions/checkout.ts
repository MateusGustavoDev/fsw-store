'use server'
import { CartProduct } from '@/context/cart'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export const createCheckout = async (products: CartProduct[]) => {
  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: 'https://www.youtube.com/',
    cancel_url: 'https://www.youtube.com/',
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: 'brl',
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      }
    }),
  })

  return checkout
}
