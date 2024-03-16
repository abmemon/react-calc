import React, { useState } from 'react'
import calcCss from '../css/calculator.module.css'
import Keys from './Keys'
// https://www.cssacademy.com/blog/create-a-calculator-in-html-and-css
function Calculator() {
    const [inpVal, setinpVal] = useState(0);
    const [exp, setExp] = useState("");
    const [opr, setOpr] = useState(false);
    let numbers = ["0","1","2","3","4","5","6","7","8","9","."];
    let signs = ["+","-","÷","*"];
    let calc = (event) => {
        if(event.target.value == "÷"){
            setExp(exp + "/");
        }else if(event.target.value == 'AC'){
            setinpVal (0);
            setOpr(false);
            setExp("");
        }else{
            setExp(exp + event.target.value);
        }

        if(signs.includes(event.target.value))
        {
            setOpr(event.target.value);
        }
        else if (event.target.value == "="){
            console.log(exp);
            setinpVal (eval(exp));
            setExp("");
            setOpr(true);
        } 
        else if(numbers.includes(event.target.value)) {
            
            if(opr){
                setinpVal (event.target.value);
                setOpr(false);
            }else{
                inpVal == 0 ? setinpVal (event.target.value) : setinpVal (inpVal + event.target.value);
            }
            
        }

    }
  return (
    <>
        <div className={calcCss.calculator}> 
            <div className={calcCss.calculator__output}>{inpVal}</div>
            <div className={calcCss.calculator__keys}>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key__operator}`} val={"+"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key__operator}`} val={"-"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key__operator}`} val={"*"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key__operator}`} val={"÷"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"7"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"8"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"9"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"4"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"5"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"6"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"1"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"2"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"3"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"0"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"."} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key}`} val={"AC"} fn={calc}/>
                <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__key__enter}`} val={"="} fn={calc}/>
            </div>
        </div>
    </>
  )
}

export default Calculator