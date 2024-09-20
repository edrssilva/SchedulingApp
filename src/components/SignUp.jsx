import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import InputLabel from "./InputLabel";
import InputControl from "./InputControl";
import ButtonPrimary from "./ButtonPrimary";

function onSignUpClick(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  phoneNumber
) {}

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          />
        </div>
        <ButtonPrimary>Criar conta</ButtonPrimary>
      </form>
    </div>
  );
}

export default SignUp;
