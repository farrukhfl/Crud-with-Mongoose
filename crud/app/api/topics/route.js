import connectToMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(request){
    const {title, description} = await request.json()
    await connectToMongoDB()
    await Topic.create({title , description})
    return NextResponse.json({message: "Topic created"}, {status: 201})

}

export async function GET(){
    await connectToMongoDB()
    const topic = await Topic.find()
    return NextResponse.json({topic})
}


export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await connectToMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: "Topic Deleted"}, {status: 200})
}