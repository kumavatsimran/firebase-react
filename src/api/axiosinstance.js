import axios from "axios"
const axiosinstance=axios.create({
    baseURL:"https://my-post-b9963-default-rtdb.firebaseio.com/"
})
export default axiosinstance;