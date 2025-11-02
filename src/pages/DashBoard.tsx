import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModel } from '../components/CreateContentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/SideBar'

function DashBoard() {
  const [modelOpen , setModelOpen] = useState(false) 
  return (
    <> 
      <SideBar/>
      <div className='ml-72 min-h-screen bg-slate-300'>
        <CreateContentModel open={modelOpen} onClose={() => setModelOpen(c=> !c)}/>
        <div className='flex justify-end gap-4 pt-2'>
          <Button startIcon={<PlusIcon/>} size='md' variant='primary' text='Add Content' onClick={()=>setModelOpen(c => !c)}/>
          <Button startIcon={<ShareIcon/>} size = 'sm' variant='secondary' text='Add Content' onClick={()=>{}}/>
        </div>
        
        <div className='flex gap-4'>
          <Card title='Hello' link='https://www.youtube.com/watch?v=1i04-A7kfFI&t=7s' type='youtube'/>
          <Card title='Hello' link='https://x.com/aakash_kalla/status/1984539137068642612' type='twitter'/>
        </div>
      </div>
    </>
  )
}

export default DashBoard
