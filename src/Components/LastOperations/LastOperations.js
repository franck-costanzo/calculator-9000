import './LastOperations.css';

function LastOperations(props) {    

    return (
        <fieldset className='LastOperations'>
            <legend>Mes operations</legend>
            <ul className="result-list">
            {/* creation de l'objet qui sera rempli avec la props results */}
            {
                props.results.map((element) => {
                    return <li key={element.id_calcul}>{element.calcul + '  ' + element.result}</li>;
                })
            }
            </ul>
        </fieldset>
    );
  }
  
  export default LastOperations;