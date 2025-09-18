import MyBookingsTable from "@/components/MyBookingsTable";
import { headers } from "next/headers";

const myBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
    credentials: "include",
  });
  const fetchedData = await res.json();
  return fetchedData;
};

export default async function MyBookingsPage() {
  const data = await myBookings();

  return (
    <div className="max-w-[1250px] mx-auto min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-5">My Bookings</h1>
      <MyBookingsTable data={data}></MyBookingsTable>
    </div>
  );
}
