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
                <option value="Vide">Catégorie</option>
                <option value="Nettoyage">Nettoyage</option>
                <option value="Formation">Formation</option>
                <option value="Maison">Maison</option>
            </select>
            <label className="checkboxfait"><input type="checkbox" ></input>Fait</label>
            <input type="submit" className='Envoyer'></input>
        </form>
    );
}

export default Form;
