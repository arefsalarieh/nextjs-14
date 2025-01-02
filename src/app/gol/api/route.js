import { headers } from "next/headers";

// export async function GET() {
//     return new Response("gol / api route");
// }

// headers in inside the api request and response

// 1 - Request headers
// sent from client (browser) to server contain some info
// a) 'User-Agent' : indentifies the browsw=er and system to server
// b) 'Accept' : contain the content type like text , video or images format that the client can process
// c) 'Authorization'  : to authenticate client to server


// for recive the headers parameter
export async function GET(request) {
// first way
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));

// second way
  const headersList = headers();
  console.log(headersList.get("Authorization"));

  return new Response("gol / api route");
}

// go to thunder client in headers tab add new item {Authorization : Bearer1234} and change url to http://localhost:3000/gol/api then send request then you can see log in terminal

