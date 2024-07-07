import { NextResponse } from "next/server";
import connectDB from "@/utiles/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utiles/auth";



export async function POST(req){

  try {
    await connectDB()

    const {email,password} = await req.json()
    // console.log(email,password)

    if (!email || !password){
      return NextResponse.json({message:"لطفا اطلاعات معتبر وارد کنید"},{status:422})
    }

    const existingUser = await User.findOne({email:email})
    // console.log(existingUser)
    
    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    // console.log(newUser);

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد",status: 201  }
    );

  } catch (error) {
    console.log(error)
    return NextResponse.json({error:"مشکلی در سمت سرور رخداده است"},{status:500})
  }
} 