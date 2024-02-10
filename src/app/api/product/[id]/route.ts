import { NextResponse } from 'next/server'
import products from '@/mock/product.json'

export async function GET(request: Request, context: any) {
  const { params } = context

  return NextResponse.json({
    products: products.filter((el) => el.name === params.id),
  })
}
