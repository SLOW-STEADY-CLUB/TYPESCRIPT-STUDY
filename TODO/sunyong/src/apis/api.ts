import axios from "axios";
import { Todo, Todo2 } from "components/TypeList";

export const itemGet = async () => {
    try{
        const res = await axios.get('http://localhost:3001/comments')
        return res.data
    }catch(err) {
        console.log(err)
    }   
}

export const itemPost = async (data : Todo2) => {
    const answer = true
    try{
        
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

export const itemPut = async (data : Todo) => { 
    console.log(data);
    const answer = true
    try{
        const res = await axios.put(`http://localhost:3001/comments/${data.id}`, {
            id: data.id,
            title: data.title,
            isDone: !data.isDone,
            day: data.day,
        })
        console.log(res)
    }catch(err) {
        console.log(err)
        return !answer
    }
}

export const itemDelete = async (data : any) => {
    try{
        console.log(data)
        const res = await axios.delete(`http://localhost:3001/comments/${data}`)
        console.log(res)
        return res.data
    }catch(err) {
        console.log(err)
    }
}