import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EvidenceCard } from './EvidenceCard';

export const  ShowEvidenceResults = (props) => {

    const [searchParameters, setSearchParameters] = useState({});
    const [searchResults, setSearchResults] = useState([{}]);

    let displayItems;

    useEffect(() => {
        console.log("ShowEvidencePage Loaded!");
        console.log(props.location.searchParams);
        if(props.location.searchParams) {
            console.log("there is props");
            setSearchParameters(props.location.searchParams);
        }

        // Ideally get the key of the object that is parsed into this component
        // via props.location.searchParams and then get the key/value pairs into the 
        //searchParameters state so that attributes can be accessed directly
        // console.log(Object.keys(searchParameters));

        //New info: change to statement above ^ 
        //Actually, it is a matter of using a triple dot operator as the prop
        //is actually an object inside an object rather than replacing the object
        //with the object's attributes

        axios
            .get('http://localhost:8082/api/evidences/')
            .then(res => {
                console.log("Print-ShowEvidenceResults-API-response: " + res.data);
                console.log("The res data: " + res.data);
                setSearchResults(res.data);
            })
            .catch(err => {
                console.log("Error from Show Evidence Results" + err.name);
            })  
    }, []);

    console.log(searchParameters.seMethod);

    //Filter Results:
    const filterResults = (data) => {
        let newResults = [];
        console.log(data);
        data.forEach(element => {
            if(element.sePractice === searchParameters.seMethod && element.claim === searchParameters.claim
                && element.year >= searchParameters.startYear && element.year <= searchParameters.endYear) {
                newResults.push(element);
            }
        });
        return newResults;
    }

    if(searchResults) {
        let results = filterResults(searchResults);
        console.log(results);
        displayItems = <table class="table text-light">
            {
                results.map((result, k) =>
                <EvidenceCard evidenceData={result} key={k}/>)
            }
        </table>
        console.log("There are results returned");
    }

    return (
        <div id="result-container" className="container-fluid bg-dark text-light" style={{height: "100%"}}>
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
            <div className="row">
                <div className="col-12">
                    <div className="container-fluid">
                        {displayItems}
                    </div>
                </div>
            </div>
        </div>
    )
}