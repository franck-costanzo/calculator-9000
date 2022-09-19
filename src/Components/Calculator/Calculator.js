import React, { useState, useEffect} from 'react';
import './Calculator.css';
import AmazingNumberButton from '../AmazingNumberButton/AmazingNumberButton';
import BeautifullScreen from '../BeautifullScreen/BeautifullScreen';
import GreatOperationButton from '../GreatOperationButton/GreatOperationButton';
import MagnificentEqualButton from '../MagnificientEqualButton/MagnificientEqualButton';
import ItSOverNineThousand from '../ItSOverNineThousand/ItSOverNineThousand';
import LastOperations from '../LastOperations/LastOperations';
import SaveButton from '../SaveButton/SaveButton';

function Calculator() {

    //fabrication d'un hook state pour le résultat de l'opération
    const [calc, setCalc] = useState('0');

    //fabrication d'un hook state pour sauvegarder le string qui représente l'opération
    const [tempCalc, setTempCalc] = useState('0');

    //fabrication d'un hook state pour la liste des résultats sauvegardés en base de données
    const [resultTab, setResultTab] = useState([]);

    async function updateList() 
    {        
        const response = await fetch('http://localhost:80/LaPlateforme_/ProjectPoolReactJS/calculator9000/Back/getAll.php')

        const data = await response.json()

        data.map((element) => { 
            setResultTab(prevResultTab => [...prevResultTab, element])

        })         

    }
    

    useEffect(() =>{        

        updateList()       

    }, [])
    
    console.log(resultTab)   

    //fabrication d'une array avec les boutons numériques
    let numberButtons = [];
    for (let i = 1; i <= 12; i++) 
    {
        if (i===10)
        {
            numberButtons.push(<AmazingNumberButton key={i} number={","} handleClick={handleClick}/>)
        }
        else if (i===11)
        {
            numberButtons.push(<AmazingNumberButton key={i} number={0} handleClick={handleClick}/>)
        }
        else if (i===12)
        {
            numberButtons.push(<AmazingNumberButton key={i} number={"C"} handleClick={handleClick}/>)
        }
        else
        {
            numberButtons.push(<AmazingNumberButton key={i} number={i} handleClick={handleClick}/>)
        }
    }

    //fabrication d'une array avec les boutons de signe
    let operationsButtons = [];
    let signsArray = ["+", "-", "*", "/"];
    for (let i = 0; i < 4; i++) 
    {
        operationsButtons.push(<GreatOperationButton key={i} sign={signsArray[i]} handleClick={handleClick}/>)
    }

    //creation de la fonction qui prend en charge tous les clicks sur les différents boutons de la page
    function handleClick(e) 
    {        
        e.preventDefault();

        const event = e.target.innerHTML;

        switch(event)
        {
            case "+":
            case "-":
            case "/":
            case "*":
                if (calc.length >= 1 & calc !== 0)
                {
                    setCalc(calc+event);
                }                
                break;
            
            case "=":
                setTempCalc(calc);
                setCalc(eval(calc));
                break;
            
            case ",":
                if (!calc.includes(','))
                {
                    setCalc(calc+event);
                }
                break;
            
            case "C":
                setCalc('0');
                break;

            case "Save":
                fetch('http://localhost:80/LaPlateforme_/ProjectPoolReactJS/calculator9000/Back/connexion.php', {
                    method: 'POST', 
                    body: JSON.stringify({calc, tempCalc})
                })
                .then(response =>{
                    return response.json();
                })
                .then(response => console.log(response))
                .then(()=>{updateList() })
                
                break;


            default:
                if (calc.length === 1 & calc === '0')
                {
                    setCalc(event)
                }
                else{
                    setCalc(calc+event);
                }
                
        }

    }

    return (
        <div className='Calculator'>

            <BeautifullScreen calcul={calc}/>

            <div id='ButtonsDiv'>
                <div id='Numbers'>                    
                    {numberButtons}
                </div>
                <div id='Operations'>
                    {operationsButtons}
                    <MagnificentEqualButton handleClick={handleClick}/>                    
                </div>                
            </div>
            
            <SaveButton handleClick={handleClick}/>
            
            <LastOperations results={resultTab}/>
            
            <ItSOverNineThousand  calc={calc}/>

        </div>        
    );
}

export default Calculator;