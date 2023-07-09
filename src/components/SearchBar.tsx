import { Search as SearchIcon } from 'lucide-react'
import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-4 peer-focus:text-white items-center text-text-light bg-background-dark px-4 py-3 w-96 rounded-xl'>
        <SearchIcon width={20} height={20} strokeWidth={1.5} />
        <input type="text" placeholder='search by property, category and more' className='bg-transparent focus:text-white  outline-none text-sm w-full' />
    </div>
  )
}

export default SearchBar