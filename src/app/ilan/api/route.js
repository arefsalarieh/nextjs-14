//  Cookies in Route Handlers
// cookies are small pieces of data that server sends to users browser
// browser may store the cookies and sent it back to same server with later request

import { headers } from "next/headers";

// cookies 3 purposes
// 1- login & shopping carts
// 2 - personalization like user preferences & themes
// 3 - tracking user behavior


export async function GET(request) {
  const headersList = headers();
  console.log(headersList.get("Authorization"));

  // reading request cookie
  const theme = request.cookies.get("theme");
  console.log(theme);


  return new Response("<h1>ilan / api route</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": `theme=dark`, // set cookie in response
    },
  }); 
}

// go to thunder client change the url to http://localhost:3000/ilan/api and send request at response click on cookie tab you will see this cookie
