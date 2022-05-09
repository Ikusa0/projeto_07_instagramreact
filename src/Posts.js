import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      userPicture: "assets/img/meowed.svg",
      userName: "meowed",
      postImage: "assets/img/gato-telefone.svg",
      likedPicture: "assets/img/respondeai.svg",
      likedName: "respondeai",
      likedQtd: 101.523,
    },
    {
      userPicture: "assets/img/barked.svg",
      userName: "barked",
      postImage: "assets/img/dog.svg",
      likedPicture: "assets/img/adorable_animals.svg",
      likedName: "adorable_animals",
      likedQtd: 99.159,
    },
  ];

  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          userPicture={post.userPicture}
          userName={post.userName}
          postImage={post.postImage}
          likedPicture={post.likedPicture}
          likedName={post.likedName}
          likedQtd={post.likedQtd}
        />
      ))}
    </div>
  );
}
