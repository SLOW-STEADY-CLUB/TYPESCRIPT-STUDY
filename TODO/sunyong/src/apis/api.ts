import axios from "axios";
import { Todo } from "components/TypeList";

export const itemGet = async () => {
    try{
        const res = await axios.get('http://localhost:3001/comments')
        return res.data
    }catch(err) {
        console.log(err)
    }   
}

export const itemPost = async (data : any) => {
    const answer = true
    try{
        console.log(data.length)
        if(data.length === 1) {
            alert('TODO List는 꼭 입력해주세요')
            return
        }
        const res = await axios.post('http://localhost:3001/comments', data)
        return answer
    }catch(err) {
        console.log(err)
        return !answer
    }
}

export const DeletePost = async (data : any) => {
    try{
        console.log(data)
        const res = await axios.delete(`http://localhost:3001/comments/${data}`)
        console.log(res)
        return res.data
    }catch(err) {
        console.log(err)
    }
}