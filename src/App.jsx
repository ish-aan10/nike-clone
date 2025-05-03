import Essentials from "./components/Essentials";
import Featured from "./components/Featured";
import GearUp from "./components/GearUp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ShopOne from "./components/ShopOne";

const App = () => (
  <main className="relative font-montserrat">
    <Navbar />
    <section>
      <Hero />
    </section>
    <section>
      <Featured />
    </section>
    <section>
      <ShopOne />
    </section>
    <section>
      <Essentials />
    </section>
    <section>
      <GearUp />
    </section>
  </main>
)

export default App;