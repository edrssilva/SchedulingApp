function InputControl(props) {
  return (
    <input
      {...props}
      className="w-full h-12 px-4 py-4 rounded border-solid border-2 border-input-light text-secondary-light placeholder:text-secondary-light placeholder:font-sans focus:transition-all focus:duration-150 focus:outline-secondary-light"
    />
  );
}
export default InputControl;
