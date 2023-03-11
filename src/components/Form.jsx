import React from 'react'
import "../styles/Form.css"
import { useForm } from '../hooks/useForm'

const initialForm = {
    name: '',
    surname: '',
    email: '',
    comments: ''
}

const validateForm = (form) => {
    let errors = {}
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,100}$/
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

    if (!form.email.trim()) {
        errors.email = "Porfavor ingrese un mail"
    } else if (!regexEmail.test(form.email.trim())){
        errors.email = "Porfavor ingrese un mail valido"
    }
    
    if (!form.name.trim()) {
        errors.name = "Porfavor ingrese un nombre"
    } else if(!regexName.test(form.name.trim())) {
        errors.name = "Porfavor ingrese un nombre valido"
    }

    if (!form.surname.trim()) {
        errors.surname = "Porfavor ingrese un apellido"
    } else if(!regexName.test(form.surname.trim())) {
        errors.surname = "Porfavor ingrese un apellido valido"
    }

    if (!form.comments.trim()) {
        errors.comments = "Porfavor escriba un comentario"
    } else if(form.comments.length > 250) {
        errors.comments = "Porfavor no sobrepase los 250 caracteres"
    }

    return errors
}

const Form = () => {
    const { form, errors, handleChange, handleBlur, handleSubmit, response, loading } = useForm(initialForm, validateForm)

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div id='contact'></div>
        <h2 className='formTitle'>Contacto</h2>
        <p className='formDesc'>Comunicate con nosotros ya sea para solucionar tus dudas o para pedir tu seguro al mas bajo costo:</p>
        <div className="formContainer">
            <div className='flexRow'>
                <div className='column'>
                    <div className='formGroup name'>
                        <input onChange={handleChange} onBlur={handleBlur} name='name' type="text" id='name' className='formInput' placeholder=' ' value={form.name}/>
                        <label htmlFor="name" className='formLabel'>Nombre</label>
                        <span className='formLine'></span>
                    </div>
                    {errors.name ? <p className='error'>{errors.name}</p> : <></>}
                </div>
                <div className='column'>
                    <div className='formGroup surname'>
                        <input onChange={handleChange} onBlur={handleBlur} name='surname' type="text" id='surname' className='formInput' placeholder=' ' value={form.surname}/>
                        <label htmlFor="surname" className='formLabel'>Apellido</label>
                        <span className='formLine'></span>
                    </div>
                    {errors.surname ? <p className='error'>{errors.surname}</p> : <></>}
                </div>
            </div>
            <div className='column'>
                <div className='formGroup'>
                    <input onChange={handleChange} onBlur={handleBlur} name='email' type="email" id='email' className='formInput' placeholder=' ' value={form.email}/>
                    <label htmlFor="email" className='formLabel'>Email</label>
                    <span className='formLine'></span>
                </div>
                {errors.email ? <p className='error'>{errors.email}</p> : <></>}
            </div>
            <div className='column'>
                <div className='formGroup'>
                    <textarea onChange={handleChange} onBlur={handleBlur} name='comments' spellCheck='false' id='comments' className='formInput' placeholder=' ' value={form.comments}/>
                    <label htmlFor="comments" className='formLabel'>Comentarios</label>
                    <span className='formLine commentsLine'></span>
                </div>
                {errors.comments ? <p className='error'>{errors.comments}</p> : <></>}
            </div>
            {!response && <input type="submit" className='formSubmit' value='Enviar'/>}
            {loading ? <div className='spinner'></div> : <></>}
            {response && <p  className='success'>Gracias por confiar en nosotros. Te contactaremos a la brevedad</p>}
        </div>
    </form>
  )
}

export default Form