import React, {useState, useEffect} from 'react';

export const SearchForEvidence = () => {

    const [seMethods, setSEMethods] = useState([]);
    const [claims, setClaims] = useState([]);

    //Temporary SE Methods list
    const itemsList = ["TDD", "FDD", "SCRUM", "UNIT-TESTING", "AGILE"];

    //Try get the list of SE methods from a database/script list
    const optionsList = itemsList.map((item) => 
            <option>{item}</option>
        );
        
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
                            <select className="form-control" name="se-practice">
                                <option disabled hidden selected>Select SE Practice</option>
                                {/* <option value="TDD">TDD</option> */}
                                {optionsList}
                            </select>
                            <br></br>

                            <label className="lead fs-2">Claim:</label>
                            <select className="form-control" name="claim">
                                <option disabled hidden selected>Select Claim</option>
                                <option value="Improves Code Quality">Improves Code Quality</option>
                            </select>
                            <br></br>

                            <label className="lead fs-2">Year Range:</label>
                            <input className="form-control" type="text" name="year-start" placeholder="Start Year"></input>
                            <input className="form-control" type="text" name="year-end" placeholder="End Year"></input>

                            <button className="btn btn-default bg-dark text-light border border-light mt-3" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
