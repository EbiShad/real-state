import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "700px" }}> {children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
