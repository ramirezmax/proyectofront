import React from 'react'
import "./Home.css"
import "./Button/Button"

function Home() {
  return (
    <div id="Home" className="home">
        <h2>Bienvenidos!</h2>
        <h2>Welcome!</h2>
        <h2>Bemvindos!</h2>
        <h2>Willkommen!</h2>
    <section>
      <p>Lorem</p>
      <Button/>
    </section>
    </div>
  )
}

function Button() {
    return (
      <button>
          Read more
      </button>
    )
  }

export default Home