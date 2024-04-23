'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

function addTopic() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()
const handleSubmit = async(e) => {
e.preventDefault()
if(!title || !description){
    alert("Title or Description is missing")
    return
}
try {
    const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({title, description})
    })

    if(res.ok){
router.push('/')
    } else
    {
        throw new Error("Something went wrong")
    }
} catch (error) {
    console.log(error)
}
}

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input onChange={(e)=> setTitle(e.target.value)} value={title} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title' />
        <input onChange={(e)=> setDescription(e.target.value)} value={description} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' />
    <button className='bg-green-600 font-bold text-white py-3 px-4 w-fit'>Add Topic</button>
    </form>
  )
}

export default addTopic
