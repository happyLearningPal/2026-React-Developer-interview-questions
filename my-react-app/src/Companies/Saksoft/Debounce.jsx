import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFecth";

export const Debounce = () => {
	const [search, setSearch] = useState("");
	const { data, error, isLoading } = useFetch();

	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		if (debouncedSearch) {
			console.log("API called");
		}
	}, [debouncedSearch]);

	console.log(data, error, isLoading);

	return (
		<div>
			<h2>Debounce example</h2>
			<p>Title is : {data?.title}</p>

			<input
				type="text"
				placeholder="Search here"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};
