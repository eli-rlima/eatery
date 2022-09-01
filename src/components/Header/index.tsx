export default function Header() {
  return (
    <div>
      <section className="header-cover" />
      <div className="flex flex-row items-center justify-between w-full px-60 absolute top-8">
        <span className="text-5xl">
          eat<span className="text-red-logo">e</span>ry
        </span>
        <div className="flex flex-col justify-end items-end">
          <h1>Descubra novos sabores</h1>
          <div className="w-96">
            <h3>Aqui eu converso com você sobre nossa proposta</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
