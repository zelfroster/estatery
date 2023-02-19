import "@fontsource/hauora-sans/600.css"
import "@fontsource/hauora-sans/800.css"

import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import Rent from "./components/Rent.component";

function App() {
  return (
    <div className="min-h-screen bg-mainBgColor flex flex-col text-darkPurple font-hauoraSans font-semibold">
      <Header />
      <Rent />
      <Footer />
    </div>
  );
}

export default App;
