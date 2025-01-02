import { redirect } from "next/dist/server/api-utils";
import { comments } from "../extra/data";
import { cookies, headers } from "next/headers";

//1- simple route handler get request
export async function GET() {
    return new Response("aboute route handler");
}
// in http://localhost:3000/aboute



//2- nested route handler
export async function GET() {
    return new Response("baran / b1 route handler");
  }
// in http://localhost:3000/baran/b1



//3- real route handler with query
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
    return Response.json(filteredComments);
  }
// when url change to http://localhost:3000/extra?query=first we expect see the comments that includes 'first' in them
  


//4- dynamic route handler
export async function GET(
  _request,  // because its useless we put a _ at first
  { params }
) {
    if (parseInt(params.id) > comments.length) {
        redirect("/extra");
      }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}
// change url to http://localhost:3000/extra/1

  


//5- get headers params in request 
// sent from client (browser) to server contain some info
// a) 'User-Agent' : indentifies the browsw=er and system to server
// b) 'Accept' : contain the content type like text , video or images format that the client can process
// c) 'Authorization'  : to authenticate client to server

// first way
export async function GET(request) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  return new Response("gol / api route");
}
// go to thunder client in headers tab add new item {Authorization : Bearer1234} and change url to http://localhost:3000/gol/api then send request then you can see log in terminal

// second way
export async function GET(request) {
  const headersList = headers();
  console.log(headersList.get("Authorization"));

  return new Response("gol / api route");
}
// go to thunder client in headers tab add new item {Authorization : Bearer1234} and change url to http://localhost:3000/gol/api then send request then you can see log in terminal





// 6- set headers in response 
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





// 7 -  simple Cookies in Route Handlers 
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

  

  // 8-Cookies in Route Handlers with next options
  // second way for cookies
  export async function GET(request) {
    const headersList = headers();
    console.log(headersList.get("Authorization"));
  
    cookies().set("resultsPerPage", "20");
    console.log(cookies().get("resultsPerPage")); // log at terminal
  
    // nextjs cookies has more methodw => write cookies().  to see the options
  
    return new Response("<h1>jack / api route</h1>", {
      headers: {
        "Content-Type": "text/html",
      },
    }); 
  }
  // go to thunder client change the url to http://localhost:3000/jack/api and send request at response click on cookie tab you will see this cookie
  





// 9 - Caching in Route Handlers 
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
  }
// at develope mode with every refresh it will be updata
// but at build mode it cache and dont change



// 10 -Caching in Route Handlers - dynamic mode
// for solving cache problems
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
