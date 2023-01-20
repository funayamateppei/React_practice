const TextInput = (props) => {
  // console.log(props);
	return (
		<div>
      <div>
        <span>{props.label}</span>
        {props.required && <span>必須</span>}
      </div>
			<input type="text" />
		</div>
	);
}

export default TextInput;