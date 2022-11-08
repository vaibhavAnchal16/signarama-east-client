import { useQuery } from "@apollo/client";
import { MYPROFILE } from "../graphql/queries";

export function useMyProfile() {
  const { data, loading, error } = useQuery(MYPROFILE, {
    fetchPolicy: "network-only",
  });
  return {
    myProfile: data?.myProfile,
    loading,
    error,
  };
}
