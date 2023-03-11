import { useState } from "react"
import axios from "axios"

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
            setLoading(true)
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            try {
                const res = await axios.post('https://formsubmit.co/ajax/thomasreemeerie0@gmail.com', form)
                setResponse(res)
                setLoading(false)   
            } catch (error) {
                console.log(error)
            }   
        }
    }

    return { form, errors, handleChange, handleBlur, handleSubmit, response, loading }
}