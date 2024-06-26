import { useState } from "react";
import axios from 'axios';
const Studentform = () => {

    const [formData, setFormData] = useState({})
    const handleChange=(e)=>{
        let name = e.target.name;
        let value= e. target.value;
        setFormData((key)=>({...key,[name]:value}))
    }
    console.log(formData)

    const handleSubmit=()=>{
        let url ='http://127.0.0.1:8000/regist/';
        axios.push(url,formData).then((res)=>{
            alert("New Data Added Successfully")
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Roll No:
                    <input type="number" name="rollNo" value={formData.rollNo} onChange={handleChange} />
                </label>
                <label>
                    Father Name:
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                </label>
                <label>
                    Mother Name:
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
                </label>
                <label>
                    Class:
                    <input type="text" name="class" value={formData.class} onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <textarea name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>
                    Fees:
                    <input type="number" name="fees" value={formData.fees} onChange={handleChange} />
                </label>
                <label>
                    DOB:
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </label>
                <label>
                    Gender:
                    <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
                </label>
                <label>
                    Semester Year:
                    <input type="text" name="semesterYear" value={formData.semesterYear} onChange={handleChange} />
                </label>
                <label>
                    Profile:
                    <input type="file" name="profile" onChange={handleChange} />
                </label>
                <label>
                    Profile Image URL:
                    <input type="url" name="proImage" value={formData.proImage} onChange={handleChange} />
                </label>
                <label>
                    Branch:
                    <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}
export default Studentform;