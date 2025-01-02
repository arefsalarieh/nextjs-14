import { redirect } from "next/navigation";
import { comments } from "../data";

// dynamic route handler
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

// click on Thunder Client icon on lef of vs code
// click New Request button
// change url to http://localhost:3000/extra/1
// click send button




// PATCH for update
export async function PATCH(
    request,
    { params }
  ) {
    const body = await request.json();
    const { text } = body;
  
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
  }

  // click on Thunder Client icon on lef of vs code
// click New Request button
// kill the project and run it again
// change url to http://localhost:3000/extra/1
// change methode from get to PATCH
// go to BODy tap then JSON tab
// add this obj in down box 
// {
//     "text" : "new comment"
//   }
// click on send button
// then change methode to get and delet /1 from url and click on send button

export async function DELETE(
    _request ,
    { params }
  ) {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  }
  
// click on Thunder Client icon on lef of vs code
// click New Request button
// kill the project and run it again
// change url to http://localhost:3000/extra/1
// change methode from get to DELETE
// click on send button
// then change methode to get and delet /1 from url and click on send button