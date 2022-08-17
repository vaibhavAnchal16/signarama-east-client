import { Footer } from "./Footer";
import { Header } from "./Header";
import { TopBar } from "./TopBar";

export default function Layout({ children }) {
  return (
    <>
      {/* <TopBar /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
