import React from "react"
import { useOutletContext } from "react-router-dom";


export default function HostVanPricing() {
    const [van] = useOutletContext()

    return (
        <section className="host-van-pricing">
            <h2><strong>${van.price}</strong>/day</h2>
        </section>
    )
}