import axios from "axios";

export const itemGet = async () => {
    try{
        const res = await axios.get('http://localhost:3001/comments')
        console.log(res)
        return res.data
    }catch(err) {
        console.log(err)
    }
}

export const itemPost = async (data : any) => {
    try{
        console.log(data)
        const res = await axios.post('http://localhost:3001/comments', data)
        
        console.log(res)
        return res.data
    }catch(err) {
        console.log(err)
    }
}

export const DeletePost = async (data : any) => {
    try{
        console.log(data)
        const res = await axios.delete(`http://localhost:3001/items/${data}`)
        console.log(res)
        return res.data
    }catch(err) {
        console.log(err)
    }
}