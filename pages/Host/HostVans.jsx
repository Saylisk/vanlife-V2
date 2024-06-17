import React from "react"
import { Link } from "react-router-dom"


export default function HostVans() {

const [data, setData] = React.useState([])

fetch("/api/host/vans") 
    .then(res => res.json())
    .then(data => setData(data.vans))

let vansList = data.map(van => (
    <Link to={`${van.id}`} className="vans-list--card">
                <img src={van.imageUrl} alt="van image" />
                <div>
                    <h3>{van.name}</h3>
                    <span>${van.price}/day</span>
                </div>
    </Link>
))

    return (
        <div className="main--host--vans">
            <h1>Your listed vans</h1>
            <div className="vans--list">
                {vansList}
            </div>
        </div>
    )
}