import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // console.log("Get")
  try {
    const id = req.url.split("blogs/")[1];
    console.log(id);

    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 200 });
  }
};
export const PUT = async (req: Request) => {
  //   console.log("Post");
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, desc);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
export const DELETE = async (req: Request) => {
  //   console.log("Delete");
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "ERROR", error }, { status: 500 });
  }
};
