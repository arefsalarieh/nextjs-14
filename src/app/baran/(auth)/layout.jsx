export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          
        >
          <div className='h-10 bg-yellow-400'>Header2</div>
          {children}
          <div className=' h-10 bg-amber-500'>Footer</div>
        </body>
      </html>
    );
  }