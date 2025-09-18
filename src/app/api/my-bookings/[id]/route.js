import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const p = await params;
    const BookedOrderCollection = dbConnect("bookings");

    const singleBooked = await BookedOrderCollection.findOne({_id: new ObjectId(p.id)});
    return NextResponse.json(singleBooked);
}

export const PATCH = async(req, {params}) => {
    const p = await params;
    const BookedOrderCollection = dbConnect("bookings");
    const query = {_id: new ObjectId(p.id)};

    const body = await req.json();
    const filter = {
        $set: {...body}
    }
    const options = {upsert: true}
    const updatedRes = await BookedOrderCollection.updateOne(query, filter, options)

    revalidatePath("/my-bookings")
    return NextResponse.json(updatedRes);
}