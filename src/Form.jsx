import { useState } from "react";

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSelary] = useState('')
    let id = Math.floor(Math.random() * 1000)
    const [record, setRecord] = useState([])

    const addFields = (e) => {
        e.preventDefault();

        let obj = {
            id, name, email, salary
        }

        let oldRecord = [...record, obj]

        setRecord(oldRecord)

        setName('')
        setEmail('')
        setSelary('')
    }

    const deleteData = (id) => {
        let allData = record.filter((val) => {
            return val.id != id
        })

        setRecord(allData);
    }

    return (
        <>

            <div className="form-section">
                <div className="container">
                    <div className="row">
                        <div className="form">
                            <h1>React-Add & Delet ToDo List</h1>

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
                                    <h2>action</h2>
                                </div>
                            </div>
                            <form onSubmit={addFields}>
                                <div className="form-data">
                                    <div className="div">
                                        <input
                                            name='name'
                                            placeholder='Full Name' onChange={(e) => setName(e.target.value)} value={name}
                                        />
                                    </div>
                                    <div className="div">
                                        <input
                                            name='email'
                                            placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email}
                                        />
                                    </div>

                                    <div className="div">
                                        <input
                                            name='Salary'
                                            placeholder='Salary' onChange={(e) => setSelary(e.target.value)} value={salary}
                                        />
                                    </div>
                                    <div className="div">
                                        <button onClick={addFields} className="add"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {
                            record && record.map((val) => {

                                return (
                                    <div className="view-data" key={val.id}>
                                        <div className="div">
                                            <input value={val.name} />
                                        </div>
                                        <div className="div">
                                            <input value={val.email} />
                                        </div>

                                        <div className="div">
                                            <input value={val.salary} />
                                        </div>
                                        <div className="div">
                                            <button onClick={() => deleteData(val.id)} className="add"><i class="fa-solid fa-trash-can"></i></button>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>



        </>
    )
}

export default Form;