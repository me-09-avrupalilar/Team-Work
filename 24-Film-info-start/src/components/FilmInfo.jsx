import React from 'react'

const FilmInfo = ({data}) => {
  console.log(data)
  return (
    <div>
      {data.map((item)=>{
        const {id,title,body,tag,date}=item
        return(
            <div>
              <h2>{title}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default FilmInfo