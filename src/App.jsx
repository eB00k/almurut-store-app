import Navbar from "./components/layouts/Navbar";
import Featured from "./pages/Featured";
import Home from "./pages/Home";

function App() {
  return (
    <main className="relative">
      <Navbar/>
      <Home />
      <Featured/>
    </main>
  );
}

export default App;
