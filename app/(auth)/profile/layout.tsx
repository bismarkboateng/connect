import type { Metadata } from "next";
import Sidebar from "@/components/shared/Sidebar"


export const metadata: Metadata = {
  title: "Profile",
  description: "Profile page",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Sidebar />
     <section className="mt-2">
      {children}
     </section>
    </>
  );
}
