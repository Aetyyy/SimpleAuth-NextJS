import ProductTable from "@/components/product-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Products Page",
};

export default function ProductPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-screen-md mx-auto py-10">
        <h1 className="text-2xl font-bold">Products List</h1>
        <ProductTable />
      </div>
    </div>
  );
}
