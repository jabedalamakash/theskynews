import { Inter } from "next/font/google";
import toast, { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Sky News",
  description: "Bangladeshi Top Class Newspaper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
     
        {children}
        <Toaster/>
        </body>
    </html>
  );
}
