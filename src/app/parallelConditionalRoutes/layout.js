export default function RootLayout({
  children,
  notification,
  review,
  userAboute,
  login,
}) {
  const isLoggedin = false
  return isLoggedin ?  (
    <div>
      <div className=" h-20  bg-green-300">{notification}</div>
      <div className="flex text-center">
        <div className="border-2 border-black w-1/2">
          <div className="h-40 border-2 border-gray-400 pt-16">{review}</div>
          <div className="h-40 border-2 border-gray-400 pt-16">
            {userAboute}
          </div>
        </div>
        <div className="h-80 w-1/2 border-2 border-gray-400 pt-16">
          {children}
        </div>
      </div>
    </div>
  ) : (login)

}