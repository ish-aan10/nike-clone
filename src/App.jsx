import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
      SuperQuality
    </section>
    <section>
      Services
    </section>
    <section>
      SpecialOffer
    </section>
  </main>
)

export default App;