import Logo from "./Logo";

function Logotype() {
  return (
    <div className="flex justify-between items-center gap-6">
      <Logo size="48" />
      <h1 className="text-4xl font-bold text-primary">Agendamentos</h1>
    </div>
  );
}

export default Logotype;
