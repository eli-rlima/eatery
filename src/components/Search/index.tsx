import { ChangeEvent } from "react";
import SearchIcon from "../../assets/icons/search";

type Props = {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ onSearch }: Props) {
  return (
    <div className="flex flex-row w-full justify-center items-center absolute top-86">
      <div className="flex flex-row items-center justify-start">
        <SearchIcon className="absolute ml-3" />
        <input className="input-search" onChange={onSearch} placeholder="Encontre um restaurante" type="text" />
      </div>
    </div>
  );
}
