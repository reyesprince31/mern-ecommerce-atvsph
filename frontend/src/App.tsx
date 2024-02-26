import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/pages/HomeScreen";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="container p-4">
        <HomeScreen />
      </main>
      <Footer />
    </div>
  );
}
