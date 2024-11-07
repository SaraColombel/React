function Form({onSubmit}) {
function handleChange(event) {
    console.log(event.target.value);
}
return (
    <form onSubmit={onSubmit}>
    <input
        type="text"
        placeholder="La ToDo"
        onChange={(event) => handleChange(event)}
    ></input>
    <input
        type="text"
        placeholder="La Date"
        onChange={(event) => handleChange(event)}
    ></input>
    <input type="submit"></input>
    </form>
);
}

export default Form;
