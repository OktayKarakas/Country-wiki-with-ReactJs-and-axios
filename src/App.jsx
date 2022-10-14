import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [country, setCountry] = useState([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountry(response.data)) //axios json'a dönüştürme işini kendisi hallediyor.
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      {country.map((item) => {
        return (
          <div key={item.name.common} className="container">
            <div className="country-box">
              <img src={item.flags.png} className="flag" />
              <p className="country-name">{item.name.common}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
