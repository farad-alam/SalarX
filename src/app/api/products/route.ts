import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Product } from '@/lib/models/Product';

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(request.url);
    
    // Build filter based on query params
    const filter: any = {};
    
    const category = searchParams.get('category');
    if (category && category !== 'All') {
      filter.category = category;
    }

    const isTrending = searchParams.get('isTrending');
    if (isTrending === 'true') {
      filter.isTrending = true;
    }

    const isNew = searchParams.get('isNew');
    if (isNew === 'true') {
      filter.isNewProduct = true;
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch products', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    
    // Convert isNew to isNewProduct if passed by client
    if (data.isNew !== undefined) {
      data.isNewProduct = data.isNew;
      delete data.isNew;
    }

    const newProduct = await Product.create(data);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create product', details: error.message }, { status: 500 });
  }
}
