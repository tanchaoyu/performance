import Axios from 'axios';

const getImg = () => {
    return Axios.get('https://picsum.photos/v2/list?page=2&limit=100')
}

export {
    getImg
}