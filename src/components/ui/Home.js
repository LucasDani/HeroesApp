import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="container mt-n4">
            <div className="row justify-content-around">
                <Link to="/marvel">
                    <div className="col-auto">
                        <div className="card bg-dark text-black">
                            <img src="assets/MarvelLogo.png" className="card-img img-fluid" alt="Marvel Comics" style={{ width: 700 }} />
                        </div>
                    </div>
                </Link>
                <Link to="dc">
                    <div className="col-auto">
                        <div className="card bg-dark text-black">
                            <img src="assets/DCLogo.png" className="card-img img-fluid" alt="Marvel Comics" style={{ width: 700 }} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
