import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"
import Footer from "./components/Footer";

const App = () => {
    const card = data.map(val => {
      return <Card
                key={val.id} 
                {...val}
              />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
              {card}
            </section>
            <Footer />
        </div>
    )
}

export default App;