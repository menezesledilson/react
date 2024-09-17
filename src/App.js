import './App.css';
 
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List';

function App() {
  const name = 'Maria'
return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
         
         <SayMyName name=" Matheus"/>
         <SayMyName name=" João"/>
         <SayMyName name={name}/>
         <Pessoa 
         nome="Rodrigo" 
         idade ="28" 
         profissao="Programador" 
         foto="https://via.placeholder.com/150"
         />
         <List/>
     </div> 
  );

}

export default App;
