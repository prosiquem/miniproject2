import './ApartmentCard.css'
import { Link } from 'react-router-dom'

const ApartmentCard = ({ id, city, name, bathrooms, price, review_scores_rating, removeApartment, room_type, property_type }) => {

    const customCardStyle = {
        backgroundColor: review_scores_rating > 85 ? '#c1ffc1' : 'white'
    }

    return (

        <article className="ApartmentCard" style={customCardStyle}>

            <Link to={`/ApartmentDetails/${id}`}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9516e180691313.5ce82f4b6d95f.jpg" alt="Apartment" /></Link>
            <Link to={`/ApartmentDetails/${id}`}> <div className="details">
                <h3>{name}</h3>
                <p>{
                    room_type === "Entire home/apt" ? room_type : `${room_type} in ${property_type}`
                }</p>
                <hr />
                <p>Precio por noche: {price}€ | {bathrooms} baños {bathrooms > 2 ? '😊' : '😡'} | Ciudad: {city}</p>
                <p>Puntuación: {review_scores_rating} de media</p>
            </div></Link>
            <button onClick={() => removeApartment(id)}>Eliminar propiedad</button>
        </article>
    )
}

export default ApartmentCard