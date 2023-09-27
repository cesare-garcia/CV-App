function Button(props) {

    return (
        <button className={props.buttonType} onClick={props.clickFunction}>{props.text}</button>
    )

}

export default Button;