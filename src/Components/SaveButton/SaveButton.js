import './SaveButton.css';

function SaveButton(props) 
{

    return (
        <button className='SaveButton' onClick={(e) => props.handleClick(e)}>Save</button>
    );

}
  
export default SaveButton;