import './AmazingNumberButton.css';

function AmazingNumberButton(props) {

    return (
        <button className='AmazingNumberButton' onClick={(e) => props.handleClick(e)}>{props.number}</button>
    );
  }
  
  export default AmazingNumberButton;