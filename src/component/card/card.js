import './card.css';
import { useRef, useEffect, useState } from 'react';

const Card = (props) => {
    const [inter,setInter] = useState(false);
    const ref = useRef(null);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    const callback = (entries) => {
        entries.forEach(entry => {
            // Each entry describes an intersection change for one observed target element:
            // entry.boundingClientRect
            // entry.intersectionRatio
            // entry.intersectionRect
            // entry.isIntersecting
            // entry.rootBounds
            // entry.target
            // entry.time
            if(entry.isIntersecting){
                setInter(true);
            }
        });
    }

    useEffect(() => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);
    },[])
    return (
        <div ref={ref} className={`imgbox`}>
            {props.lazyload ? inter && <img src={props.url} className={`img`} /> : <img src={props.url} className={`img`} />}
        </div>
    )
}

export default Card;