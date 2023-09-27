import Button from "./Button"
import CustomInput from "./CustomInput"
import Entry from "./Entry"
import "./Section.css"
import { useState } from "react"

function Section(props) {

    let sectionHeader;
    let inputObject = {};
    let buttonType;
    const [editedEntry, setEditedEntry] = useState(-1);
    if (props.sectionType === "edForm") {
        sectionHeader = "Education";
        buttonType = "expEd";
        inputObject = {
            label1: "School",
            label2: "Major",
            type: "edForm",
            identifier1: "newSchool",
            identifier2: "newMajor",
            identifier3: "newEdStart",
            identifier4: "newEdEnd",
            identifier5: "newEdLocation",
            addButtonText: "Add Education"
        };

    } else {
        sectionHeader = "Work Experience";
        buttonType = "expWork";
        inputObject = {
            label1: "Company",
            label2: "Role",
            type: "workForm",
            identifier1: "newCompany",
            identifier2: "newRole",
            identifier3: "newWorkStart",
            identifier4: "newWorkEnd",
            identifier5: "newWorkLocation",
            identifier6: "workDescription",
            addButtonText: "Add Work Experience"
        };

    }

    const addToCollection = (e) => {
        e.preventDefault();
        let firstChanger;
        let secondChanger;
        let newExperience = {};

        if (e.target.classList.contains("saveEd")) {
            firstChanger = props.allChangers.eChanger1;
            secondChanger = props.allChangers.eChanger2;
            let newSchool = document.querySelector("#newSchool");
            let newMajor = document.querySelector("#newMajor");
            let schoolStart = document.querySelector("#newEdStart");
            let schoolEnd = document.querySelector("#newEdEnd");
            let schoolLocation = document.querySelector("#newEdLocation");
            newExperience.institution = newSchool.value;
            newExperience.focus = newMajor.value;
            newExperience.start = schoolStart.value;
            newExperience.end = schoolEnd.value;
            newExperience.location = schoolLocation.value;
            newSchool.value = "";
            newMajor.value = "";
            schoolStart.value = "";
            schoolEnd.value = "";
            schoolLocation.value = "";

        } else {
            firstChanger = props.allChangers.wChanger1;
            secondChanger = props.allChangers.wChanger2;
            let newCompany = document.querySelector("#newCompany");
            let newRole = document.querySelector("#newRole");
            let workStart = document.querySelector("#newWorkStart");
            let workEnd = document.querySelector("#newWorkEnd");
            let workLocation = document.querySelector("#newWorkLocation");
            let workDescription = document.querySelector("#workDescription");
            newExperience.institution = newCompany.value;
            newExperience.focus = newRole.value;
            newExperience.start = workStart.value;
            newExperience.end = workEnd.value;
            newExperience.location = workLocation.value,
            newExperience.description = workDescription.value;
            newCompany.value = "";
            newRole.value = "";
            workStart.value = "";
            workEnd.value = "";
            workLocation.value = "";
            workDescription.value = "";
    
        }

        firstChanger({});
        secondChanger(prevState => ([...prevState, newExperience]));
        props.sIC.enFunction3({newEd: false, newWork: false});
        
    }

    const openEdit = (e) => {
        e.preventDefault();
        let editKey = e.target.getAttribute("data-entry");
        let selectedEditIndex = -1;

        if (e.target.classList.contains("editEducation")) {
            for (let i = 0; i < props.allInfo.eInfo2.length; i++) {
                if ( props.allInfo.eInfo2[i].institution === editKey ) selectedEditIndex = i;
            }
            
        } else if (e.target.classList.contains("editWork")) {
            for (let i = 0; i < props.allInfo.wInfo2.length; i++) {
                if ( props.allInfo.wInfo2[i].institution === editKey ) selectedEditIndex = i;
            }
            
        }
        setEditedEntry(selectedEditIndex);

    }

    const deleteEntry = (e) => {
        e.preventDefault();
        let key;
        let revisedArray = [];
        let targetCollection;
        let properChanger;

        if (e.target.classList.contains("deleteEd")) {
            key = document.querySelector("#newSchool").value;
            targetCollection = props.allInfo.eInfo2;
            properChanger = props.allChangers.eChanger2;

        } else if (e.target.classList.contains("deleteWork")) {
            key = document.querySelector("#newCompany").value;
            targetCollection = props.allInfo.wInfo2;
            properChanger = props.allChangers.wChanger2;

        }

        revisedArray = targetCollection.filter((entry) => entry.institution !== key);
        properChanger(revisedArray);
        setEditedEntry(-1);
    
    }

    const saveEdit = (e) => {
        e.preventDefault();
        setEditedEntry(-1);
    }

    if (inputObject.type === "edForm" && props.sIC.exStat.ed === true && editedEntry !== -1) {

        return (
            
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
                <div>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="institution" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier1} labelText={inputObject.label1} sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="focus" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier2} labelText={inputObject.label2} sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="start" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier3} labelText="Start Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="end" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier4} labelText="End Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="location" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier5} labelText="Location" sectionType={inputObject.type}></CustomInput>
                </div>
                <div className="buttonBar">
                    <Button buttonType="deleteEd" text="Delete" clickFunction={deleteEntry}></Button>
                    <Button buttonType="saveEdEdit" text="Save" clickFunction={saveEdit}></Button>
                </div>
            </section>
            
        )

    } else if (inputObject.type === "workForm" && props.sIC.exStat.work === true && editedEntry !== -1) {

        return (
           
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
                <div>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="institution" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier1} labelText={inputObject.label1} sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="focus" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier2} labelText={inputObject.label2} sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="start" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier3} labelText="Start Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="end" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier4} labelText="End Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput editChanger={setEditedEntry} editEntry={editedEntry} propertyName="location" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier5} labelText="Location" sectionType={inputObject.type}></CustomInput>
                    <CustomInput taStat="true" editChanger={setEditedEntry} editEntry={editedEntry} propertyName="description" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier6} labelText="Description" sectionType={inputObject.type}></CustomInput>
                </div>
                <div className="buttonBar">
                    <Button buttonType="deleteWork" text="Delete" clickFunction={deleteEntry}></Button>
                    <Button buttonType="saveWorkEdit" text="Save" clickFunction={saveEdit}></Button>
                </div>
            </section>
           
        )

    } else if (inputObject.type === "edForm" && props.sIC.exStat.ed === true && props.sIC.enStat.newEd === true) {

        return (
           
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
                <p>Please fill out the following fields:</p>
                <div>
                    <CustomInput propertyName="institution" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier1} labelText={inputObject.label1} sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="focus" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier2} labelText={inputObject.label2} sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="start" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier3} labelText="Start Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="end" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier4} labelText="End Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="location" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier5} labelText="Location" sectionType={inputObject.type}></CustomInput>
                </div>
                <div className="buttonBar">
                    <Button buttonType="cancelNewEd" text="Cancel" clickFunction={props.sIC.enFunction2}></Button>
                    <Button buttonType="saveEd" text="Save" clickFunction={addToCollection}></Button>
                </div>
            </section>
        
        )

    } else if (inputObject.type === "workForm" && props.sIC.exStat.work === true && props.sIC.enStat.newWork === true) {

        return (
            
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
                <p>Please fill out the following fields:</p>
                <div>
                    <CustomInput propertyName="institution" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier1} labelText={inputObject.label1} sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="focus" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier2} labelText={inputObject.label2} sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="start" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier3} labelText="Start Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="end" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier4} labelText="End Date" sectionType={inputObject.type}></CustomInput>
                    <CustomInput propertyName="location" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier5} labelText="Location" sectionType={inputObject.type}></CustomInput>
                    <CustomInput taStat="true" propertyName="description" allInfo={props.allInfo} allChangers={props.allChangers} identifier={inputObject.identifier6} labelText="Description" sectionType={inputObject.type}></CustomInput>
                </div>
                <div className="buttonBar">
                    <Button buttonType="cancelNewWork" text="Cancel" clickFunction={props.sIC.enFunction2}></Button>
                    <Button buttonType="saveWork" text="Save" clickFunction={addToCollection}></Button>
                </div>
            </section>
            
        )

    } else if (inputObject.type === "edForm" && props.sIC.exStat.ed === true && props.sIC.enStat.newEd === false) {

        return (
            
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
                <Entry allInfo={props.allInfo} entryType="ed" editFunction={openEdit}></Entry>
                <Button buttonType="addEd" text={inputObject.addButtonText} clickFunction={props.sIC.enFunction1}></Button>
            </section>
                
        )

    } else if (inputObject.type === "workForm" && props.sIC.exStat.work === true && props.sIC.enStat.newWork === false) {

        return (
            
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
                <Entry allInfo={props.allInfo} entryType="work" editFunction={openEdit}></Entry>
                <Button buttonType="addWork" text={inputObject.addButtonText} clickFunction={props.sIC.enFunction1}></Button>
            </section>
            
        )

    } else if (inputObject.type === "workForm"){

        return (
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
            </section>
        )

    } else if (inputObject.type === "edForm") {

        return (
            <section className="iSection">
                <div className="sectionHeader">
                    <h2>{sectionHeader}</h2>
                    <Button buttonType={buttonType} text="..." clickFunction={props.sIC.exFunction}></Button>
                </div>
            </section>
        )

    }
    
}

export default Section