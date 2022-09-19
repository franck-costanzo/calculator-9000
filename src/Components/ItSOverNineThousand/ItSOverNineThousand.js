import './ItSOverNineThousand.css';

function ItSOverNineThousand(props) {

    return (
        <p style={{display : props.calc >9000  ? 'block' : 'none'}} className='p9000'>It's over 9000!</p>
    );
}

export default ItSOverNineThousand;