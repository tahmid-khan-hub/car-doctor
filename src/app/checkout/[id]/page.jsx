import CheckoutForm from "@/components/CheckoutForm";

export default async function CheckoutPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();

  return (
    <div className="min-h-screen max-w-[1250px] mx-auto">
      <h1 className="text-center text-3xl font-bold mt-5">Checkout Form</h1>
      <CheckoutForm data={data}></CheckoutForm>
    </div>
  );
}
