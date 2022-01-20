import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

const App = () => {
    const card = data.map(val => {
      return <Card
                key={val.id} 
                img={val.coverImg}
                rating={val.stats.rating}
                reviewCount={val.stats.reviewCount}
                location={val.location}
                title={val.title}
                price={val.price}
              />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
              {card}
            </section>
        </div>
    )
}

export default App;