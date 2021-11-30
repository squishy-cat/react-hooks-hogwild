import React, {useState} from "react";
import hogs from "../porkers_data";
import HogInfo from "./HogInfo"

function HogTiles() {
    const [greased, setGreased] = useState(false)
    const [sort, setSort] = useState("none")

    function filterAndSortHogs() {
        const filtered = hogs.filter(hog => {
            if (greased){
                return hog.greased
            }
            else {
                return true
            }
        })

            if(sort === "None") {
                return filtered
            } else if (sort === "Name") {
                return filtered.sort((a, b) => {
                    if(a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                })
            } else {
                return filtered.sort((a, b) => {
                    if(a.weight < b.weight) {
                        return 1}
                    else {
                        return -1
                    }
                })
            }
    }   

    function renderHogs() {
            return filterAndSortHogs().map(hog => <HogInfo key={hog.name} hog={hog}></HogInfo>
        )
    }

    function handleClick() {
        setGreased(!greased)
    }

    function handleChange(event) {
        setSort(event.target.value)
    }

    return (
        <div>
            <button onClick={handleClick}>{ greased ? "All hogs" : "Greased hogs only" }</button>
            <select onChange={handleChange}>
                <option>None</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
            <div class="ui grid container">
                {/* Render hogs here! */}
                {renderHogs()}
            </div>
        </div>
    )
}

export default HogTiles;