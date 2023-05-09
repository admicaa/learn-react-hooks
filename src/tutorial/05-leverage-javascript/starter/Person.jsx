import defaultAvatar from "../../../assets/default-avatar.svg";
const Person = ({
  person: {
    images = [
      {
        small: {
          url: defaultAvatar,
        },
      },
    ],
    name,
    nickName = "Hello world",
  },
}) => {
  return (
    <div>
      <div>
        {images.map((image) => (
          <img
            key={image.small.url}
            src={image.small.url}
            style={{ maxWidth: "50px" }}
          />
        ))}
      </div>
      <div>{name}</div>
      <div>NickName {nickName}</div>
    </div>
  );
};
export default Person;
