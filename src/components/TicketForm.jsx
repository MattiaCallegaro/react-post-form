import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const TicketForm = () => {

    //dichiaro la variabile di stato che racchiude le proprietà in un oggetto
    //vado a mettere tutti i value per controllare gli input
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
        console.log(e.target)
        //destructoring del target per recuperare le proprietà del campo input modificato
        const { name, value, checked, type } = e.target;

        //imposto la variabile di stato richiamando setFormData
        setFormData({
            ...formData,
            //se il type è una checkbox metto il target su checked altrimenti su value
            [name]: type === 'checkbox' ? checked : value,
        })
    };
    //funzione per inviare il form
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
            console.log(resp.data)
        })

    };



    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h2>Ticket Form</h2>
                </div>
                <div className="col-12">
                    {/* `Form */}
                    <form onSubmit={handleSubmit} className='border rounded bg-light p-4'>
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
                                            checked={formData.public}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="" className='form-check-label'>
                                            Pubblica
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