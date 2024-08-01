import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useSingleMagazine(slug: string) {
  const { data, error, isLoading } = useSWR(`/api/magazine/${slug}`, SWRFetcher());

  return {
    magazineData: data,
    isLoading,
    isError: error,
  };
}
