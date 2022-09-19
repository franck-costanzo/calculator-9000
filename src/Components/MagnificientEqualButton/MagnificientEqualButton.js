import './MagnificientEqualButton.css';

function MagnificientEqualButton(props) {

    return (
        <button className='MagnificientEqualButton' onClick={(e) => props.handleClick(e)}>=</button>
    );
  }
  
  export default MagnificientEqualButton;