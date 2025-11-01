import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon/>} size='md' variant='primary' text='Add Content' onClick={()=>{}}/>
      <Button startIcon={<ShareIcon/>} size = 'sm' variant='secondary' text='Add Content' onClick={()=>{}}/>
      <Card title='Hello' link='https://www.youtube.com/watch?v=1i04-A7kfFI&t=7s' type='youtube'/>
      <Card title='Hello' link='https://x.com/aakash_kalla/status/1984539137068642612' type='twitter'/>
    </>
  )
}

export default App
