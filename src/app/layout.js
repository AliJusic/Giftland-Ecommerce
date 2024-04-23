import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GIFTLAND",
  description: "Mobile and Technology Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <GlobalProvider> */}
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
      {/* </GlobalProvider> */}
    </html>
  );
}
