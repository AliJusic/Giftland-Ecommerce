import ShopNavBar from "../components/ShopNavbar/ShopNavbar";
import Footer from "../components/Footer/Footer";
import { GlobalProvider } from "../GlobalProvider";

export default function RootLayout({ children }) {
  return (
    <section>
      <ShopNavBar />
      <main>{children}</main>
    </section>
  );
}
