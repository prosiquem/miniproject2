const ApartmentCard = ({ name, id, country, deleteApartment }) => {

    return (
        <div className="ApartmentCard">
            <h3>{name}</h3> ({country})
            <p></p>
            <button onClick={() => deleteApartment(id)}>ELIMINAR APARTAMENTO</button>
        </div>
    )

}

export default ApartmentCard