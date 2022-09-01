import { Restaurant } from "../../../api";
import Separator from "../../../components/Separator";

type Props = {
  restaurant: Restaurant;
};

export default function Body({ restaurant }: Props) {
  return (
    <div className="flex flex-col justify-center items-start my-7.5 mx-100">
      <div>
        <h6 className="text-dark-down font-bold mb-1">Descrição</h6>
        <div className="description">{restaurant.description}</div>
      </div>
      <div className="mt-5">
        <h6 className="text-dark-down font-bold mb-1">Faixa de preço</h6>
        <div className="info">{restaurant.price_range}</div>
      </div>
      <div className="my-7.5">
        <Separator />
      </div>
      <div>
        <h6 className="text-dark-down font-bold mb-1">Horários de funcionamento</h6>
        <div className="info">{restaurant.opening_hours}</div>
      </div>
      <div className="mt-5">
        <h6 className="text-dark-down font-bold mb-1">Formas de pagamento</h6>
        <div className="info">{restaurant.payment_methods}</div>
      </div>
    </div>
  );
}
