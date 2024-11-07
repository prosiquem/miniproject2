import './ApartmentsList.css'
import apartmentsData from './../../data/apartments.json'
import { useState } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard'
import ApartmentForm from '../ApartmentForm/ApartmentForm'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(apartmentsData.results)

    const removeApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    const addApartment = (newApartment) => {
        const newApartments = [newApartment, ...apartments]
        setApartments(newApartments)
    }
    return (

        <div className="ApartmentsList">
            <ApartmentForm addApartment={addApartment} />

            {
                apartments.map(elm => {
                    return (
                        <ApartmentCard {...elm} removeApartment={removeApartment} key={elm.id} />
                    )
                })
            }
        </div>
    )
}

export default ApartmentsList