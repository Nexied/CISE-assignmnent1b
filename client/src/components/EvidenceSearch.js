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

    //TODO: Try get the list of SE methods from a database/script list
    const claimsList = [
        { label: "Improves Code Quality", value: "Improves Code Quality"},
        { label: "More efficient code production", value: "Code Production Efficiency"},
        { label: "Improve Team Quality", value: "Improve team quality"},
        { label: "Improve App Quality",  value: "Improve app quality"}
    ];
        
    useEffect(() => {
        console.log("Website loaded!");
        //console.log("Print id: " + props.match.params.id);   
    }, []);

    const onChange = e => {
        console.log(e);
        setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value });
        console.log(searchInfo);
    }

    const onSelectChange = (e, attribute) => {
        console.log(e.value);
        console.log("The actual attribute: " + attribute);
        setSearchInfo({...searchInfo, [attribute]: e.value});
    }


    const onSubmit = e => {
        e.preventDefault();
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

                            <Link to={{
                                pathname:`/show-results`, 
                                searchParams: {...searchInfo}
                                }}
                                className="btn btn-outline-info btn-lg btn-block">
                                View Results
                            </Link>
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
