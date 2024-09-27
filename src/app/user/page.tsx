import UserTable from "@/components/user-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Page",
    description: "User Page",
}

export default function UserPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
        <div className="max-w-screen-md mx-auto py-10">
            <h1 className="text-2xl font-bold">User List</h1>
            <UserTable />
        </div>
    </div>
  )
}
