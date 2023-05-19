import "./globals.css";
import { Inter } from "next/font/google";
import style from './layout.module.scss'

const inter = Inter({ subsets: ["latin"]});

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
        <div className={style.Page}>{children}</div>
      </body>
    </html>
  );
}

