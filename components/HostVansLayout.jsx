import React from "react";
import { NavLink, Link, Outlet, useParams } from "react-router-dom";

export default function HostLayout() {
  const {id} = useParams();
  const [van, setVan] = React.useState(null);

  let activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(...data.vans));
  }, [id]);

  return (
    <div className="host-vans-layout">
        {van ?
        (
            <div className="main-host-vans-layout">
            <header>
            <div className="host-van-detail-container">
          <div className="back-link">
            <Link to="/host/vans">&larr; Back to all vans</Link>
          </div>
          <div className="host-van-detail-card">
            <img src={van.imageUrl} />
            <div className="content">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2>{van.name}</h2>
              <p className="van-price">
                <span>${van.price}</span>/day
              </p>
            </div>
          </div>
        </div>
      </header>
      <nav className="nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            Photos
          </NavLink>
        </nav>
      <Outlet context={[van]} />
    
      
      </div>
        )
        : (
            <h2>Loading...</h2>
        )
    }
 </div>       
    
  );
}
