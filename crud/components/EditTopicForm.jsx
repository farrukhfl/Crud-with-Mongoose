'use client'

import { useRouter } from "next/navigation"




function EditTopicForm({id, title, description}) {
const [newtitle, setNewTitle] = useState(title)
const [newdescription, setNewDescription] = useState(description)
const router = useRouter()
const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            method: "PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({newtitle, newdescription})
        })
        if(!res.ok){
            throw new Error("SOmething went wrong")
        }
        router.push('/')

    } catch (error) {
        console.log(error)
    }
}

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
    <input onChange={(e)=> setNewTitle(e.target.value)} value={newtitle} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title' />
    <input onChange={(e)=> setNewDescription(e.target.value)} value={newdescription} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' />
<button className='bg-green-600 font-bold text-white py-3 px-4 w-fit'>Edit Topic</button>
</form>
  )
}

export default EditTopicForm
