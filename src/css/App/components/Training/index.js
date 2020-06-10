import React from 'react';
import './style.css';

export default function Training(props) {
    return (
        <section className='training-section'>
            <div className='training-section-header'>
                <h1 className='training-section-title'>기억력 훈련</h1>
            </div>
            <div className='training-section-container'>
                <ul className='training-items'>
                    <li className='training-item'>
                        <icon className='material-icons training-icon'>people</icon>
                        <div className='training-item-title'>
                            <h1 className='training-item-name'>맞춤 퀴즈</h1>
                            <h2 className='training-item-detail'>나와 주변 사람들에 대한 문제를 맞춰요!</h2>
                        </div>
                    </li>
                    <li className='training-item-inverted'>
                        <icon className='material-icons training-icon-inverted'>extension</icon>
                        <div className='training-item-title'>
                            <h1 className='training-item-name-inverted'>십자말풀이</h1>
                            <h2 className='training-item-detail-inverted'>십자말풀이로 기억력을 높여요!</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}