import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const TicketForm = () => {

    //dichiaro la variabile di stato che racchiude le proprietà in un oggetto
    //vado a mettere tutti i value
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,

    });

    //funzione per gestire evento onChange
    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
    };



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
                                <input type="text" name='author' className='form-control' placeholder='Author' value={formData.author}
                                    onChange={handleChange} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='control-label'>Title</label>
                                <input type="text" name='title' className='form-control' placeholder='Title' value={formData.title}
                                    onChange={handleChange} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className='control-label'>Body</label>
                                <textarea name="body" id="body" className='form-control' value={formData.body}
                                    onChange={handleChange}>Inserisci testo</textarea>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <label className="control-label" htmlFor="">
                                        Rendi il post pubblico
                                    </label>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="public"
                                            name="public"
                                            value="pubblica"
                                            checked={formData.public === "pubblica"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="" className='form-check-label'>
                                            Pubblica
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="public"
                                            name="public"
                                            value="non pubblicare"
                                            checked={formData.public === "non pubblicare"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="" className='form-check-label'>
                                            Non Pubblicare
                                        </label>
                                    </div>


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