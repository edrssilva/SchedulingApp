function InputLabel(props) {
  return (
    <div>
      <label className="font-semibold text-secondary-light">
        {props.children}
      </label>
    </div>
  );
}

export default InputLabel;
