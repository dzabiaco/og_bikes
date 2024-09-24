import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/app/lib/mongodb";
import Product from "@/app/models/Product";

import { isValidObjectId } from 'mongoose';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    await connectToDatabase();

    const { id } = params;

    // Check if the ID is provided and valid
    if (!id || !isValidObjectId(id)) {
        return Response.json({ msg: "Invalid product ID format" }, { status: 404 }); // Return 400 for invalid ID
    }

    try {
        const product = await Product.findOne({ _id: id });

        // Check if product is found
        if (!product) {
            return Response.json({ msg: "Product not found" }, { status: 404 });
        }

        return Response.json({ product }, { status: 200 });

    } catch (error) {
        console.error("Error fetching product:", error); // Log the error for debugging
        return Response.json({ error: 'Error fetching product' }, { status: 500 });
    }
}