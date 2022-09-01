import { Restaurant } from "../../../api";

type Props = {
  item: Restaurant;
};

const generateStyle = (url: string) => ({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`
});

const Card = ({ item }: Props) => {
  return (
    <div className="card-img" style={generateStyle(item.image)}>
      <span className="card-title">{item.name}</span>
    </div>
  );
};

export default Card;
