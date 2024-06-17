import React from "react"
import { useOutletContext, useParams } from "react-router-dom";

export default function HostVanPhotos() {
    const params = useParams();
    const [van] = useOutletContext()

    return (
        <section className="host-van-photo">
            <img src={van.imageUrl} alt="van image" />
        </section>
    )
}