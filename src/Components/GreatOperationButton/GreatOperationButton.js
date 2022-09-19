import './GreatOperationButton.css';

function GreatOperationButton(props) {

    return (
        <button className='GreatOperationButton' onClick={(e) => props.handleClick(e)}>{props.sign}</button>
    );
  }
  
  export default GreatOperationButton;