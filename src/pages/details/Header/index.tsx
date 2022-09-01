import { Restaurant } from "../../../api";
import BackIcon from "../../../assets/icons/back";
import { formatPhone } from "../../../utils";

type Props = {
  restaurant: Restaurant;
};

const generateStyle = (url: string, hasGradient: boolean = false) => ({
  background: `${
    hasGradient ? "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), " : ""
  }url(${url}) center center / cover no-repeat`
});

export default function Header({ restaurant }: Props) {
  return (
    <div>
      <section className="header-restaurant-cover" style={generateStyle(restaurant.image, true)} />
      <div
        className="flex flex-row items-center justify-between w-16 left-44 absolute top-13 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <BackIcon />
        <div className="text-white">Voltar</div>
      </div>
      <div className="flex flex-row items-center left-100 absolute top-10">
        <div className="container-logo">
          <section className="logo" style={generateStyle(restaurant.logo)} />
        </div>
        <div className="pl-6">
          <h1 className="text-white text-left">{restaurant.name}</h1>
          <div>
            <h6 className="text-white">{formatPhone(restaurant.telephone ?? "")}</h6>
            <h6 className="text-white">{restaurant.website}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
