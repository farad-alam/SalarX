import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVariant {
  id: string; // Keep string ID from frontend or use MongoDB ObjectId
  name: string;
  sku: string;
  stock: number;
}

export interface IProduct extends Document {
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  variants: IVariant[];
  isTrending?: boolean;
  isNewProduct?: boolean; // Note: 'isNew' is a reserved property in Mongoose Document, so we map it or rename it. We will use 'isNewProduct' instead.
}

const VariantSchema = new Schema<IVariant>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  sku: { type: String, required: true },
  stock: { type: Number, default: 0 },
}, { _id: false }); // Disable separate _id for subdocuments if we are using our own string IDs

const ProductSchema = new Schema<IProduct>(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    images: [{ type: String }],
    category: { type: String, required: true },
    variants: [VariantSchema],
    isTrending: { type: Boolean, default: false },
    isNewProduct: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Map the virtual 'id' to the frontend expectations, since MongoDB uses '_id'
ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete (ret as any)._id;
  },
});

export const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
