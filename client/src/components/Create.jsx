import React, { useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [name, setName] = useState("")
    const [img_url, setImgUrl] = useState("")
    const [treasure_chests_num, setTreasureChestsNum] = useState(0)
    const [pirate_catch_phrase, setCatchPhrase] = useState("")
    const [crew_position, setCrewPosition] = useState("Captain")
    const [peg_leg, setPegLeg] = useState(true)
    const [eye_patch, setEyePatch] = useState(true)
    const [hook_hand, setHookHand] = useState(true)
    const [dbErrors, setDbErrors] = useState([])   // backend-validation
    const [pirates, setPirates] = useState([])
    const [count, setCount] = useState(0)
    const history = useHistory()
    
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

    const createPirate = (e) => {
        e.preventDefault()
        // check Captain if exists
        // when input is Captain, iterate all pirates
        if (crew_position === "Captain"){
            pirates.map((pirate) => { 
                // count all pirates not Captain
                if (pirate.crew_position !== "Captain"){
                    count += 1
                    setCount(count)
                }
            })
            
            if (count <= pirates.length - 1){
                if (!dbErrors.includes('Captain already exists')){
                    setDbErrors([...dbErrors, 'Captain already exists'])
                }
            } else{
                create()
            }
        }else{
            create()
        }
    }

    const create = () => {
        axios.post("http://localhost:8000/api/new", {
            name,
            img_url,
            treasure_chests_num,
            pirate_catch_phrase,
            crew_position,
            peg_leg,
            eye_patch,
            hook_hand
        })
            .then(res => {
                // create author successfully, redirect to main page
                console.log(res);
                history.push('/pirates')
            })
            .catch(err => {
                console.log(err);
                const { errors } = err.response.data
                const messages = Object.keys(errors).map(att => errors[att].message)
                setDbErrors(messages)
            })
    }

    const togglePegLeg = () => {
        const newPegLeg = !peg_leg
        setPegLeg(newPegLeg)
    }

    const toggleEyePatch = () => {
        const newEyePatch = !eye_patch
        setEyePatch(newEyePatch)
    }

    const toggleHookHand = () => {
        const newHookHand = !hook_hand
        setHookHand(newHookHand)
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <Link to="/pirates">Crew Board</Link>
            {dbErrors.map((error, idx) => <p key={idx} style={{ color: "red" }}> {error} </p>)}
            <form onSubmit={createPirate} style={{ width: 800, display: 'flex', justifyContent: "space-around", margin: "auto" }}>
                <div>
                    <p>
                        <label style={{ margin: 5 }}>Name: </label><br />
                        <input onChange={e => setName(e.target.value)} type="text" value={name} />
                    </p>

                    <p>
                        <label style={{ margin: 5 }}>Image url: </label><br/>
                        <input onChange={e => setImgUrl(e.target.value)} type="text" value={img_url} />
                    </p>

                    <p>
                        <label style={{ margin: 5 }}># of Treasure Chests: </label><br />
                        <input onChange={e => setTreasureChestsNum(e.target.value)} type="number" value={treasure_chests_num} />
                    </p>

                    <p>
                        <label style={{ margin: 5 }}>Pirate Catch Phrase: </label><br />
                        <input onChange={e => setCatchPhrase(e.target.value)} type="text" value={pirate_catch_phrase} />
                    </p>
                </div>

                <div>
                    <p>
                        <select onChange={e => setCrewPosition(e.target.value)} value={crew_position}>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </p>

                    <p> <input onChange={() => togglePegLeg()} type="checkbox" checked={peg_leg} /> Peg Leg</p>
                    <p> <input onChange={() => toggleEyePatch()} type="checkbox" checked={eye_patch} /> Eye Patch</p>
                    <p> <input onChange={() => toggleHookHand()} type="checkbox" checked={hook_hand} />Hook Hand</p>
                    <button>Add Pirate</button>
                </div>
            </form>
        </div>
    )
}

export default Create
