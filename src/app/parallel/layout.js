export default function RootLayout({ children , notification , review , userAboute }) {
    return (
      <html lang="en">
        <body
  
        >
            {notification}
          
          {children}
          {review}
          {userAboute}
          
        </body>
      </html>
    );
  }