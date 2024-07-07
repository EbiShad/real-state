import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utiles/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utiles/auth";


export const authOptions = {
    session:{strategy:"jwt"},
    providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        
        try {
            await connectDB()
        } catch (error) {
            throw new Error("مشکلی در سرور رخ داده است")
        }
    
        if(!email || !password){
            throw new Error("تطفا اطلاعات معتبر وارد کنید")
        }

        const user = await User.findOne({email:email})

        if(!user){
            throw new Error("شما هنوز ثبت نام نکردید")
        }

  
        const isValid = await verifyPassword(password,user.password)

        if(!isValid){
            throw new Error("ایمیل یا کد ورود شما صحیح نمیباشد")
        }
       
        return {email}
      }
    })
  ]

}

const handler = NextAuth(authOptions) 

export {handler as GET , handler as POST}



