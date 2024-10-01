function InputControl(props) {
  return (
    <input
      {...props}
      className="w-full h-12 px-4 py-4 rounded border-solid border-2 border-input-light text-secondary placeholder:text-secondary placeholder:font-sans focus:transition-all focus:duration-150 focus:outline-secondary"
    />
  );
}
export default InputControl;
