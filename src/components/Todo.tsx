import React from 'react';

const Todo: React.FC<{items?: string[]}> = (props) => {
    return <ol type="I">
        {/* <li>타입스크립트 1강</li>
        <li>타입스크립트 2강</li>
        <li>타입스크립트 3강</li> */}
        {props.items?.map((item)=><li key={item} >{item}</li>)}
    </ol>
}

export default Todo;