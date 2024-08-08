import useSWR from "swr";
import SWRFetcher from "../utils/SWRFetcher";

export default function useSingleMagazineData(slug: string) {
  const { data, error, isLoading } = useSWR(
    `/api/magazineData/${slug}`,
    SWRFetcher()
  );

  return {
    magazineData: data,
    isLoadingData: isLoading,
    isError: error,
  };
}
