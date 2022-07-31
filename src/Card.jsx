import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Card.css'

function Card (props) {
  return (
    <>
      <div className='cards'>
            <div className="card">
              <img src={props.img} className="card-img-top avatar-img" alt={props.img} />
              <div className="card-body">
                <h5 className="card-title">This is {props.name}</h5>
                  <div className='skill card'>
                  <h6 className="card-title">My Skills are 👇👇 </h6>
                    <p className="card-text">👉 {props.skill1}</p>
                    <p className="card-text">👉 {props.skill2}</p>
                    <p className="card-text">👉 {props.skill3}</p>
                    <p className="card-text">👉 {props.skill4}</p>
                  </div>
                  <div className='my-2' style={{alignItems: 'center', justifyContent: 'center'}}>
                    <a className='conn-card' href={props.l_link}><FaLinkedin /></a>
                    <a className='conn-card' href={props.g_link}><FaGithub /></a>
                    <a className='conn-card' href={props.t_link}><FaTwitter /></a>
                  </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default Card