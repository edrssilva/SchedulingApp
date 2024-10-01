import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import InputLabel from "../components/InputLabel";
import InputControl from "../components/InputControl";
import ButtonPrimary from "../components/ButtonPrimary";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusShowing, setStatus] = useState("hidden");
  const [error, setError] = useState("");
  const [sucess, setSuccess] = useState("");
  const [user, setUser] = useState(null);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleLoginClick = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setError("");
      setStatus("block");
      setSuccess("Logado com sucesso, aguarde...");
      await delay(2500);
      setUser(response.data);
      navigate("/dashboard");
    } catch (error) {
      if (!error?.response) {
        setSuccess("");
        setStatus("block");
        setError("Erro ao acessar o servidor");
      } else if (error.response.status == 401) {
        setSuccess("");
        setStatus("block");
        setError("Email ou senha inválidos");
      }
    }
  };

  function handleSignUpClick() {
    navigate("/cadastro");
  }

  return (
    <div className="flex flex-col gap-8 max-[360px] p-8 rounded-lg bg-white shadow-md">
      <LoginHeader />

      <form action="" className="flex flex-col gap-8">
        <div>
          <InputLabel for="email">Email</InputLabel>
          <InputControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu email"
            required
          />
        </div>
        <div>
          <InputLabel for="password">Senha</InputLabel>
          <InputControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Insira sua senha"
            required
          />
          <a
            href="#"
            className="relative float-end text-xs underline text-secondary"
          >
            Esqueci minha senha
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <ButtonPrimary onClick={(e) => handleLoginClick(e)}>
            Entrar
          </ButtonPrimary>
          <a
            className="text-center text-sm text-primary underline cursor-pointer"
            onClick={(e) => handleSignUpClick(e)}
          >
            Não tem uma conta ainda? Cadastre-se já!
          </a>
        </div>
      </form>
      <div className={`text-center m-0 p-0 ${statusShowing}`}>
        <span className="text-red-500 font-medium">{error}</span>
        <span className="text-green-500 font-medium">{sucess}</span>
      </div>
    </div>
  );
}

export default Login;
