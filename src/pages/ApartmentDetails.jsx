import { useParams } from "react-router-dom"
import apartmentsData from "./../data/apartments.json"
import { useState } from "react"
import { Link } from "react-router-dom"

function ApartmentDetails() {

    const { ApartmentId } = useParams()
    const selectedApartment = apartmentsData.results.find(eachApartment => eachApartment.id === ApartmentId)
    const [apartment, setApartment] = useState(selectedApartment)
    console.log(ApartmentId)



    return (
        <div>
            <h1>{apartment.name}</h1>
            <ul>
                <li>
                    <span>{apartment.city}</span>
                </li>
                <li>
                    <span>{apartment.host_name}</span>
                </li>
            </ul>
            <p>{apartment.description}</p>
            <Link to={"/"} > <button>back to dashboard</button></Link>
        </div>
    )
}
export default ApartmentDetails