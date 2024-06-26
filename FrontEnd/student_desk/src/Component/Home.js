import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { data_fetch } from "../RegisterSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const val = useSelector(state => state.Regist.user_datalist);
    const dispatch = useDispatch();
    const [input, setInput] = useState({});
    console.log(val)

    const load = () => {
        const url = 'http://127.0.0.1:8000/signup/';
        axios.get(url)
            .then(res => {
                dispatch(data_fetch(res.data));
            })
            .catch(err => {
                console.error("Failed to fetch data:", err);
            });
    };

    useEffect(() => {
        load();
    }, 1000);
    //------------------------ Views Datail --------------------------------
    const viewdetail = () => {
        Navigate('/about')
    }

    //------------------------ Delete Data --------------------------------

    const delet = (pk) => {
        console.log(pk);
        let url = `http://127.0.0.1:8000/signup/${pk}/`;
        axios.delete(url).then((res) => {
            alert("Data deleted Successfully");
        });
    };
    //------------------------ Add New Data --------------------------------
    const Navigate = useNavigate()
    const AddnewData = () => {
        Navigate('/regist')
    }

    //------------------------ Edit Data --------------------------------

    const edit = (pk) => {
        console.log(pk);
        const url = `http://127.0.0.1:8000/signup/${pk}/`;
        axios.get(url).then((res) => {
            setInput(res.data);
        });
        document.getElementById('updatedataform').style.display = 'block';
        document.getElementById('Datatableshow').style.display = 'none';
    };





    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (pk) => {
        const url = `http://127.0.0.1:8000/signup/${pk}/`;
        axios.put(url, input)
            .then(res => {
                alert('Data successfully updated');
                load();
            })
            .catch(err => {
                console.error("Failed to update data:", err);
            });

        document.getElementById('updatedataform').style.display = 'none';
        document.getElementById('Datatableshow').style.display = 'block';
    };


    const ans = val.map((key) => {
        return (
            <tr id="data_table" key={key.id}>
                <td>{key.Name}</td>
                <td>{key.Email}</td>
                <td>{key.Contact}</td>
                <td>{key.Address}</td>
                <td>{key.Password}</td>
                <td><button onClick={() => { edit(key.id) }}>Edit</button></td>
                <td><button onClick={() => { delet(key.id) }}>Delete</button></td>
                <td><button onClick={() => { viewdetail(key.id) }}>Views</button></td>
            </tr>
        );
    });



    return (
        <>
            <div id="table_body">
                <div className="container" id="updatedataform" style={{ display: 'none' }}>
                    <h2>Update Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="Name" value={input.Name || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="Email" value={input.Email || ''} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea id="address" name="Address" onChange={handleChange} value={input.Address || ''} rows="4"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact:</label>
                            <input type="tel" id="contact" name="Contact" value={input.Contact || ''} maxLength={10} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="Password" value={input.Password || ''} onChange={handleChange} required />
                        </div>
                        <button type="button" onClick={() => { handleSubmit(input.id) }}>Submit</button>
                    </form>
                </div>

            </div>

            <div id="Datatableshow">
                <div><button id="Adddatabtn" onClick={AddnewData}>Add Data</button></div>
                <table >
                    <thead id="studenthata_heading">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;
