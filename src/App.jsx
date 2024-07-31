import React from 'react';
import Wonderwoman from './assets/Herous/Wonderwoman';
import Betmen from './assets/Herous/Betmen';
import Halk from './assets/Herous/Halk';
import Spiderman from './assets/Herous/Spiderman';
import Ironman from './assets/Herous/Ironman';
import Superman from './assets/Herous/Superman';
import './App.css'

function App() {
  return(
  <React.Fragment>
<div className='card'>
    <Halk/>
    <Betmen/>
    </div>
    <div className='card'>
  <Wonderwoman/>
  <Ironman/>
  </div>
  <div className='card'>
  <Spiderman/>
  <Superman/>
  </div>
    
</React.Fragment>
  );
}

export default App
