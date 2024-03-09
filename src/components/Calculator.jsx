import React, { useState } from 'react'
import calcCss from '../css/calculator.module.css'
import Keys from './Keys'
// https://www.cssacademy.com/blog/create-a-calculator-in-html-and-css
function Calculator() {
    const [inpVal, setinpVal] = useState(0);
    let valOne = 0;
    let valOp = ""
    let valTwo = 0;
    let calc = (event) => {
        if(inpVal == 0 )
        {
            setinpVal (event.target.value);
        }
        
        else
        {
            if(inpVal > 0 && (event.target.value == '+' || event.target.value == '-' || event.target.value == '*' || event.target.value == '÷')){
                valOne = inpVal;
                valOp = event.target.value;
                //setinpVal (0);
            }
            else if( valOne > 0 && (event.target.value != '+' || event.target.value != '-' || event.target.value != '*' || event.target.value != '÷'))
            {
                setinpVal (0);
                setinpVal (inpVal + event.target.value) 
                valTwo =  inpVal;
                //console.log( eval(valOne + valOp + valTwo) );
            }
            else if( event.target.value == '=' )
            {
                //setinpVal (inpVal + event.target.value) 
                //valTwo = event.target.value ;
                let res = 0;
                res = eval(valOne + valOp + valTwo)
                setinpVal (res) 
                console.log( inpVal );
            }
            else{
                setinpVal (inpVal + event.target.value)    
            }
            
        }
        


        //valOne = inpVal;
        console.log("---");
        console.log(valOne);
    }
  return (
    <>
    
    <div className={calcCss.calculator}> 
        <div className={calcCss.calculator__output}>{inpVal}</div>
    </div>
    <div className={calcCss.calculator__keys}>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"+"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"-"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"*"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"÷"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"7"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"8"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"9"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"4"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"5"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"6"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"1"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"2"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"3"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"0"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"."} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"AC"} fn={calc}/>
        <Keys cls={`${calcCss.calculator__key} ${calcCss.calculator__keyoperator}`} val={"="} fn={calc}/>
    </div>
    </>
  )
}

export default Calculator