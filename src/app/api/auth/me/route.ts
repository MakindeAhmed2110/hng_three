import { cookies } from "next/headers";
import { COOKIE_NAME } from '../../../../../constants/index'
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export async function GET(){
      const CookieStore = cookies ()


      const token = CookieStore.get(COOKIE_NAME);

      if (!token) {
            return NextResponse.json(
                  {
                        message: 'UnAuthorized',
                  },
                 { 
                        status: 401,
                  }
            )
      }
      
      const {value} =token;

     //Always check this
     const secret = process.env.JWT_SECRET || "";

      try{
            verify(value, secret);

            const response = {
                  user:"gallery user",
            }

            return new Response(JSON.stringify(response),{
                  status: 200
            });
      }catch (e){
            return NextResponse.json(
                  {
                        message: 'Something went wrong',
                  },
                 { 
                        status: 401,
                  }
            )
      }
}