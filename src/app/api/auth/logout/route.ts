// pages/api/logout.js

import { serialize } from "cookie";
import { COOKIE_NAME } from '../../../../../constants/index'
import { sign } from "jsonwebtoken";

export async function POST() {
      
  // Clear the session-related cookie by setting its expiration date to the past.
  const expiredCookie = serialize(COOKIE_NAME, "", {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1, // Set the maxAge to a negative value to expire the cookie
    path: '/',
  });

  const response = {
      message: 'Logged out',
}

  // Respond to the client with a success message or a redirection.
  return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
            'Set-Cookie': expiredCookie
      },
      
})

}