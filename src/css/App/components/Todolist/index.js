import React from 'react';
import './style.css';

export function TodolistItem(props) {

    const item = props.done 
    ? (
        <li className='todolist-item-done'>
        <div className='todolist-item-detail-done'>                            
            <h2 className='todolist-item-time-done'>{props.time}에</h2>
            <h2 className='todolist-item-plan-done'>[{props.plan}]</h2>
        </div>
        <button className='todolist-item-done-button-done' onClick={()=>props.toggleDone()}>완료</button>
        </li>
    )
    : (
        <li className='todolist-item'>
            <div className='todolist-item-detail'>                      
                <h2 className='todolist-item-time'>{props.time}에</h2>
                <h2 className='todolist-item-plan'>[{props.plan}]</h2>
            </div>
            <button className='todolist-item-done-button' onClick={()=>props.toggleDone()}>완료</button>
        </li>
    );

    return item;
}

export default function Todolist(props) {
    
    const element = React.useRef();
    const [items, setItems] = React.useState([
        {
            time: '오후 6시',
            plan: '약 먹기',
            done: false
        },
        {
            time: '오후 7시',
            plan: '물 먹기',
            done: false
        },
        {
            time: '오후 2시',
            plan: '밥 먹기',
            done: true
        }
    ]);
    
    const parentNoDrag = (e) => {
        e.stopPropagation();
    }

    const parentCanDrag = (e) => {
        e.stopPropagation();
    }

    return (
        <section className='todolist-section' ref={element}>
            <div className='todolist-section-header'>
                <h1 className='todolist-section-title'>오늘의 할 일</h1>
                <h1 className='todolist-section-detail'>자세히 보기</h1>
            </div>
            <div className='todolist-section-container'
            onWheel={(e)=>{
                e.stopPropagation();
            }}
            onTouchStart={parentNoDrag}
            onTouchEnd={parentCanDrag}
            onMouseEnter={parentNoDrag}
            onMouseLeave={parentCanDrag}>
                <ul className='todolist'>
                    {items.map((item, idx) => {
                        const toggleDone = () => {
                            setItems((items) => [
                            ...items.slice(0, idx),
                            Object.assign({}, items[idx], {...item, done: !item.done}),
                            ...items.slice(idx+1)
                        ])}
                        return <TodolistItem {...item} toggleDone={toggleDone}/>
                    })}
                </ul>
            </div>
        </section>
    );
}