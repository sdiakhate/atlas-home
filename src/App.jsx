import "./App.css";
import Footer from "./components/Footer";
import data from "./data/data.json";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <Navbar />
      <CardList data={data} />
      <Footer />
    </>
  );
}
export default App;
