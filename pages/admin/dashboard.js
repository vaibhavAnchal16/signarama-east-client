import { useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useMutation, useQuery } from "@apollo/client";
import { ADDREVIEWDATA } from "../../graphql/mutations";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import { GETREVIEWS } from "../../graphql/queries";

const Dashboard = () => {
  const [refetchreviews] = useMutation(ADDREVIEWDATA);
  const { data, loading, error } = useQuery(GETREVIEWS);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          type={`fill`}
          onClick={async (e) => {
            e.preventDefault();
            await refetchreviews();
            toast.success("Reviews refetched successfully");
          }}
        >
          Refetch Latest Reviews
        </Button>
      </div>
      <div>
        {data?.getGoogleReviews && (
          <pre>{JSON.stringify(data?.getGoogleReviews, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};
export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
