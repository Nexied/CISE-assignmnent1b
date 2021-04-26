import React, {useState, useEffect} from 'react';
import Select from 'react-select';

export const EvidenceSearch = () => {

    const [seMethods, setSEMethods] = useState([]);
    const [claims, setClaims] = useState([]);

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
    }, []);

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
                            {/* <select className="form-control" name="se-practice">
                                <option disabled hidden selected>Select SE Practice</option>
                                {optionsList}
                            </select> */}
                            <Select className="text-dark"
                                options={seList} 
                            />
                            <br></br>

                            <label className="lead fs-2">Claim:</label>
                            {/* <select className="form-control" name="claim">
                                <option disabled hidden selected>Select Claim</option>
                                <option value="Improves Code Quality">Improves Code Quality</option>
                            </select> */}
                            <Select className="text-dark"
                                options={claimsList} 
                            />
                            <br></br>

                            <label className="lead fs-2">Year Range:</label>
                            <input className="form-control" type="text" name="year-start" maxLength="4" placeholder="Start Year e.g. 2000"></input>
                            <input className="form-control" type="text" name="year-end" maxLength="4" placeholder="End Year e.g. 2010"></input>

                            <button className="btn btn-default bg-dark text-light border border-light mt-3" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
