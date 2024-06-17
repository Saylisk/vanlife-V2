import { NavLink, Outlet, Link } from "react-router-dom";

export default function HostLayout() {

let activeLink = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616"
}

  return (
    <>
      <header>
        <nav>
          <NavLink to=".." relative="path" end style={({isActive}) => isActive ? activeLink : null}>Dashboard</NavLink>
          <NavLink to="income"style={({isActive}) => isActive ? activeLink : null}>Income</NavLink>
          <NavLink to="vans"style={({isActive}) => isActive ? activeLink : null}>Vans</NavLink>
          <NavLink to="reviews"style={({isActive}) => isActive ? activeLink : null}>Reviews</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
