import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const appFont = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Template App",
  description: "template app to be used ... somewhere",
};

// imports
import { Card} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// components
import MenuBar from "@/components/menu/bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("p-5 flex items-center justify-center", appFont.className)}>
        <Card className="w-full h-full grow flex flex-col gap-1 shadow-xl border bg-white bg-opacity-95">
          <div className="px-3 bg-slate-100 rounded-t-xl border-b">
            <MenuBar />
          </div>
          <div className="grow flex flex-col gap-5 px-2">
            {children}
          </div>
        </Card>
        </body>
    </html>
  );
}
