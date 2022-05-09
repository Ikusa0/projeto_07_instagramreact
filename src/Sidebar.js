function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.userPicture} />
      <div class="texto">
        <strong>{props.userName}</strong>
        {props.name}
      </div>
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.userPicture} />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">{props.reason}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

function Sugestoes() {
  const sugestoes = [
    { userPicture: "assets/img/bad.vibes.memes.svg", username: "bad.vibes.memes", reason: "Segue você" },
    { userPicture: "assets/img/chibirdart.svg", username: "chibirdart", reason: "Segue você" },
    { userPicture: "assets/img/razoesparaacreditar.svg", username: "razoesparaacreditar", reason: "Novo no Instagram" },
    { userPicture: "assets/img/adorable_animals.svg", username: "adorable_animals", reason: "Segue você" },
    { userPicture: "assets/img/smallcutecats.svg", username: "smallcutecats", reason: "Segue você" },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((sugestao) => (
        <Sugestao userPicture={sugestao.userPicture} username={sugestao.username} reason={sugestao.reason} />
      ))}
    </div>
  );
}

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario userPicture="assets/img/catanacomics.svg" userName="catanacomics" name="Catana" />
      <Sugestoes />
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
