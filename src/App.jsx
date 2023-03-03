import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [numeros, setNumeros] = useState([]);
  const [numero, setNumero] = useState(0);


  const onAddnumero =()=>{
    setNumeros(list => [...list,numero])
    setNumero()
  }

  const onSetNumero = (evt) => {
    setNumero(evt.target.value)
}






  return (
    <div className="App">
     <h1>Chanceria</h1>
     <div>
     <h2>Numero</h2>
     <input
          type="number"
          id="segundos"
          value={numero}
          onChange={(event) => setNumero(event)}
        />
     </div>
     <div>
     <h2>Precio</h2>
     <input type="number" id="numero" name="numero"/>
     </div>
     <div>
     <button onClick={() =>onAddnumero()}>Agregar</button>
        <ol>
            {
                numeros.map(
                    (numero, key)=>
                    {
                        return <li key= {key} > {numero}</li>
                    }
                
                )
            }
        </ol>
     </div>



     

    </div>
  )
}

export default App
