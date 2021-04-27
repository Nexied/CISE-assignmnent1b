import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { EvidenceCard } from './EvidenceCard';


export const EvidenceSearch = () => {

    const [seMethods, setSEMethods] = useState([]);
    const [claims, setClaims] = useState([]);
    const [searchInfo, setSearchInfo] = useState({
        seMethod: '',
        claim: '',
        startYear: '',
        endYear: ''
    });


    const [testObj, setTestObj] = useState([{}]);
    const [showResults, setShowResults] = useState(false);
    const [evidenceCardTest, setEvidenceCards] = useState([]);


    //Temporary SE Methods list
    const seList = [
        { label: "TDD", value: "TDD"},
        { label: "FDD", value: "FDD"},
        { label: "SCRUM", value: "SCRUM"},
        { label: "UNIT-TESTING", value: "UNIT-TESTING"},
        { label: "AGILE", value: "AGILE"},
    ];

    const claimsList = [
        { label: "Improves Code Quality", value: "Improves Code Quality"},
        { label: "More efficient code production", value: "Code Production Efficiency"},
    ];



    //Try get the list of SE methods from a database/script list
    // const optionsList = itemsList.map((item) => 
    //         <option>{item}</option>
    //     );
        
    useEffect(() => {
        console.log("Website loaded!");
        //console.log("Print id: " + props.match.params.id);
        axios
            .get('http://localhost:8082/api/evidences/')
            .then(res => {
                console.log("Print-EvidenceSearch-API-response: " + res.data);
                console.log("The res data: " + res.data);
                setTestObj(res.data);
            })
            .catch(err => {
                console.log("Error from EvidenceSearch" + err.name);
            })      
    }, []);

    const onChange = e => {
        console.log(e);
        setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value });
        console.log(searchInfo);
        console.log(testObj);
    }

    const onSelectChange = (e, value) => {
        console.log(e);
        console.log(value);
    }

    const onSubmit = e => {
        e.preventDefault();
    }


    // if(testObj) {
    //     console.log("There is evidence!");

    //     evidenceCardTest = testObj.map((evid, k) =>
    //         <EvidenceCard evidenceData={evid} key={k} />
    //     );
    // }

    const ShowResultsTest = () => {
        if(testObj) {
            console.log("There is evidence!");
    
            setEvidenceCards(testObj.map((evid, k) =>
                <EvidenceCard evidenceData={evid} key={k} />
            ));
        }
    }


    return (
        <div className="container-fluid bg-dark text-light" style={{height: "100vh"}}>
            <div className="row">
                <div className="col-12">
                    {/* Nav bar here? */}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1 className="display-2">SEEDS</h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12" align="center">
                    <form>
                        <div className="form-group col-3">

                            <label className="lead fs-2">SE Practice:</label>
                            <Select className="text-dark" onChange = {(e) => {onSelectChange(e, "seMethod")}}
                                options={seList} 
                            />
                            <br></br>

                            <label className="lead fs-2">Claim:</label>
                            <Select className="text-dark" onChange={(e) => onSelectChange(e, "claim")}
                                options={claimsList} 
                            />
                            <br></br>

                            <label className="lead fs-2">Year Range:</label>
                            <input className="form-control" type="text" name="startYear" onChange={onChange} maxLength="4" placeholder="Start Year e.g. 2000"></input>
                            <input className="form-control" type="text" name="endYear" onChange={onChange} maxLength="4" placeholder="End Year e.g. 2010"></input>

                            <button className="btn btn-default bg-dark text-light border border-light mt-3" type="submit" onSubmit={onSubmit}>Search</button>
                            <button className="btn btn-default bg-dark text-light border border-light mt-3" type="button" onClick={ShowResultsTest}>Get Results</button>
                        </div>
                    </form>
                </div>
                <div>
                    {evidenceCardTest}
                </div>
            </div>
        </div>
    )
}
