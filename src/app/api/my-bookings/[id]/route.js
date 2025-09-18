import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const p = await params;
    const BookedOrderCollection = dbConnect("bookings");

    const singleBooked = await BookedOrderCollection.findOne({_id: new ObjectId(p.id)});
    return NextResponse.json(singleBooked);
}