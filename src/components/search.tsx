import { useEffect, useState } from "react";
import { useAppDispatch, useDebounce } from "../hooks";
import { setSearchQuery } from "../store/features/searchSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const searchQuery = useDebounce(search, 300);

  useEffect(() => {
    dispatch(setSearchQuery(searchQuery));
  }, [searchQuery, dispatch]);
  return (
    <div>
      <input
        placeholder="search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <style jsx>{`
        input {
          width: 700px;
        }
      `}</style>
    </div>
  );
};

export default Search;
