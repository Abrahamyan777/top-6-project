import { useState } from 'react';
import Button from '../../componets/Button/Buttton';
import css from './Counter.module.css'


function Counter() {

    const [count, setCount] = useState(0)

    const funcMInus = () => {
        setCount(count - 1)
    }
    const funcPlus = () => {
        setCount(count + 1)
    }

    return(
        <div className={css.counterContener}>
            <div>
                <h2>Counter</h2>
                <h1>{count}</h1>
                <button onClick={funcMInus}>-Minus</button> 
                <button onClick={funcPlus}>Plus+</button>
                {/* <Button name="-Minus" onClick={funcMInus} />
                <Button name="Plus+" onClick={funcPlus} /> */}
            </div>
        </div>
    )
}

export default Counter;