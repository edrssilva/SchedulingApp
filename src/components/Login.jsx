import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import InputLabel from "./InputLabel";
import InputControl from "./InputControl";
import ButtonPrimary from "./ButtonPrimary";

function onLoginClick(email, password) {
  
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-8 max-[360px] p-8 rounded-lg bg-white shadow-md">
      <LoginHeader />

      <form action="" className="flex flex-col gap-8">
        <div>
          <InputLabel>Email</InputLabel>
          <InputControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu email"
          />
        </div>
        <div>
          <InputLabel>Senha</InputLabel>
          <InputControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Insira sua senha"
          />
          <a
            href="#"
            className="relative float-end text-xs underline text-secondary-light"
          >
            Esqueci minha senha
          </a>
        </div>
        <ButtonPrimary>Entrar</ButtonPrimary>
      </form>
    </div>
  );
}

export default Login;
