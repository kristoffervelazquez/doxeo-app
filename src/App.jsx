import React from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import ClienteIP from './components/ClienteIP'

const App = () => {

    const ipCliente = useFetch('https://api.ipify.org/?format=json');
    


    return (
        <>
            <header className="cabecera"> <h1>DOXEO APP</h1> </header>

            <div className="container">
                <ClienteIP datos = {ipCliente} />               
            </div>
        </>
    )
}

export default App