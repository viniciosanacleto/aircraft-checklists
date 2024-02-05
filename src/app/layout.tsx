import "./globals.css";
import { Inter } from "next/font/google";
import style from "./layout.module.scss";
import Footer from "@/widgets/Footer/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aircraft Checklists",
  description: "Aircraft checklists for flight simulation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={style.PageContainer}>
          {children}
          <Footer className={style.Footer}/>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
