import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const servicesCollection = await dbConnect("services");
  const data = await servicesCollection.find().toArray();

  return Response.json(data);
}