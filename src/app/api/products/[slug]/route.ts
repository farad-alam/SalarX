import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Product } from '@/lib/models/Product';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    await connectToDatabase();
    // In Next.js 15+, params is a Promise. Let's handle both for compatibility.
    const resolvedParams = await Promise.resolve(params);
    const product = await Product.findOne({ slug: resolvedParams.slug });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch product', details: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    await connectToDatabase();
    const resolvedParams = await Promise.resolve(params);
    const data = await request.json();
    
    if (data.isNew !== undefined) {
      data.isNewProduct = data.isNew;
      delete data.isNew;
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { slug: resolvedParams.slug },
      data,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(updatedProduct);
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update product', details: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    await connectToDatabase();
    const resolvedParams = await Promise.resolve(params);
    
    const deletedProduct = await Product.findOneAndDelete({ slug: resolvedParams.slug });

    if (!deletedProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete product', details: error.message }, { status: 500 });
  }
}
