import React from 'react'
import Cards from './Cards'

const Content = () => {
  return (
    <div>

      <Cards
        sname="Aman Chopra"
        skill1="Web Developer (React)"
        skill2="Cloud (AWS)"
        skill3="DevOps"
        skill4="Java"
        l_link="https://www.linkedin.com/in/aman-chopra-375a81171/"
        g_link="https://github.com/Aman1905"
        t_link ="https://twitter.com/iam_chopra_aman" />

      <Cards
        sname="Priyanshu Haldar"
        skill1="Frontend"
        skill2="Heroku"
        skill3="MongoDB"
        skill4="Java"
        l_link="https://www.linkedin.com/in/priyanshu-haldar-61b2731aa/"
        g_link="https://github.com/priyanshuhaldar007"
        t_link ="https://twitter.com/PriyanshuHalda5" />

    </div>
  )
}

export default Content
