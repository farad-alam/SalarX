import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Product } from '@/lib/models/Product';
import { products as localProducts } from '@/data/products';

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    // Clear existing products to prevent duplicates during multiple seed runs
    await Product.deleteMany({});

    // Map local products to match Mongoose schema
    const mappedProducts = localProducts.map(p => ({
      ...p,
      // rename isNew to isNewProduct if it exists
      isNewProduct: p.isNew || false,
      // we can map variants if needed, or just leave them as they are
    }));

    // Insert new products
    const insertedProducts = await Product.insertMany(mappedProducts);

    return NextResponse.json({
      message: 'Database seeded successfully',
      count: insertedProducts.length,
    });
  } catch (error: any) {
    console.error('Seed Error:', error);
    return NextResponse.json({ error: 'Failed to seed database', details: error.message }, { status: 500 });
  }
}
