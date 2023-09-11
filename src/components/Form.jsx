import "./Form.css"
import { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import CustomInput from "./CustomInput";

function Form(props) {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleShow = (e) => {
        e.preventDefault();
        (activeIndex === 0) ? setActiveIndex(1) : setActiveIndex(0);
    }

    return (
        <form>
            <div className="buttonBar">
                <Button bType="clear" text="Clear" clear={props.clear}></Button>
                <Button information={props.information} bType="dload" text="Download"></Button>
            </div>
            <section>
                <h2>Personal Information</h2>
                <div className="inputs">
                    <CustomInput propertyName="name" changer={props.changer} information={props.information} identifier="my-name" labelText="Name"></CustomInput>
                    <CustomInput propertyName="email" changer={props.changer} information={props.information} identifier="my-email" labelText="Email"></CustomInput>
                    <CustomInput propertyName="phone" changer={props.changer} information={props.information} identifier="my-phone" labelText="Phone"></CustomInput>
                    <CustomInput propertyName="address" changer={props.changer} information={props.information} identifier="my-address" labelText="Address"></CustomInput>

                </div>
            </section>
            <div className="formBottom">
                <Section sectionType="edForm" isActive={activeIndex === 0} onShow={handleShow}></Section>
                <Section sectionType="workForm" isActive={activeIndex === 1} onShow={handleShow}></Section>
            </div>
        </form>
    )

}

export default Form;