import { atom } from "recoil";

  export const itemList = atom({
    key: 'itemList',
    default: []
  });


  export const postItem = atom({
    key: 'postItem',
    default: [{
      title: "오늘의 투두들",
      isDone:true,
      id: 0,
      day: '9999-99-99'
    }]
  });