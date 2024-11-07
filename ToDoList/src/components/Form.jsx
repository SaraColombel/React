const CATEGORIES = ["Nettoyage", "Formation", "Maison"]

function Form({ onSubmit }) {
    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        <form onSubmit={onSubmit} className='formToDo'>
            <input className='input'
                type="text"
                placeholder="Tâche"
                onChange={(event) => handleChange(event)}
            ></input>
            <input className='inputDate'
                type="text"
                placeholder="Date"
                onChange={(event) => handleChange(event)}
            ></input>
            <input className='inputHeureRestante'
                type="number"
                placeholder="Heure restantes"
                onChange={(event) => handleChange(event)}
            ></input>
            <select className='input'
            placeholder="Catégorie"
            onChange={(event) => handleChange(event)}>
                <option value="Vide">Catégories</option>
                {CATEGORIES.map((element, index)=><option key={index}value = {element}>{element}</option>)}
            </select>
            <label className="checkboxfait"><input type="checkbox" ></input>Fait</label>
            <input type="submit" className='Envoyer'></input>
        </form>
    );
}

export default Form;
