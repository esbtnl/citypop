import React from "react";
import { useForm } from "react-hook-form";

export default function CityForm(props) {
    const { register, handleSubmit } = useForm();
    const { onSubmit } = props

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("city")} placeholder="city" name="city" />
                <br/>
                <input type="submit" />
            </form>
        </div>

    )
}
