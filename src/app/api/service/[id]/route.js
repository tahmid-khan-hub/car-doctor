import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import dbConnect from "@/lib/dbConnect";

export const GET = async (req, { params }) => {
  const servicesCollection = await dbConnect("services");
  const data = await servicesCollection.findOne({
    _id: new ObjectId(params.id),
  });

  return NextResponse.json(data);
};
