import { NextResponse } from "next/server";
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie';
import { COOKIE_NAME } from '../../../../../constants/index'



const MAX_AGE = 60 * 60 * 24 * 30; // DAYS 

export async function POST(request){
      const body = await request.json()
      const {username, password} = body;

      if (username !== 'user@example.com' || password !== '1Password'){
            return NextResponse.json(
                  {
                        message: 'Unauthorized',
                  },
                  {
                        status: 401
                  }
            );
      }

      //Always check this
      const secret = process.env.JWT_SECRET || "";

      const token = sign({ username }, secret, {
            expiresIn: MAX_AGE,
      });

      const serialized = serialize(COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: MAX_AGE,
            path: '/',
      });

      const response = {
            message: 'Authorized',
      }

      return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                  'Set-Cookie': serialized
            },
            
      })
      return NextResponse.redirect('/dashboard');

}