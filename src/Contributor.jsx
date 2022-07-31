import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import ContributorData from './ContributorData'

function Contributor() {
  return (
    <div>
      <div><Navbar /></div>
      {ContributorData.map((data) => {
        return(
          <Card 
            img={data.img}
            name={data.name}
            skill1={data.skill1}
            skill2={data.skill2}
            skill3={data.skill3}
            skill4={data.skill4}
            l_link={data.l_link}
            g_link={data.g_link}
            t_link={data.t_link} />
        )
      })}
    </div>
  )
}

export default Contributor