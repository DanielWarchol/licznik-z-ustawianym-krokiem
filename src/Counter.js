import React, {useState} from 'react';
import './Counter.css';
import  Step from './Step';

function Counter(props) {
    const [step, setStep] = useState(1);
    const [counter, setCounter] = useState(props.initValue);

    const changeCounter = () => {
        setCounter((prevCounter) => {
            return prevCounter + step;
        });
    } 

    const reinitCounter = () => {
        setCounter(props.initValue);  
    }

    const resetCounter = () => {
        setCounter(0);
    }

    const changeStepValue = (e) => {
        setStep(+e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="counter">
            Licznik:
            
            <span className="value">
                {counter}
            </span>
            <br /><br />
            <Step changeStepValueMth={changeStepValue} stepValue={step} />
            <br />
            <button onClick={changeCounter}>
                Add {step}
            </button>
            <button onClick={reinitCounter}>
                Relnit
            </button>
            <button onClick={resetCounter}>
                Reset
            </button>
        </div>
    )
}

export default Counter;