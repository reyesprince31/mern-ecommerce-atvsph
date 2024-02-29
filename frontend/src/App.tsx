import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="container mt-24 p-4 ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
