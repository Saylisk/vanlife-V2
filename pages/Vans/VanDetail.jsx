import React, { Suspense } from "react";
import {
  Link,
  useParams,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../api";

export function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

export default function VanDetail() {
  const location = useLocation();
  const loaderData = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Suspense fallback={<h2>Loading the van detail...</h2>}>
        <Await resolve={loaderData.van}>
          {(van) => {

            return (
            <>
              <Link to={`..${search}`} relative="path" className="back-button">
                &larr; <span>Back to {type} vans</span>
              </Link>
              <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price">
                  <span>${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            </>
            )
          }}
        </Await>
      </Suspense>
    </div>
  );
}
