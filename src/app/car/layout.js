'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    {name:'benz' , href:'/car/benz'},
    {name:'bmw' , href:'/car/bmw'},
]


export default function RootLayout({ children }) {
    const pathName = usePathname()
    return (
      <html lang="en">
        <body>
         {navlinks.map(item=>{
            const isActive = pathName.startsWith(item.href)
            return <Link href={item.href} className={isActive ? 'ms-4 text-red-400' : 'ms-4'}>{item.name}</Link>
         })}
          {children}
         
        </body>
      </html>
    );
  }

