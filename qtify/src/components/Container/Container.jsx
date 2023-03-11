import React from 'react'
import Card from '../../components/Card/Card'
import styles from './Container.module.css'

function Container({songData}) {

  
  return (
    <div className={styles.container}>

      {
        songData.map((data)=>{
          return(
            <Card data={data} key={data.id}/>
          )
        })
      }

      
    </div>
  )
}

export default Container
