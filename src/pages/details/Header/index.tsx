import { Link } from "react-router-dom";
import { Restaurant } from "../../../api";
import BackIcon from "../../../assets/icons/back";
import { links } from "../../../routes";
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
      <Link
        data-test="link-back"
        to={links.goHome()}
        className="flex flex-row items-center justify-around w-[68px] left-44 absolute top-13 cursor-pointer"
      >
        <BackIcon />
        <div className="back">Voltar</div>
      </Link>
      <div className="flex flex-row items-center left-100 absolute top-10">
        <div className="container-logo">
          <section data-testid="logo-restaurant" className="logo" style={generateStyle(restaurant.logo)} />
        </div>
        <div className="pl-6">
          <div data-test="restaurant-name" className="restaurant-name">
            {restaurant.name}
          </div>
          <div>
            <h6 className="text-white">{formatPhone(restaurant.telephone ?? "")}</h6>
            <h6 className="text-white">{restaurant.website}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
