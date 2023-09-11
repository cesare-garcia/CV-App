import "./Resume.css"
import ResumeSection from "./ResumeSection";

function Resume(props) {

    return (
        <div className="resume">
            <div className="personal">
                <p>{props.information.name} {props.information.email} {props.information.phone} {props.information.address}</p>
            </div>
            <ResumeSection information={props.information} sType="education"></ResumeSection>
            <ResumeSection information={props.information} sType="work"></ResumeSection>
        </div>
    )

}

export default Resume;