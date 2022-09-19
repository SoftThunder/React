
import './App.css';

function App() {
  const userName = 'Алексей'
  const numberDz = 1
  const plugin = 'React Devtools'
  return (
    <div className="App">
      <Message name={userName} number={numberDz} extens={plugin} />

    </div>
  );
}

export default App;

const Message = (props) => {
  const { name, number, extens } = props

  return (
    <div className='message'>
      <h1>{name} Сделал своё домашнее задание № {number}</h1>
      <h1>И установил {extens} в браузере</h1>
    </div>
  )
}