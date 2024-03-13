import React, { useState } from 'react'
import calcCss from '../css/calculator.module.css'
import Keys from './Keys'
// https://www.cssacademy.com/blog/create-a-calculator-in-html-and-css
function Calculator() {
    const [inpVal, setinpVal] = useState(0);
    let valOne = 0;
    let valTwo = 0;
    let arithmeticOp = false;
    let equalOp = false;

    let calc = (event) => {
        //setinpVal (event.target.value);
        if((event.target.value == '+' || event.target.value == '-' || event.target.value == '*' || event.target.value == '÷'))
        {
            arithmeticOp = event.target.value;
        }
        else if (event.target.value == "="){
            equalOp = event.target.value;
        }

        if(arithmeticOp == false && equalOp == false) {
            inpVal == 0 ? setinpVal (event.target.value) : setinpVal (inpVal + event.target.value);
        }
        else if(arithmeticOp){
            valOne == 0  && inpVal > 0 ? valOne = inpVal : valOne = 0;
        }
        else if(equalOp){
            valOne != 0  && inpVal > 0 ? valOne = inpVal : valOne = 0;
        }

        console.log(valOne)
        console.log(valTwo)
        console.log(arithmeticOp)
        console.log(equalOp)
        // if( arithmeticOp == false && equalOp == false  )
        // {

        //     inpVal = 0 ? setinpVal (event.target.value) : setinpVal (inpVal + event.target.value);
        // }
        
        // else
        // {
        //     if(inpVal > 0 && (event.target.value == '+' || event.target.value == '-' || event.target.value == '*' || event.target.value == '÷')){
        //         valOne = inpVal;
        //         valOp = event.target.value;
        //         //setinpVal (0);
        //     }
        //     else if( valOne > 0 && (event.target.value != '+' || event.target.value != '-' || event.target.value != '*' || event.target.value != '÷'))
        //     {
        //         setinpVal (0);
        //         setinpVal (inpVal + event.target.value) 
        //         valTwo =  inpVal;
        //         //console.log( eval(valOne + valOp + valTwo) );
        //     }
        //     else if( event.target.value == '=' )
        //     {
        //         //setinpVal (inpVal + event.target.value) 
        //         //valTwo = event.target.value ;
        //         let res = 0;
        //         res = eval(valOne + valOp + valTwo)
        //         setinpVal (res) 
        //         console.log( inpVal );
        //     }
        //     else{
        //         console.log(arithmeticOp);
        //         setinpVal (inpVal + event.target.value)    
        //     }
            
        // }
        


        
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