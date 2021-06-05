import axios from 'axios';

export const handleUploadImg = e => {
    const imgData = new FormData()
    imgData.set('key','6de97a1b44fd91982482f2bf7454018f')
    imgData.set('image', e.target.files[0])
    return axios.post('https://api.imgbb.com/1/upload', imgData)
    .then(res => {
        const img = res.data.data.display_url
        return img
    })
}