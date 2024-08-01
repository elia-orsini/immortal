import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useSingleMagazineMeta(slug: string) {
  const { data, error, isLoading } = useSWR(`/api/magazine/${slug}`, SWRFetcher());

  return {
    magazineMeta: data,
    isLoadingMeta: isLoading,
    isError: error,
  };
}
