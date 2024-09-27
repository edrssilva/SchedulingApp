function InputLabel(props) {
  return (
    <div>
      <label {...props} lassName="font-semibold text-secondary-light">
        {props.children}
      </label>
    </div>
  );
}

export default InputLabel;
