function ButtonPrimary(props) {
  return (
    <button
      {...props}
      className="flex justify-center items-center w-full h-12 rounded shadow-md bg-primary text-2xl font-bold text-white hover:scale-105 transition-all"
    >
      {props.children}
    </button>
  );
}

export default ButtonPrimary;
