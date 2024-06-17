import React from "react";
import { useOutletContext, Link } from "react-router-dom";

export default function HostVanDetail() {

  const [van] = useOutletContext()


  return (
    <section className="host-van-detail-container">   
          <div className="host-van-details">
            <p>
              <strong>Name:</strong> {van.name}
            </p>
            <p>
              <strong>Category:</strong> {van.type}
            </p>
            <p>
              <strong>Description:</strong> {van.description}
            </p>
            <p>
              <strong>Visibility:</strong> public
            </p>
          </div>
    </section>
  );
}
