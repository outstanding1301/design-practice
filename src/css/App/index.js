import React from 'react';
import './style.css';
import Menu from './components/Menu';
import Todolist from './components/Todolist';
import Training from './components/Training';

export default function App(props) {

    const main = React.useRef();

    const [page, setPage] = React.useState(0);

    let touchY;

    const pages = document.getElementsByClassName('pageIdx');

    const noDrag = () => {
        main.current.classList.add('no-scroll');
    }

    const canDrag = () => {
        main.current.classList.remove('no-scroll');
    }

    const moveToPage = (from, to, speed) => {
        if(!speed) speed = 0;
            const toY = pages[to].getBoundingClientRect().top - pages[0].getBoundingClientRect().top
            setPage(to);
            main.current.scrollTo({
                left: 0,
                top: toY,
                behavior: 'smooth'
            });
    }

    const onWheel = (e) => {
        if (e.deltaY < 0) {
            if(page > 0) {
                moveToPage(page, page-1);
            }
        } else {
            if(page+1 < pages.length) {
                moveToPage(page, page+1);
            }
        }
    }

    const onTouchStart = (e) => {
        canDrag();
        touchY = e.changedTouches[0].screenY;
    }

    const onTouchMove = (e) => {
        const dy = e.changedTouches[0].screenY-touchY;

        const height = window.innerHeight;
        
        const ady = Math.abs(dy);
        if (ady >= 0.15 * height) {
            touchY = undefined;
            if(dy > 0) {
                if(page > 0) {
                    moveToPage(page, page-1);
                }
            }
            else {
                if(page+1 < pages.length) {
                    moveToPage(page, page+1);
                }
            }
            noDrag();
        }
    }

    const onTouchEnd = (e) => {
        noDrag();
        if(touchY) {
            moveToPage(page, page);
            return;
        }
    }

    return (
    <div className='frame no-drag'>
        <nav className='nav'>
            <Menu />
        </nav>
        <main className='main no-scroll' ref={main} onWheel={onWheel}
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className='pageIdx'></div>
            <div className='greeting'>
                <h1 className='hello'>
                    <span className='name'>송인걸</span>님 환영합니다!
                </h1>
            </div>
            <div className='margin'></div>
            <Todolist />
            <div className='margin'></div>
            <div className='pageIdx'></div>
            <Training />
            <div className='pageIdx'></div>
            <Training />
            <div className='margin'></div>
            <Training />
        </main>
    </div>
    );
}