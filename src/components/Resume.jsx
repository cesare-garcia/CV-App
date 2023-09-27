import "./Resume.css"
import ResumeSection from "./ResumeSection";

function Resume(props) {

    return (
        <div className="resume">
            <div className="personal">
                <div style={{fontSize: 24}}><b>{props.allInfo.pInfo.name}</b></div>
                <div className="personalBottom">
                    <p>{props.allInfo.pInfo.email}</p>
                    <p>{props.allInfo.pInfo.phone}</p>
                    <p>{props.allInfo.pInfo.address}</p>
                </div>
            </div>
            <div className="nonPersonal">
                <ResumeSection allInfo={props.allInfo} sType="education"></ResumeSection>
                <ResumeSection allInfo={props.allInfo} sType="work"></ResumeSection>
            </div>
        </div>
    )

}

export default Resume;