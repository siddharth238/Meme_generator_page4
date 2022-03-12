import React from "react"
 

export default function Form() {
    
    const [formdata, setFormdata]=React.useState({
        email:"",
        password:"",
        confirmpassword:"",
        checkbox:true,
        a:""
    })

   
    function handleChange(event){
        const {name,value,type,checked}=event.target
        setFormdata(prevstate=>{
            return{
                ...prevstate, [name]: type==="checkbox"? checked: value
            }
        })
    }
     
    
    function handleSubmit(event) {

        event.preventDefault()
        
        if(formdata.password === formdata.confirmpassword &&  formdata.password.length>0) {
            setFormdata(prevstate=>{
                return{...prevstate, a:("Successfully signed up")}})
        } else {
            setFormdata(prevstate=>{
                return{...prevstate, a:("Passwords do not match")}})
             
            return
        }
        
        if(formdata.checkbox) {
            setFormdata(prevstate=>{
                return{...prevstate, a:prevstate.a.concat(" ,Thanks for signing up for our newsletter!")}})
             
        }
       

    }
    
    return (
        <div className="form-container">
            { formdata.a.length>0 &&  <div className="output"> {formdata.a} </div>}
            <form className="form1" onSubmit={handleSubmit}>
            
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formdata.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formdata.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirmpassword"
                    value={formdata.confirmpassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="checkbox"
                        checked={formdata.checkbox}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
               
            </form>
             
        </div>
    )
}
