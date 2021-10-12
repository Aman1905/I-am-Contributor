import React from 'react'
import './Card.css'
import ContributorData from './ContributorData'
// 
// 
const Contributor = () => {
    return (
        <>
        <h2>I am Contributor 😉</h2>

        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4">
                        {
                            ContributorData.map((elem) => {

                                return (
                                    <div className="row mr-5 mt-3" key={elem.id}>
                                    <div className="card radius-15 "
                                    
                                    style={{
                                       backgroundColor : elem.id%2===0 ? '#E23A3A' : '#2596be'
                                    }}>
                                        <div className="card-body">
                                            <div className="p-4 radius-15">

                                                <img src={elem.img} width="110" height="110" className="rounded-circle shadow p-1 bg-white text-center" alt="" />

                                                <strong><h6 className="mb-0 mt-4 text-black">Hey Everyone 👋</h6></strong>

                                                <h4 className="mb-0 mt-2 text-white">{elem.name}</h4>

                                                <strong><h6 className="mb-0 mt-4 text-black">My skills :- </h6></strong>
                                                <ul>
                                                    <li className="mt-3 text-white">{elem.skill1}</li>
                                                    <li className="text-white">{elem.skill2}</li>
                                                    <li className="text-white">{elem.skill3}</li>
                                                    <li className="mb-4 text-white">{elem.skill4}</li>
                                                </ul>

                                                <div className="list-inline contacts-social mt-3 mb-3">

                                                    <a href={elem.g_link} className="list-inline-item border-0" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>

                                                    <a href={elem.t_link} className="list-inline-item border-0" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>

                                                    <a href={elem.l_link} className="list-inline-item border-0" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contributor
