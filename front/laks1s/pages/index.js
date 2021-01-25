
import React, { useState } from 'react';
import { Container } from 'react-bootstrap'


function Home({ data }) {


const [selected, setSelected] = useState("");



  function toggle(event){

    const valueToParse = event.target.value;
    const itemSelected = JSON.parse(valueToParse);
    console.log(valueToParse);
    setSelected(itemSelected);
    return;

  }


  return (
    <>
      <Container>
      <select onChange={toggle}>
        <option value=''>Escolha um elemento</option>
      {data.map((info) => (
        <option key='{info.number}'  value={JSON.stringify(info)}>{info.name}</option>
      ))}
      </select>
      <p>Nome: {selected.name}</p>
      <p>Massa atomica: {selected.atomic_mass}</p>
      <p>Densidade: {selected.density}</p>
      <p>Numero: {selected.number}</p>
      <p>Símbolo: {selected.symbol}</p>
      <p>Nome: {selected.electron_affinity}</p>
      </Container>
    </>
    )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:8000/status')
  const json = await res.json()
  return { data: json }
}

export default Home