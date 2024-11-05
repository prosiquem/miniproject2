import { useState } from 'react'
import apartmentdata from "./../../data/apartments.json"
import ApartmentCard from './../ApartmentCard'

const ApartmentList = () => {

    const [apartments, setApartments] = useState(apartmentdata.results)

    const handleApartmentRemoval = idToDelete => {
        const filteredApartments = apartments.filter(eachApartment => eachApartment.id != idToDelete)
        setApartments(filteredApartments)
    }

    return (
        <div className="ApartmentsList">

            <h1>Apartment List</h1>

            {
                apartments.map(eachApartment => {
                    return (<ApartmentCard
                        key={eachApartment.id}
                        deleteApartment={handleApartmentRemoval}
                        {...eachApartment} />
                    )
                })
            }

        </div>
    )
}

export default ApartmentList