import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const GET = async (req, { params }) => {
  const servicesCollection = await dbConnect("services");
  const data = await servicesCollection.findOne({
    _id: new ObjectId(params.id),
  });

  return NextResponse.json(data);
};

export const DELETE = async(req, {params}) => {
  const p = await params;
  const BookedOrderCollection = dbConnect("bookings");
  const query = {_id: new ObjectId(p.id)};

  const session = await getServerSession(authOptions);
  const currBooking = await BookedOrderCollection.findOne(query);

  const isOwnerValid = session?.user?.email == currBooking.email;

  if(isOwnerValid){
    // user specific delete
    const deleteRes = await BookedOrderCollection.deleteOne(query);
    return NextResponse.json(deleteRes);
  }
  else{
    return NextResponse.json({success: false, message: "forbidden action"})
  }
  
}