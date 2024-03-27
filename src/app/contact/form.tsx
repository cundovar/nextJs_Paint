'use client'

import React, { ChangeEvent, FormEvent, useState } from "react";
// import style from "../../style/Form.modules.css" 


export default function Form(){

    const [formData,setFormData]=useState({
        nom:"",
        mail:""
    })

    const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
        // destructuration
        const {type,name,value}=event.target
        setFormData(prev =>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const handlesubmit=(event: FormEvent<HTMLFormElement>)=>{

        event.preventDefault()
        console.log(formData)
       

    }


    return (
        <div className="">
            <form onSubmit={handlesubmit}>
                <label>nom</label>
                <input 
                  type="text"
                  placeholder="entrez votre nom"
                  value={formData.nom || ""}
                  name="nom"
                  onChange={handleChange}
                  className=" text-slate-900"
                  />
                <label>mail</label>
                <input 
                  type="mail"
                  placeholder="entrez votre mail"
                  value={formData.mail || ""}
                  name="mail"
                  onChange={handleChange}
                  className=" text-slate-900"
                />
                <button type="submit">envoyer</button>
            </form>
        </div>
    )
}