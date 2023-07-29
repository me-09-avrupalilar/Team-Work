import React from 'react'

const FilmInfo = ({data}) => {
  console.log(data)
  return (
    <div>
      {data.map((item)=>{
        const {id,title,body,tags,date,rate}=item
        return(
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
              <p>{tags.join(", ")}</p>
              <p className='rate text-danger fs-4'>{rate.toFixed(2)}{"/10"}</p>
              

            </div>
        )
      })}
    </div>
  )
}

export default FilmInfo