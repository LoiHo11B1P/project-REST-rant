const React = require('react');
const Def = require('../default');

function show (data, id) {
    return (
        <Def>
            <main className='container p-5' >
                <div className='row'>
                    <div className='col'>
                        <img width={'400em'} height={'400em'} src={'../'+data.place.pic} alt={ data.place.name}></img>
                        <h3>
                            Locate in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col'>
                        <h1>{ data.place.name }</h1>
                        <br></br>
                        <h3>Rating</h3>
                        <p>Not Rated</p>
                        <h3>Description</h3>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>

                        <h4>Serving {data.place.cuisines}</h4>
                        <div className='row'>
                            <div className="col-12 py-3">
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning col-2"> 
                                Edit
                            </a>     
                            <form className='py-3' method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                                <i className="bi bi-pen-fill"></i>
                                <span className="bi-search"></span>
                                    Delete
                                </button>
                            </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3>Comments</h3>
                        <p>No Comments yet!</p>
                    </div>
                </div>
                <div className='row'>
                   
                
                
                </div>
            </main>
        </Def>
    )
}

module.exports = show