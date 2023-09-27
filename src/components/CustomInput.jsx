import "./CustomInput.css"

function CustomInput({taStat, editChanger, editEntry, allInfo, allChangers, identifier, labelText, sectionType, propertyName}) {

    let properChanger;
    let targetedChange;
    if (editEntry !== -1 && sectionType === "edForm") targetedChange = allInfo.eInfo2[editEntry];
    if (editEntry !== -1 && sectionType === "workForm") targetedChange = allInfo.wInfo2[editEntry];
    if (!sectionType) properChanger = allChangers.pChanger;
    if (sectionType === "edForm") properChanger = allChangers.eChanger1;
    if (sectionType === "workForm") properChanger = allChangers.wChanger1;
    const handleChange = (e) => {
        properChanger(prevState => ({...prevState, [propertyName]: e.target.value }));
    }

    const handleEdit = (e) => {
        e.preventDefault();
        let selectedCollection;
        let frontHalf;
        let backHalf;
        let interim;
        let rejoinedArray;
        if (sectionType === "edForm") {
            selectedCollection = allInfo.eInfo2;

        } else if (sectionType === "workForm") {
            selectedCollection = allInfo.wInfo2;

        }

        if (selectedCollection.length === 1) {
            let modifiedEntry = selectedCollection[editEntry];
            modifiedEntry[propertyName] = e.target.value;
            rejoinedArray = [modifiedEntry];
            if (sectionType === "edForm") allChangers.eChanger2(rejoinedArray);
            if (sectionType === "workForm") allChangers.wChanger2(rejoinedArray);

        } else {
            let modifiedEntry = selectedCollection[editEntry];
            modifiedEntry[propertyName] = e.target.value;
            let modKey = selectedCollection[editEntry].institution;
            let filteredArray = selectedCollection.filter((entry) => entry.institution !== modKey);
            
            if (filteredArray.length === 1) {
                if (editEntry === 0) rejoinedArray = [modifiedEntry, filteredArray[0]];
                if (editEntry === 1) rejoinedArray = [filteredArray[0], modifiedEntry];
                if (sectionType === "edForm") allChangers.eChanger2(rejoinedArray);
                if (sectionType === "workForm") allChangers.wChanger2(rejoinedArray);

            } else {
                
                if (editEntry === 0) {
                    rejoinedArray = [modifiedEntry].concat(filteredArray);
                    if (sectionType === "edForm") allChangers.eChanger2(rejoinedArray);
                    if (sectionType === "workForm") allChangers.wChanger2(rejoinedArray);

                } else if (editEntry === (selectedCollection.length - 1)) {
                    rejoinedArray = filteredArray.concat([modifiedEntry]);
                    if (sectionType === "edForm") allChangers.eChanger2(rejoinedArray);
                    if (sectionType === "workForm") allChangers.wChanger2(rejoinedArray);

                } else {
                    frontHalf = filteredArray.slice(0, editEntry);
                    backHalf = filteredArray.slice(editEntry);
                    interim = frontHalf.concat([modifiedEntry]);
                    rejoinedArray = interim.concat(backHalf);
                    if (sectionType === "edForm") allChangers.eChanger2(rejoinedArray);
                    if (sectionType === "workForm") allChangers.wChanger2(rejoinedArray);

                }

            }
            
        }

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

    } else if (sectionType && editEntry !== undefined && editEntry !== -1) {

        return (
            <div className="inputs">
                <label htmlFor={identifier}>{labelText}: </label>
                {(sectionType === "workForm" && taStat === "true") ? 
                    <textarea
                        id={identifier} 
                        name={identifier}
                        onChange={handleEdit}
                        value={targetedChange[propertyName]}
                    >
                    </textarea> :
                    <input 
                        type="text" 
                        id={identifier} 
                        name={identifier}
                        onChange={handleEdit}
                        value={targetedChange[propertyName]}
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