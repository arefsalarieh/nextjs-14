export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
  }

// at develope mode with every refresh it will be updata
// but at build mode it cache and dont change