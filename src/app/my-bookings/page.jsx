"use client";
import MyBookingsTable from "@/components/MyBookingsTable";
import React, { useEffect, useState } from "react";

export default function MyBookingsPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const myBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service", {
        credentials: "include", 
      });
      const d = await res.json();
      setData(d);
    };
    myBookings();
  }, []);
  console.log(data);

  return (
    <div className="max-w-[1250px] mx-auto min-h-screen">
      <h1 className="text-center text-3xl font-bold mt-5">My Bookings</h1>
      <MyBookingsTable data={data}></MyBookingsTable>
    </div>
  );
}
