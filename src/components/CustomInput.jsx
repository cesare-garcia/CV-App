

function CustomInput({information, identifier, labelText, changer, propertyName}) {

    const handleChange = (e) => {
        changer(prevState => ({...prevState, [propertyName]: e.target.value }));
    }

    return (
        <label htmlFor={identifier}>
            {labelText}: 
            <input 
                type="text" 
                id={identifier} 
                name={identifier}
                onChange={handleChange}
                value={information[propertyName]}
            />
        </label>
    )    


}

export default CustomInput;