import { comments } from "./data";

// first install Thunder Client extentions

// simple Get
// export async function GET() {
//     return Response.json(comments)
// }

// click on Thunder Client icon on lef of vs code
// click New Request button
// change url to http://localhost:3000/extra
// click send button



// Get with query parameter
// whe url change to http://localhost:3000/extra?query=first we expect see the comments that includes 'first' in them
export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;
    return Response.json(filteredComments);
  }

// go to browser or Thunder Client and write  http://localhost:3000/extra?query=first in url 




// for post 
export async function POST(request) {
    const comment = await request.json();
    const newComment = { id: comments.length + 1, text: comment.text };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  }

// click on Thunder Client icon on lef of vs code
// click New Request button
// kill the project and run it again
// change url to http://localhost:3000/extra
// change methode from get to post
// go to BODy tap then JSON tab
// add this obj in down box 
// {
//     "text" : "new comment"
//   }
// click on send button
