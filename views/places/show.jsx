const React = require('react');
const Def = require('../default');

function show (data, id) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
       
    )
    if (data.place.comments.length) {
          comments = data.place.comments.map(c => {
            return (
              <div className="border" key={c.id}>
                <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }
    return (
        <Def>
            <main className='container p-5' >
                <div className='row'>
                    <div className='col'>
                        <img width={'400em'} height={'400em'} src={data.place.pic} alt={ data.place.name}></img>
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
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning col-2"> 
                                Edit
                            </a>     
                            <form className='py-3' method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
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
                        <h2>Comments</h2>
                        <a 
                            className='btn btn-primary'
                            href={`/places/${data.place.id}/comment`} 
                        >Add New Comment</a>
                        {comments}
                    </div>
                </div>
                <div className='row'>
                   
                
                
                </div>
            </main>
        </Def>
    )
}

module.exports = show