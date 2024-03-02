import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />

      <main className="mt-24 max-w-screen-xl mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
