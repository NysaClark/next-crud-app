import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from "@/models/Task";

// PUT - update task w/ id
export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle, newDescription } = await req.json();
  
  await connectDB();

  await Task.findByIdAndUpdate(id, {title: newTitle, description: newDescription});

  return NextResponse.json({ message: "Task updated"}, {status: 200})
}

// GET - get task w/ id
export async function GET(req, {params}){
    const {id} = params;

    await connectDB(); 

    const task = await Task.findOne({ _id: id });

    return NextResponse.json({ task }, {status: 200})
}