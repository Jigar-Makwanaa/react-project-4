import { useState } from "react";

const Form = () => {

    const [inputFields, setInputFields] = useState([{
        name: '', email: '', salary: ''
    }])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }


    const addFields = () => {
        let newfield = { name: '', email: '', salary: '' }
        setInputFields([...inputFields, newfield])
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields)
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    return (
        <>

            <>
                <div className="form-section">
                    <div className="container">
                        <div className="row">
                            <div className="form">
                                <h1>React-Add & Delet Table Rows Dynamically</h1>

                                <div className="heading">
                                    <div className="box">
                                        <h2>Full name</h2>
                                    </div>
                                    <div className="box">
                                        <h2>Email Address</h2>
                                    </div>
                                    <div className="box">
                                        <h2>Salary</h2>
                                    </div>
                                    <div className="box">
                                        <button onClick={submit} className="done"><i class="fa-solid fa-check"></i></button>
                                        <button onClick={addFields} className="add"><i class="fa-solid fa-plus"></i></button>
                                    </div>

                                </div>

                                <form onSubmit={submit}>
                                    {
                                        inputFields.map((input, index) => {
                                            if(index==0){
                                                return (
                                                    <div key={index} className="form-data">
                                                        <div className="div">
                                                            <input
                                                                name='name'
                                                                placeholder='Full Name'
                                                                value={input.name}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="div">
                                                            <input
                                                                name='email'
                                                                placeholder='Email Address'
                                                                value={input.age}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
        
                                                        <div className="div">
                                                            <input
                                                                name='Salary'
                                                                placeholder='Salary'
                                                                value={input.age}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="div">
                                                            
                                                        </div>
        
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div key={index} className="form-data">
                                                        <div className="div">
                                                            <input
                                                                name='name'
                                                                placeholder='Full Name'
                                                                value={input.name}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="div">
                                                            <input
                                                                name='email'
                                                                placeholder='Email Address'
                                                                value={input.age}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
        
                                                        <div className="div">
                                                            <input
                                                                name='Salary'
                                                                placeholder='Salary'
                                                                value={input.age}
                                                                onChange={event => handleFormChange(index, event)}
                                                            />
                                                        </div>
                                                        <div className="div">
                                                            <button onClick={() => removeFields(index)} className="remove"><i class="fa-solid fa-xmark"></i></button>
                                                        </div>
        
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Form;