'use client'

const ErrorPage = ({error , reset}) => {
  return (
    <div>
        <h1>ErrorPage</h1>
        {/* <h1>{error}</h1> */}
        <button onClick={()=>reset()}>reset</button>
    </div>
  )
}

export default ErrorPage