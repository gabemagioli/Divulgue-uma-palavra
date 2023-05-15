import { useState } from 'react';
import './App.css';
import Criar from './componentes/criacao/Criar';
import Header from './componentes/header/Header';
import Principal from './componentes/principal/Principal';

function App() {

  const [obras, setObras] = useState([{id:1, nome:'Fenômenos da Natureza', autor:'Jô Benevides', poema:`Vejo a pedra do anel
  Percebo a floresta refletida nela!
  No lilás, as folhas verdes
  No lilás, os galhos
  No lilás, o espaço entre os ramos
  Na pequenina pedra extraída do ventre da terra
  Projeta-se sem delongas a natureza viva da superfície
  Sempre de novo, o dentro-fora
  A ametista como oráculo
  Que a tudo contém
  O vento se revela
  No movimento das folhas
  Espelhadas no brilho vivo
  De tudo que um dia foi
  E no futuro-luz que voltará a ser.`},{id:3, nome:'O Bicho', autor:'Manuel Bandeira', poema:`Vi ontem um bicho
  Na imundície do pátio
  Catando comida entre os detritos.

  Quando achava alguma coisa,
  Não examinava nem cheirava:
  Engolia com voracidade.
  
  O bicho não era um cão,
  Não era um gato,
  Não era um rato.
  
  O bicho, meu Deus, era um homem.`}]);

  //pontos
  const [pontuacao, setPontuacao] = useState(0);



  return (
    <div className="App">
        <Header />
        <Principal obras={obras} setObras={setObras} pontuacao={pontuacao} setPontuacao={setPontuacao} />
        <Criar obras={obras} setObras={setObras} pontuacao={pontuacao} setPontuacao={setPontuacao} />
    </div>
  );
}

export default App;
