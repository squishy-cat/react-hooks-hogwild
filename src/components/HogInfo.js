import React, {useState} from "react";

function HogInfo( {hog} ) {
    const [clicked, setClicked] = useState(false)
    function handleClick() {
        setClicked(true)
    }
    return (
        <div class="pigTile" onClick={handleClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name}></img>
            {clicked 
            ? <p>Specialty: {hog.speciality}</p> : null
            ? <p> Greased:{hog.greased ? true : false}</p> : null
            ? <p> Weight: {hog.weight}</p> :null
            ? <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p> :null
            }
        </div>
    )
}

export default HogInfo;