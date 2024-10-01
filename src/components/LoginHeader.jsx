import Logotype from "./Logotype";

function LoginHeader() {
  return (
    <header className="flex flex-col gap-4 text-center">
      <Logotype />
      <h2 className="font-sans font-bold text-2xl text-secondary">
        Entre na sua conta
      </h2>
    </header>
  );
}

export default LoginHeader;
