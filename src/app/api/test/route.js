import connectDB from "@/config/conn";
import Colleges from "@/models/colleges";
import { NextRequest, NextResponse } from "next/server";

const handler = async (NextRequest, NextResponse) => {
    console.log("All connect done");
  try {
    await connectDB(); 
   
    const response = Colleges.find({})

    return new NextResponse(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ msg: "Something went wrong" }), {
      status: 500,
    });
  }
};

export { handler as POST, handler as GET };