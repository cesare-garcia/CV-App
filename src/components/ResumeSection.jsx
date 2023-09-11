
function ResumeSection(props) {

    if (props.sType === "education") {
        if (props.information.education.length === 0) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className={props.sType}>
                    {props.information.education.map((entry) => {
                        return <p key={entry.school}> {entry.school} {entry.major} {entry.start}-{entry.end} {entry.location}</p>
                    })}
                </div>
            )
        }

    } else if (props.sType === "work") {
        if (props.information.work.length === 0) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className={props.sType}>
                    {props.information.work.map((entry) => {
                        return <p key={entry.company}> {entry.company} {entry.role} {entry.start}-{entry.end}</p>
                    })}
                </div>
            )
        }

    }

}

export default ResumeSection;