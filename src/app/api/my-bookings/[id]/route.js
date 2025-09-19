import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const p = await params;
    const BookedOrderCollection = dbConnect("bookings");
    const query = {_id: new ObjectId(p.id)};

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const singleBooked = await BookedOrderCollection.findOne(query);
    const isValidOwner = email === singleBooked?.email;

    if(isValidOwner){
        return NextResponse.json(singleBooked);
    }
    else{
        return NextResponse.json({message: "forbidden action"}, {status: 403});
    }
}

export const PATCH = async(req, {params}) => {
    const p = await params;
    const BookedOrderCollection = dbConnect("bookings");
    const query = {_id: new ObjectId(p.id)};

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const currBookedData = await BookedOrderCollection.findOne(query);
    const isValidOwner = email === currBookedData?.email;

    if(isValidOwner){
        const body = await req.json();
        const filter = {
            $set: {...body}
        }
        const options = {upsert: true}
        const updatedRes = await BookedOrderCollection.updateOne(query, filter, options)

        revalidatePath("/my-bookings")
        return NextResponse.json(updatedRes);
    }
    else{
        return NextResponse.json({message: "forbidden action"}, {status: 403});
    }
}