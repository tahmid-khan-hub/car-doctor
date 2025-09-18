import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const BookedOrderCollection = dbConnect("bookings");
  const res = await BookedOrderCollection.insertOne(body);

  return NextResponse.json(res);
};

export const GET = async(req) => {
    const session = await getServerSession(authOptions);
    if(session){
        const email = session?.user?.email;
        const BookedOrderCollection = dbConnect("bookings");
        const res = await BookedOrderCollection.find({email}).toArray();
        return NextResponse.json(res);
    }

    return NextResponse.json({});
}