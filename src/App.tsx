import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
      <h1 className='bg-amber-200'>Hello</h1>
      <Button startIcon={<PlusIcon/>} size='lg' variant='primary' text='Add Content' onClick={()=>{}}/>
      <Button startIcon={<PlusIcon/>} size = 'sm' variant='secondary' text='Add Content' onClick={()=>{}}/>
    </>
  )
}

export default App
