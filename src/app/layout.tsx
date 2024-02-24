import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

// import providers
import QueryProvider from "@/contexts/queryProvider";

const appFont = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Template App",
  description: "template app to be used ... somewhere",
  icons: {},
};

// imports
import { Card} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// components
import MenuBar from "@/components/menu/bar";
import { ThemeProvider } from "@/contexts/themeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="flex items-center justify-center p-5">
        <Card className="flex h-full w-full grow flex-col gap-1 border bg-white bg-opacity-95 shadow-xl">
          <div className="rounded-t-xl border-b bg-slate-100 px-3">
            <MenuBar />
          </div>
          <div className="mb-2 flex-grow overflow-auto px-2">
            <ThemeProvider>
              <QueryProvider>{children}</QueryProvider>
            </ThemeProvider>
          </div>
        </Card>
      </body>
    </html>
  );
}
