import { useEffect, useState } from "react";

export default function useFetch() {
	const [data, setData] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/todos/1",
				);
				setIsLoading(true);

				if (!response.ok) {
					setIsLoading(false);
					throw new Error("API failure");
				} else {
					const data = await response.json();
					setData(data);
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, []);

	return { data, isLoading, error };
}
