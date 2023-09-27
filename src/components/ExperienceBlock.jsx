import "./ExperienceBlock.css"

function ExperienceBlock({blockInfo}) {

    if (Object.keys(blockInfo).length < 1) {
        return null;

    } else {
        return (
            <div className="eBlock">
                <div className="eLeft">
                    <p className="blockP">{blockInfo.start}-{blockInfo.end}</p>
                    <p className="blockP">{blockInfo.location}</p>
                </div>
                <div className="eRight">
                    <p className="blockP"><b>{blockInfo.institution}</b></p>
                    <p className="blockP">{blockInfo.focus}</p>
                    {(blockInfo.description !== undefined) ? <p>{blockInfo.description}</p> : null}
                </div>
            </div>
        )

    }

}

export default ExperienceBlock;