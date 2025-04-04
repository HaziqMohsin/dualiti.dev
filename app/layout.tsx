import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Pointer } from "@/components/magicui/pointer";

const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dualiti.dev",
  description: "Digital Tech – Web App Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-primary-400`}>
        {children}
        <Pointer>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="8" className="fill-secondary-800" />
            <circle cx="12" cy="12" r="4" className="fill-primary-400" />
          </svg>
        </Pointer>
      </body>
    </html>
  );
}
