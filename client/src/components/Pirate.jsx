import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Pirate = () => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams()

    // fetch signle pirate by id
    useEffect(() => {
        axios.get("http://localhost:8000/api/" + id)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            {/* {JSON.stringify(pirate)} */}
            <h1>{pirate.name}</h1> 
            <Link to="/pirates">Crew Board</Link>

            <div style={{ width: 800, display: 'flex', justifyContent: "space-around", margin: "auto"}}>
                <div>
                    <img src={pirate.img_url} alt={`img for ${pirate.name}`} style={{ width: 100, height: 100 }} />
                    <h2>"{pirate.pirate_catch_phrase}"</h2>
                </div>
            
                <div>
                    <h2>About</h2>
                    <p>Position: {pirate.crew_position}</p>
                    <p>Treasure: {pirate.treasure_chests_num}</p>
                    <p>Peg Leg: {pirate.peg_leg ? 'Yes' : 'No'} <button>{!pirate.peg_leg ? 'Yes' : 'No'}</button></p>
                    <p>Eye Patch: {pirate.eye_patch ? 'Yes' : 'No'} <button>{!pirate.eye_patch ? 'Yes' : 'No'}</button></p>
                    <p>Hook Hand: {pirate.hook_hand ? 'Yes' : 'No'} <button>{!pirate.hook_hand ? 'Yes' : 'No'}</button></p>
                </div>
            </div>
        </div>
    )
}

export default Pirate
