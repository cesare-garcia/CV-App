import ExperienceBlock from "./ExperienceBlock"

function ResumeSection(props) {

    let singleEntry;
    let multipleEntries;
    let sectionHeader;

    if (props.sType === "education") {
        singleEntry = props.allInfo.eInfo1;
        multipleEntries = props.allInfo.eInfo2;
        sectionHeader = "Education";

    } else {
        singleEntry = props.allInfo.wInfo1;
        multipleEntries = props.allInfo.wInfo2;
        sectionHeader = "Work Experience";

    }

    if (multipleEntries.length === 0) {
        return (
            <ExperienceBlock blockInfo={singleEntry}></ExperienceBlock>
        )

    } else {
        return (
            <>
                <h2 style={{ marginBottom: 20, padding: 5, backgroundColor: "grey", borderRadius: 3}}>{sectionHeader}</h2>
                <div className={props.sType}>
                    {multipleEntries.map((entry) => {
                        return <ExperienceBlock key={entry.institution} blockInfo={entry}></ExperienceBlock>
                    })}
                    <ExperienceBlock blockInfo={singleEntry}></ExperienceBlock>
                </div>
            </>
        )
    }

}

export default ResumeSection;