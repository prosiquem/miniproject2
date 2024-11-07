import { useState } from "react"

const ApartmentForm = ({ addApartment }) => {

    const [apartment, setApartment] = useState("")

    const [score, setScore] = useState(0)

    const [city, setCity] = useState("")

    const [bathrooms, setBathrooms] = useState(0)

    const [price, setPrice] = useState(0)

    const [entirehomeApt, setEntirehomeApt] = useState(false)



    const handleApartmentChange = e => {
        const { value } = e.target
        setApartment(value)
    }
    const handleScoreChange = e => {
        const { value } = e.target
        setScore(value)
    }
    const handleCityChange = e => {
        const { value } = e.target
        setCity(value)
    }
    const handleBathroomsChange = e => {
        const { value } = e.target
        setBathrooms(value)
    }
    const handlePriceChange = e => {
        const { value } = e.target
        setPrice(value)
    }
    const handleEntirehomeAptChange = e => {
        const { checked } = e.target
        setEntirehomeApt(checked)
    }
    const handleApartmentsubmit = e => {
        e.preventDefault()
        const apartmentData = { apartment: apartment, score: score, city: city, bathrooms: bathrooms, price: price, entirehomeApt: entirehomeApt }
        addApartment(apartmentData)
    }

    return (
        <div className="ApartmentForm">
            <form onSubmit={handleApartmentsubmit}>
                Apartment
                <input type="text" value={apartment} onChange={handleApartmentChange} />
                <br>
                </br>
                Score
                <input type="number" value={score} onChange={handleScoreChange} />
                <br>
                </br> City
                <input type="text" value={city} onChange={handleCityChange} />
                <br>
                </br> Bathrooms
                <input type="number" value={bathrooms} onChange={handleBathroomsChange} />
                <br>
                </br> Price
                <input type="number" value={price} onChange={handlePriceChange} />
                <br>
                </br>
                Entire home/Apt
                <input type="checkbox" value={entirehomeApt} onChange={handleEntirehomeAptChange} />
                <br /> <hr />
                <input type="submit" value={"New Apartment"} />
            </form>
        </div>
    )
}
export default ApartmentForm