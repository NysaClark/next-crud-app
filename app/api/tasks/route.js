import connectDB from "@/libs/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

// POST - create task
export async function POST(req) {
  const { title, description } = await req.json();

  await connectDB();

  await Task.create({ title, description });

  return NextResponse.json({ message: "Task Created" }, { status: 200 });
}

// GET - get all tasks
export async function GET() {
  await connectDB();

  const tasks = await Task.find();

  return NextResponse.json({ tasks }, { status: 200 });
}

// DELETE - delete task w/ ID
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await connectDB();

  await Task.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Task deleted" }, { status: 200 });
}
