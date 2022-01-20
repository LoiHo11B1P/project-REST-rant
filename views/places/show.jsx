const React = require('react');
const Def = require('../default');

function show (data, id) {
    return (
        <Def>
            <main className='container p-5' >
                <div className='row'>
                    <div className='col'>
                        <img width={'400em'} height={'400em'} src={'../'+data.place.pic} alt={ data.place.name}></img>
                    </div>
                    <div className='col'>
                        <h1>{ data.place.name }</h1>
                        <br></br>
                        <h3>Rating</h3>
                        <p>Not Rated</p>
                        <h3>Description</h3>
                        <p>{ `Locate in ${data.place.city}, ${data.place.state} and serving ${data.place.cusines}`}</p>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3>Comments</h3>
                        <p>No Comments yet!</p>
                    </div>
                </div>
                <div className='row'>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>     
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 
                </div>
            </main>
        </Def>
    )
}

module.exports = show