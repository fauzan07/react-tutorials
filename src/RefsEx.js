import React , {useState , useRef} from  'react';

const RefsEx = () => {

    const luckyName = useRef(null);
    const [show , setShow] = useState(false);

    const submitForm = (e) =>{
        e.preventDefault();
        const name = luckyName.current.value
        console.log(luckyName.current.value);
        name === "" ? alert("plz fill the form data") : setShow(true);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName" class="form-check-label"></label>
                    <input type="text" id="luckyname" ref={ luckyName }/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <p>{show ? `your lucky name is ${luckyName.current.value}` : "no value "}</p>
        </div>
    )
}
 
export default RefsEx

