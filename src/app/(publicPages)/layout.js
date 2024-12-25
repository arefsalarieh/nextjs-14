export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
       
        >
            <h1>public header</h1>
          {children}
          <h1>public footer</h1>

        </body>
      </html>
    );

}