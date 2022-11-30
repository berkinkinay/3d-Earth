import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'
import './index.css';
//COMPONENTS
import { Earth } from './components/earth/Earth'


function App() {
  return (

  <div class="earth">
    <Canvas>
      <Suspense fallback= {null}>
        <Earth />
      </Suspense>
    </Canvas>
  </div>
   );
  }

export default App;