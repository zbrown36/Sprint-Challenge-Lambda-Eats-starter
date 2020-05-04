import React, {useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().test('len',"must enter atleast 2 characters for your name", val => val.length === 2)
});

export default function Form() {

    const [buttonDisabled, setButtonDisabled] = useState(true);

    // state management for form
    const [formState, setFormState] = useState({
        name:"",
        size:"",
        sauce:"",
        toppings:"",
        sub:"",
        sinstructions:""
    });

    // state management for errors
    const [errors, setErrors] = useState({
        name:"",
        size:"",
        sauce:"",
        toppings:"",
        sub:"",
        sinstructions:""
    });

    //new state so that it is visible in console
    const [post, setPost] = useState([]);

    useEffect(() => {
        formState.schema.isValid(formState).then(valid => {setButtonDisabled(!valid);
        });
    }, [formState]);

    const formSubmit = e => {

        e.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            setPost(res.data);
            console.log("success", post);

            setFormState({
                name:"",
                size:"",
                sauce:"",
                toppings:"",
                sub:"",
                sinstructions:""
            });
        })
        .caatch(err => console.log(err.response));
    };

    const validateChange = e => {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]:""
            });
        });
    };

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };

        validateChange(e);
        setFormState(newFormData);
    };

    return(
        <form onSubmit = {formSubmit}>
            <label htmlFor='size'>
                Size
                <select
                id='size'
                name='size'
                onChange={inputChange}>
                    <option value='small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>
                </select>
            </label>

            <label htmlFor='sauce' className='selectors'>
                <input type='checkbox' name='original' checked={formState.original} onChange={inputChange} /> Original
                <input type='checkbox' name='bbq' checked={formState.bbq} onChange={inputChange} /> BBQ
            </label>

            <label htmlFor='toppings' className='selectors'>
                <input type='checkbox' name='pepperoni' checked={formState.pepperoni} onChange={inputChange} /> Pepperoni
                <input type='checkbox' name='sausage' checked={formState.sausage} onChange={inputChange} /> Sausage
                <input type='checkbox' name='bacon' checked={formState.bacon} onChange={inputChange} /> Bacon
                <input type='checkbox' name='onions' checked={formState.onions} onChange={inputChange} /> Onions
                <input type='checkbox' name='olives' checked={formState.olives} onChange={inputChange} /> Olives
                <input type='checkbox' name='pineapple' checked={formState.pineapple} onChange={inputChange} /> Pineapple
            </label>

            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button disabled={buttonDisabled}>Add To Order</button>

        </form>
    )

}