import Button from "./Button"
import CustomInput from "./CustomInput"

function Section(props) {

    if (props.sectionType === "edForm") {
        
        return (
            <section>
                <div className="sectionHeader">
                    <h2>Education</h2>
                    <Button onShow={props.onShow}></Button>
                </div>
                {/* if statement that logs previous entries */}
    
                {props.isActive ? (
                    <section id={props.sectionType}>
                        <div className="inputs">
                            hello
                        </div>
                        <div className="formButtons">
                            <Button></Button>
                            <Button></Button>
                            <Button></Button>
                        </div>
                    </section>
                 ) : null
                }
            </section>
        )

    } else {

        return (
            <section>
                <div className="sectionHeader">
                    <h2>Work Experience</h2>
                    <Button onShow={props.onShow}></Button>
                </div>
                {/* if statement that logs previous entries */}

                {props.isActive ? (
                    <section id={props.sectionType}>
                        <div className="inputs">
                            bye
                        </div>
                        <div className="formButtons">
                            <Button></Button>
                            <Button></Button>
                            <Button></Button>
                        </div>
                    </section>) : null
                }
            </section>
        )

    }






    
    
}

export default Section