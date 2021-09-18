import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = () => {
    const [pirates, setPirates] = useState([])

    // GET ALL PIRATES FROM SERVER
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => {
                console.log(res.data.allPirates);
                setPirates(res.data.allPirates);
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    // DELETE ONE PIRATE FROM DB
    const deletePirate = (delete_id) => {
        axios.delete('http://localhost:8000/api/' + delete_id)
            .then(res => {
                console.log(res.data)
                // remove pirate from DOM after success
                setPirates(pirates.filter(pirate => pirate._id !== delete_id))
            })
            .catch(err => console.error(err))
    }
    
    // list all pirates
    // add a pirate
    // read o
    // delete a pirate
    return (
        <div>
            <h1>Pirate Crew</h1>
            <Link to="/pirate/new">Add Pirate</Link>
            {pirates.map((pirate, idx) => 
                <div key={idx} style={{ margin: 20 }}>
                    <h3>{pirate.name}</h3>
                    <img src={pirate.img_url} alt={`img for ${pirate.name}`} style={{ width: 100, height: 100 }}/>
                    <button style={{ marginRight: 10 }}>
                        <Link to={`/pirate/${pirate._id}`}>View Pirate</Link>
                    </button>
                    <button onClick={e => { deletePirate(pirate._id) }}>
                        Walk the Plank
                    </button>
                </div>
            )}
        </div>
    )
}
export default Main
