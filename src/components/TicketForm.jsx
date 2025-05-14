import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const TicketForm = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h2>Ticket Form</h2>
                </div>
                <div className="col-12">
                    {/* `Form */}
                    <form action="" className='border rounded bg-light p-4'>
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="" className='control-label'>Author</label>
                                <input type="text" name='author' className='form-control' placeholder='Author' />
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='control-label'>Title</label>
                                <input type="text" name='title' className='form-control' placeholder='Title' />
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='control-label'>Body</label>
                                <textarea name="body" id="body" className='form-control'>Inserisci testo</textarea>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <label className="control-label" htmlFor="">
                                        Rendi il post pubblico
                                    </label>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="public"
                                        name="public"
                                    />

                                </div>
                            </div>
                            <div className="col-12">
                                <button type='submit' className="btn btn-primary">Invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TicketForm