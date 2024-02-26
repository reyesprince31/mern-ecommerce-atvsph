import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="container mx-auto my-16">
        <HomeScreen />
      </main>

      <Footer />
    </div>
  );
}
