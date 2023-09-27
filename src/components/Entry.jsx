import Button from "./Button"
import "./Entry.css"

function Entry(props) {
    let entries;
    (props.entryType === "ed") ? entries = props.allInfo.eInfo2 : entries = props.allInfo.wInfo2;

    if (entries.length > 0) {
        return (
            <div>
                {entries.map((entry) => {
                    return <div key={entry.institution} className="entryContainer">
                        <p>{entry.institution}</p>
                        {(props.entryType === "ed") ? 
                            <button 
                                className="editEducation" 
                                onClick={props.editFunction} 
                                data-entry={entry.institution}>
                                Edit
                            </button> : 
                            <button
                                className="editWork" 
                                onClick={props.editFunction} 
                                data-entry={entry.institution}>
                                Edit
                            </button> 
                        }
                    </div>
                    
                    

                })}
            </div>
        )
    }

}

export default Entry;