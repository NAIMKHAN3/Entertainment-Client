import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
   <div>
    <Toaster/>

    <h1 className='text-4xl font-semibold text-red-600'>Entertainment movie website</h1>
   </div>
  )
}
