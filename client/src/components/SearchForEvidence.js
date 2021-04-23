

export const SearchForEvidence = () => {
    return (
        <div className="container-fluid bg-dark text-light">
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

                            <label className="lead fs-3">SE Practice:</label>
                            <select className="form-control" name="se-practice">
                                <option value="TDD">TDD</option>
                            </select>
                            <br></br>

                            <label className="lead fs-3">Claim:</label>
                            <select className="form-control" name="claim">
                                <option value="Improves Code Quality">Improves Code Quality</option>
                            </select>
                            <br></br>

                            <label className="lead fs-3">Year Range:</label>
                            <input className="form-control" type="text" name="year-start" placeholder="Start Year"></input>
                            <input className="form-control" type="text" name="year-end" placeholder="End Year"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
