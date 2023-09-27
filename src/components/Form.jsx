import "./Form.css"
import { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import CustomInput from "./CustomInput";

function Form(props) {

    const [expansionStatus, setExpansionStatus] = useState({ ed: false, work: false});
    const [newEntry, setNewEntry] = useState({ newEd: false, newWork: false});

    const handleExpansion = (e) => {
        e.preventDefault();
        let targetElement = e.target;
        if (targetElement.classList.contains("expEd") && !expansionStatus.ed && !expansionStatus.work) {
            setExpansionStatus({ed: true, work: false});

        } else if (targetElement.classList.contains("expEd") && expansionStatus.ed && !expansionStatus.work) {
            setExpansionStatus({ed: false, work: false});

        } else if (targetElement.classList.contains("expWork") && !expansionStatus.ed && !expansionStatus.work) {
            setExpansionStatus({ed: false, work: true});

        } else if (targetElement.classList.contains("expWork") && !expansionStatus.ed && expansionStatus.work) {
            setExpansionStatus({ed: false, work: false});

        } else if (targetElement.classList.contains("expEd") && !expansionStatus.ed && expansionStatus.work) {
            setExpansionStatus({ed: true, work: false});

        } else if (targetElement.classList.contains("expWork") && expansionStatus.ed && !expansionStatus.work) {
            setExpansionStatus({ed: false, work: true});

        }

    }

    const initiateNewEntry = (e) => {
        e.preventDefault();
        (e.target.classList.contains("addEd")) ? setNewEntry({newEd: true, newWork: false}) : setNewEntry({newEd: false, newWork: true});
    }

    const cancelNewEntry = (e) => {
        e.preventDefault();
        let targetElement = e.target;
        if (targetElement.classList.contains("cancelNewEd") && newEntry.newEd === true) {
            let newSchool = document.querySelector("#newSchool");
            newSchool.value = "";
            let newMajor = document.querySelector("#newMajor");
            newMajor.value = "";
            let newSchoolStart = document.querySelector("#newEdStart");
            newSchoolStart.value = "";
            let newSchoolEnd = document.querySelector("#newEdEnd");
            newSchoolEnd.value = "";
            let newSchoolLocation = document.querySelector("#newEdLocation");
            newSchoolLocation.value = "";
            setNewEntry({newEd: false, newWork: false});
            props.allChangers.eChanger1({});

        } else {
            
            let newCompany = document.querySelector("#newCompany");
            newCompany.value = "";
            let newRole = document.querySelector("#newRole");
            newRole.value = "";
            let workStart = document.querySelector("#newWorkStart");
            workStart.value = "";
            let workEnd = document.querySelector("#newWorkEnd");
            workEnd.value = "";
            let newWorkLocation = document.querySelector("#newWorkLocation");
            newWorkLocation.value = "";
            let workDesc = document.querySelector("#workDescription");
            workDesc.value = "";
            setNewEntry({newEd: false, newWork: false})
            props.allChangers.wChanger1({}); 

        }
    }

    const statusObject = {
        exStat: expansionStatus,
        enStat: newEntry,
        exFunction: handleExpansion,
        enFunction1: initiateNewEntry,
        enFunction2: cancelNewEntry,
        enFunction3: setNewEntry
    }

    const downloadFunction = (e) => {
        e.preventDefault();
        alert("Download function has been disabled by creator.")
        // const resume = document.querySelector(".resume");
        // const htmlContent = resume.innerHTML;

        // const styles = document.getElementsByTagName('style');
        // let allStyles = '';
        // for (let i = 0; i < styles.length; i++) {
        //     allStyles += styles[i].outerHTML;
        // }
        // const fullHtml = `
        //     <!DOCTYPE html>
        //     <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //         ${allStyles}
        //     </head>
        //     <body>
        //         ${htmlContent}
        //     </body>
        //     </html>`
        // ;
        // const blob = new Blob([fullHtml], {type: 'text/html'});
        // const url = URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = url;
        // link.download = 'resume.html';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url);
    }

    return (
        <form>
            <div className="buttonBar">
                <Button buttonType="clear" clickFunction={props.allChangers.reset} text="Clear"></Button>
                <Button buttonType="download" clickFunction={downloadFunction} text="Download"></Button>
            </div>
            <section className="iSection">
                <h2>Personal Information</h2>
                <div>
                    <CustomInput propertyName="name" allInfo={props.allInfo} allChangers={props.allChangers} identifier="my-name" labelText="Name"></CustomInput>
                    <CustomInput propertyName="email" allInfo={props.allInfo} allChangers={props.allChangers} identifier="my-email" labelText="Email"></CustomInput>
                    <CustomInput propertyName="phone" allInfo={props.allInfo} allChangers={props.allChangers} identifier="my-phone" labelText="Phone"></CustomInput>
                    <CustomInput propertyName="address" allInfo={props.allInfo} allChangers={props.allChangers} identifier="my-address" labelText="Address"></CustomInput>
                </div>
            </section>
            <div className="formBottom">
                <Section allInfo={props.allInfo} allChangers={props.allChangers} sectionType="edForm" sIC={statusObject}></Section>
                <Section allInfo={props.allInfo} allChangers={props.allChangers} sectionType="workForm" sIC={statusObject}></Section>
            </div>
        </form>
    )

}

export default Form;