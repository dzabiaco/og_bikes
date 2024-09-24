import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/app/lib/mongodb";
import Product from "@/app/models/Product";

export async function GET(request:NextRequest, { params }: { params: { id: string } }) {
    await connectToDatabase();

    try {
        const products = await Product.find();
        return Response.json({ products });
    } catch (error) {
        return Response.json({ error: 'Error fetching users' }, { status: 500 });
    }
}


export async function POST(request:NextRequest) {
    await connectToDatabase();

    try {
        const data = await request.json();
        const newProduct = new Product(data);
        await newProduct.save();

        return Response.json({ message: "Product is added successfully" }, {status: 200});
    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Error adding product' }, { status: 500 });
    }
}