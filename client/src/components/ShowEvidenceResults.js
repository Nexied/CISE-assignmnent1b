import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EvidenceCard } from './EvidenceCard';

export const  ShowEvidenceResults = (props) => {

    const [searchParameters, setSearchParameters] = useState({});
    const [searchResults, setSearchResults] = useState([{}]);
    //const [resultsDisplay, setResultsDisplay] = useState([]);

    let displayItems;

    useEffect(() => {
        console.log("ShowEvidencePage Loaded!");
        console.log(props.location.searchParams);
        setSearchParameters(props.location.searchParams);

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

    if(searchResults) {
        displayItems = <table class="table text-light">
            {
                searchResults.map((result, k) =>
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