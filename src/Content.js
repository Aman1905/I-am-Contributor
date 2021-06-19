import React from 'react'
import Cards from './Cards'
import "./Content.css"

const Content = () => {
  return (
    <div className="main-cont">

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
    <Cards
        sname="Sonal Singh"
        skill1="Java"
        skill2="HTML"
        skill3="CSS"
        skill4="Bootstrap"
        l_link="https://www.linkedin.com/in/sonalsingh25/"
        g_link="https://github.com/sonalsingh25"
        t_link ="https://twitter.com/sonalsingh_77" />

    <Cards
        sname="Aniket Singh"
        skill1="C++"
        skill2="HTML"
        skill3="Js"
        skill4="Bootstrap"
        l_link="https://www.linkedin.com/in/aniket-singh-23b1101a8/"
        g_link="https://github.com/Aniketsingh1411"
        t_link ="https://twitter.com/AniketS71180497?s=09" />

    </div>
  )
}

export default Content
