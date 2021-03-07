import { useState } from "react";
import { useForm } from "react-hook-form";

const AddHero = ({setHeroes, heroes}) => {
    
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        setHeroes(heroes => [...heroes, data])
        
        
    }

    
    
    return ( 
        < div className="container">
        <form onSubmit={handleSubmit(onSubmit)} id="contact">
                <h3>Add Hero Form</h3>
                <h4>Include all Fields</h4>
                <fieldset>
                    <input type="text" name="heroName" placeholder="Hero-Name" ref={register}/>
                </fieldset>
                <fieldset>
                    <input type="url" name="pic" placeholder="Hero-Url" ref={register}/>
                </fieldset>
                <fieldset>
                    <input type="text" name="powers" placeholder="Hero-Power" ref={register}/>
                </fieldset>
                <fieldset>
                <textarea type="text" placeholder="Heroes Biography" name=
                "bio" ref={register}/>
                </fieldset>
                <button type="submit" id="contact-submit">Submit</button>
        </form>
        </div>
     );
}
 
export default AddHero;