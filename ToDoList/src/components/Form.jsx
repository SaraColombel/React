function Form({onSubmit}) {
function handleChange(event) {
    console.log(event.target.value);
}
return (
    <form onSubmit={onSubmit}className='formToDo'>
    <input className='input'
        type="text"
        placeholder="Tâche"
        onChange={(event) => handleChange(event)}
    ></input>
    <input className='input'
        type="text"
        placeholder="Date"
        onChange={(event) => handleChange(event)}
    ></input>
    <input type="submit" className='Envoyer'></input>
    </form>
);
}

export default Form;
