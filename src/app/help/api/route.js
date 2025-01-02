import { headers } from "next/headers";



// 2 - response headers
// sent back from the server to client . they provide info aboute the server and data being sent in the response
// a) 'Content-Type'  : show type of response such as text / HTML , ...
// go to thunder client and change the url to http://localhost:3000/gol/api
// at Headers tab add another field     (Authorization    :   Bearer 12345)



export async function GET(request) {

  const headersList = headers();
  console.log(headersList.get("Authorization"));

  // response header
  // return new Response("help / api route");     // if we write like this the response content type will be text
  // return new Response("<h1>help / api route<h1>");       // if we write like this the response content type also will be text
  return new Response("<h1>help / api route</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  }); // if we write like this the response content type will be text/html and output in browser will be changed
}

// go to thunder client and send request then you can see log in terminal
