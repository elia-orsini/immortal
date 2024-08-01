
import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useMagazines() {
  const { data, error, isLoading } = useSWR(`/api/magazines`, SWRFetcher());

  return {
    magazines: data,
    isLoading,
    isError: error,
  };
}
