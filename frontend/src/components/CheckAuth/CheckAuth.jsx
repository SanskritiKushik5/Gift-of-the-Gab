
import axios from 'axios';

function CheckAuth() {

        const result = axios.get("http://127.0.0.1:8000/api/current_user/");
        console.log(result.data)

        return(
            <>
            </>
        );

}
export default CheckAuth;