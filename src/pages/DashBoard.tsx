import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { CreateContentModel } from '../components/CreateContentModel'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { SideBar } from '../components/SideBar'
import { useContent } from '../hooks/useContent'

function DashBoard() {
  const [modelOpen , setModelOpen] = useState(false) 
  const contents = useContent()
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
          {contents.map(({ link, title, tags }) => {
            const type = link.includes("youtu") ? "youtube" : "twitter";
            return <Card key={link} title={title} link={link} type={type} tag={tags || ""} />;
            })}
        </div>
      </div>
    </>
  )
}

export default DashBoard
