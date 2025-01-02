import { cookies, headers } from "next/headers";

// second way for cookies
export async function GET(request) {
  const headersList = headers();
  console.log(headersList.get("Authorization"));

  cookies().set("resultsPerPage", "20");
  console.log(cookies().get("resultsPerPage")); // log at terminal

  // nextjs cookies has more methodw / write cookies().  to see the options

  return new Response("<h1>jack / api route</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  }); 
}

// go to thunder client change the url to http://localhost:3000/jack/api and send request at response click on cookie tab you will see this cookie

