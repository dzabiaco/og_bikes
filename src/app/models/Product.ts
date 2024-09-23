import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,  // Optional: Removes whitespace around the title
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,  // Optional: Ensure price is not negative
    },
    rating: {
        type: Number,
        default: 0,  // Set default rating to 0
        min: 0,  // Ensure rating is not negative
        max: 5,  // Assuming the rating system is out of 5
    },
    images: {
        type: String,
        required: true
    }
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;