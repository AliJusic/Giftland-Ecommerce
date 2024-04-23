import ShopNavBar from "../components/ShopNavbar/ShopNavbar";

export default function RootLayout({ children }) {
  return (
    <section>
      <ShopNavBar />
      <main>{children}</main>;
    </section>
  );
}
