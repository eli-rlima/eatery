import Loading from "react-loading";
import { Restaurant } from "../../api";
import Card from "./Card";

type Props = {
  data: Restaurant[];
  loading: boolean;
  searchTerm: string;
};

export default function List({ data, loading, searchTerm }: Props) {
  return (
    <div className="flex flex-col w-full mb-28">
      <div className="flex justify-center items-start my-8 w-full">
        {searchTerm !== "" ? (
          <div className="flex flex-row justify-between w-[730px]">
            <h2 className="justify-start">Resultados</h2>
            <div className="flex flex-col">
              <div className="results-title">Resultados para</div>
              <h5>{searchTerm}</h5>
            </div>
          </div>
        ) : (
          <h2 className="w-[730px] justify-start">Restaurantes</h2>
        )}
      </div>
      {loading ? (
        <div className="flex w-full h-56 justify-center items-center">
          <Loading type="spin" width="4%" color="#DD4F50" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          {data.length > 0 ? (
            <div className="flex flex-row gap-x-6 gap-y-6 flex-wrap justify-start items-center w-[730px]">
              {data.map((restaurant) => {
                return (
                  <div key={restaurant.id} className="flex flex-row items-end w-fit">
                    <Card item={restaurant} />
                  </div>
                );
              })}
            </div>
          ) : searchTerm !== "" ? (
            <h3>Nenhum resultado encontrado</h3>
          ) : (
            <div className="flex w-full h-56 justify-center items-center">
              <Loading type="spin" width="4%" color="#DD4F50" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
