import "./CustomInput.css"

function CustomInput({taStat, editEntry, allInfo, allChangers, identifier, labelText, sectionType, propertyName}) {

    let properChanger;
    if (!sectionType) properChanger = allChangers.pChanger;
    if (sectionType === "edForm") properChanger = allChangers.eChanger1;
    if (sectionType === "workForm") properChanger = allChangers.wChanger1;
    const handleChange = (e) => {
        properChanger(prevState => ({...prevState, [propertyName]: e.target.value }));
    }

    if (!sectionType) {

        return (
            <div className="inputs">
                <label htmlFor={identifier}>{labelText}: </label>
                <input 
                    type="text" 
                    id={identifier} 
                    name={identifier}
                    onChange={handleChange}
                    value={allInfo.pInfo[propertyName]}
                />
            </div>
        )

    } else if (sectionType && editEntry !== undefined && Object.keys(editEntry).length > 0) {

        return (
            <div className="inputs">
                <label htmlFor={identifier}>{labelText}: </label>
                {(sectionType === "workForm" && taStat === "true") ? 
                    <textarea
                        id={identifier} 
                        name={identifier}
                        onChange={handleChange}
                        value={editEntry[propertyName]}
                    >
                    </textarea> :
                    <input 
                        type="text" 
                        id={identifier} 
                        name={identifier}
                        onChange={handleChange}
                        value={editEntry[propertyName]}
                    />
                }
            </div>
        )

    } else {

        return (
            <div className="inputs">
                <label htmlFor={identifier}>{labelText}: </label>
                {(sectionType === "workForm" && taStat === "true") ?
                    <textarea
                        id={identifier} 
                        name={identifier}
                        onChange={handleChange}
                    >
                    </textarea> :
                    <input 
                        type="text" 
                        id={identifier} 
                        name={identifier}
                        onChange={handleChange}
                    />
                }
            </div>
        )

    }

}

export default CustomInput;