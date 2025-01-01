

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          
        >
          <div className='h-10 bg-red-400'>Header2</div>
          {children}
          <div className=' h-10 bg-[purple]'>Footer</div>
        </body>
      </html>
    );
  }