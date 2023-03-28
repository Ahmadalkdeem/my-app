import { useState } from 'react';
import axios from 'axios';
function Uplodefile() {
    const [photo7, setphoto7] = useState<any>([])
    function Getvalue(e: any) {
        setphoto7(e.target.files);
    }
    const handleSaveStudentClicked = async () => {
        const formData = new FormData()
        for (let i = 0; i < 9; i++) {
            formData.append('profileImg', photo7[i])
        }
        formData.append('ahmad', 'aaa')
        formData.append('ahmad', 'bbb')
        axios.post("http://localhost:3001/uplode/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <input onChange={Getvalue} type="file" accept=".jpg, .jpeg, .png, .svg, .gif" name="file" multiple />
            <button onClick={handleSaveStudentClicked}>uplode</button>
        </div>
    )
}

export default Uplodefile