import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";
import InputLabel from "../components/InputLabel";
import InputControl from "../components/InputControl";
import ButtonPrimary from "../components/ButtonPrimary";

async function handleSignUpClick(
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) {
  e.preventDefault();

  await api.post("/usuarios");
}

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex flex-col gap-8 max-[360px] p-8 rounded-lg bg-white shadow-md">
      <LoginHeader />

      <form action="" className="flex flex-col gap-8">
        <div>
          <InputLabel>Primeiro Nome</InputLabel>
          <InputControl
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Insira seu primeiro nome"
            required
          />
        </div>
        <div>
          <InputLabel>Último Nome</InputLabel>
          <InputControl
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Insira seu último nome"
            required
          />
        </div>
        <div>
          <InputLabel>Email</InputLabel>
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
          <InputLabel>Senha</InputLabel>
          <InputControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Insira a senha"
            required
          />
        </div>
        <div>
          <InputLabel>Confirmar Senha</InputLabel>
          <InputControl
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme a senha"
            required
          />
        </div>
        <ButtonPrimary
          onClick={(e) =>
            handleSignUpClick(
              firstName,
              lastName,
              email,
              password,
              confirmPassword
            )
          }
        >
          Criar conta
        </ButtonPrimary>
      </form>
    </div>
  );
}

export default SignUp;
