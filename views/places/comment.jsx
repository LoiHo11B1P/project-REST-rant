const React = require('react');
const { discriminator } = require('../../models/comment');
const Def = require('../default')

function new_comment({placeId}) {
    return (
        <Def>
            <main className='container mt-4 border border-dark p-5'>
                <h1 className='mt-2'>New Comment</h1>
                <form method='POST' action={`/places/${placeId}/comment`}>
                    <div className='row'>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='author'>Author</label>
                            <input type="text" className='form-control' id='author' name='author'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-9'>
                            <label htmlFor='content'>Content</label>
                            <input type="textarea" className='form-control' id='content' name='content'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-3'>
                            <label htmlFor='rating'>Star Rating</label>
                            <input type="number" step="0.5" className='form-control' id='rating' name='stars'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-check col-sm-1 offset-1'>
                            <input type="checkbox" className='form-check-input' value="true" id='rant' name='rant'></input>
                            <label htmlFor='rant' className='form-check-label'>Rant</label>
                        </div>
                    </div>
                    <button className='btn btn-outline-primary' value="submit">Submit</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_comment;