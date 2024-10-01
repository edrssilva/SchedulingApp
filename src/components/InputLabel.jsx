function InputLabel(props) {
  return (
    <div>
      <label {...props} className="font-semibold text-secondary">
        {props.children}
      </label>
    </div>
  );
}

export default InputLabel;
