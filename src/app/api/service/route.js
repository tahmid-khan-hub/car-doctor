import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const BookedOrderCollection = dbConnect("bookings");
  const res = await BookedOrderCollection.insertOne(body);

  return NextResponse.json(res);
};
