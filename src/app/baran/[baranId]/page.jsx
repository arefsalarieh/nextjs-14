// dynamic metadata


export const generateMetadata = ({params}) =>{
    return{
        title:`title = ${params.baranId}`,
        description :`description = ${params.baranId}`
    }
}


// with api

// export const generateMetadata =async ({params}) =>{
//     const res = await fetch.get(`......${baranId}`)
//     const resualt = await res.json()
//     return{
//         title:resualt.data.title,
//         description :resualt.data.description
//     }
// }

const Baran = () => {
  return (
    <div>Baran</div>
  )
}

export default Baran