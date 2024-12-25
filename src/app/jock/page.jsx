// for query
// http://localhost:3000/jock?name=ali

const Jock = ({searchParams}) => {
    console.log(searchParams);
  return (
    <div>your name is = {searchParams.name}</div>
  )
}

export default Jock