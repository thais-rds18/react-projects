import React from 'react';
import {
  Text, Heading
} from '@chakra-ui/react';
import { useMyContext } from '../../contexts/context';
import './form.css'



const Radiobtn = () => {
  const { quest1, setQuest1, quest2, setQuest2, quest3, setQuest3 } = useMyContext();

  return (
    <>
      <div id='forms'>
        <Heading as='h1' size='2xl' noOfLines={1}> Questionário part 1 </Heading>
        <br />

        <form id='form' onChange={() => document.getElementById("form2").style.visibility = 'visible'}>
          <Text fontSize='3xl'>Qual é seu vilão favorito?</Text>
          <br /><br />
          <label>
            <input type="Radio" onClick={() => setQuest1('Tailung')} checked={((quest1 === 'Tailung') ? true : false)} /> Tailung</label>
          <br />
          <label>
            <input type="Radio" onClick={() => setQuest1('Shen')} checked={((quest1 === 'Shen') ? true : false)} /> Shen</label>
          <br />
          <label><input type="Radio" onClick={() => setQuest1('Kai')} checked={((quest1 === 'Kai') ? true : false)} /> Kai</label>
        </form>

        <br /><br /><br />

        <form id='form2' style={{ visibility: "hidden" }} onChange={() => document.getElementById("form3").style.visibility = 'visible'}>
          <Text fontSize='3xl'>Você acha o Shen MELHOR, certo?</Text>
          <br /><br />
          <label>
            <input type="Radio" onClick={() => setQuest2('Sim')} checked={((quest2 === 'Sim') ? true : false)} /> Sim</label>
          <br />
          <label>
            <input type="Radio" onClick={() => setQuest2('Claro')} checked={((quest2 === 'Claro') ? true : false)} /> Claro</label>
          <br />
          <label>
            <input type="Radio" onClick={() => setQuest2('Talvez')} checked={((quest2 === 'Talvez') ? true : false)} /> Talvez (Sim)</label>
        </form>

        <br /><br /><br />

        <form id='form3' style={{ visibility: "hidden" }}>
          <Text fontSize='3xl'>Você acha o Po mais forte que os heróis da Marvel?</Text>
          <br /><br />
          <label>
            <input type="Radio" onClick={() => setQuest3('Sim')} checked={((quest3 === 'Sim') ? true : false)} /> Sim</label>
          <br />
          <label>
            <input type="Radio" onClick={() => setQuest3('Não (Com certeza não viu todos os filmes)')} checked={((quest3 === 'Não (Com certeza não viu todos os filmes)') ? true : false)} /> Não</label>
          <br />
          <label>
            <input type="Radio" onClick={() => setQuest3('Talvez (Precisa rever os filmes)')} checked={((quest3 === 'Talvez (Precisa rever os filmes)') ? true : false)} /> Talvez</label>
          <br /><br />
        </form>
      </div>
    </>
  )
}
export default Radiobtn;


