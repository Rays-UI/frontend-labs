import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'
import { Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/Button'


export default function Home() {
  return (
    <div>
      <main className='main w-screen h-screen'>
        <Sidebar />

        {/* page content */}
        <div className='content'>
          {/* header */}
          <div className='p-5 flex justify-between items-center'>
            {/* search */}
            <div>
              <SearchBar />
            </div>
            {/* buttons */}
            <div className='flex-all'>
              <Button variant={'ghost'} size={'sm'}>
                <Shuffle size={18} strokeWidth={1.5} />
                Random component
              </Button>
              <Button size={'sm'}>Contribute</Button>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
