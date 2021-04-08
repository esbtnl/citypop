import React from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

import "../css/cityForm.css"

export default function CityForm(props) {
    const { register, handleSubmit } = useForm();
    const { onSubmit } = props

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("city")} placeholder="City" name="city" id="searchBar"/>
                <br/>
                <button type="submit" id="searchBtn"><FaSearch id="search " size={42}/></button>
            </form>
        </div>

    )
}
