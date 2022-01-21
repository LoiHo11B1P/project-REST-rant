const React = require('react');
const Def = require('../default');

function edit_form (data) {
    return (
        <Def>
            <main className='container'>
                <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
            <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" value={data.place.name} id="name" name="name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" value={data.place.pic} id="pic" name="pic" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" value={data.place.city} id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" value={data.place.state} id="state" name="state" />
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="form-group">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" value={data.place.cuisines} id="cuisines" name="cuisines" required />
                        </div>
                    </div>
                    <div className='row'> 
                        <div>
                            <input className="btn btn-primary my-3" type="submit" value="Edit Place" />
                        </div>
                    </div>
            </form>
            </main>
        </Def>
        
    )
}

module.exports = edit_form;