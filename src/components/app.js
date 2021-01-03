import React, { useState } from 'react';
import '../style/app.css';

// export default class App extends Component {
//   render() {
//     return (
//       <div className='app'>
//         <h1>DevCamp React Starter</h1>
//         <h2>React Redux Router</h2>
//       </div>
//     );
//   }
// }

function App() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id:1 }, { id:2 }, { id:3 }, { id:4 }]
  })
  return (
    <div className="App">
      {appState.objects.map((elements, index) => (
        <div key={index} className='box inactive' onClick={}></div>
      ))}
    </div>
  )
}

export default App;