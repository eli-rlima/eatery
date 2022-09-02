import { useNavigate } from "react-router";
import { Restaurant } from "../../../api";
import { links } from "../../../routes";

type Props = {
  item: Restaurant;
};

const generateStyle = (url: string) => ({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`
});

const Card = ({ item }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="card"
      className="card-img"
      style={generateStyle(item.image)}
      onClick={() => navigate(links.getDetails(item.id))}
    >
      <span className="card-title">{item.name}</span>
    </div>
  );
};

export default Card;
