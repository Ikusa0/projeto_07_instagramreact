import React from "react";

function Topo(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.userPicture} />
        {props.userName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Conteudo(props) {
  return (
    <div onClick={props.like} class="conteudo">
      <img src={props.postImage} />
    </div>
  );
}

function Fundo(props) {
  const icons = ["chatbubble-outline", "paper-plane-outline"];

  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon onClick={props.toggleLike} name={props.likeIcon} class={props.toggleRed}></ion-icon>
          {icons.map((icon) => (
            <ion-icon name={icon}></ion-icon>
          ))}
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.likedPicture} />
        <div class="texto">
          Curtido por <strong>{props.likedName}</strong> e <strong>outras {props.likedQtd} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

export default function Post(props) {
  const [likeIcon, setLikeIcon] = React.useState("heart-outline");
  const [toggleRed, setToggleRed] = React.useState("");

  function toggleLike() {
    setToggleRed(likeIcon === "heart-outline" ? "md hydrated red" : "md hydrated");
    setLikeIcon(likeIcon === "heart" ? "heart-outline" : "heart");
  }

  function like() {
    setToggleRed("md hydrated red");
    setLikeIcon("heart");
  }

  return (
    <div class="post">
      <Topo userPicture={props.userPicture} userName={props.userName} />
      <Conteudo postImage={props.postImage} like={like} />
      <Fundo
        likedPicture={props.likedPicture}
        likedName={props.likedName}
        likedQtd={props.likedQtd}
        toggleLike={toggleLike}
        likeIcon={likeIcon}
        toggleRed={toggleRed}
      />
    </div>
  );
}
