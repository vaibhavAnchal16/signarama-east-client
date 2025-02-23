import { useCallback, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";

const Dashboard = () => {
  const getReview = useCallback(async () => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY; // Store your API key in a .env file
    const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID; // Replace with your place ID
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.data.result) {
        console.log("Business Name:", response.data.result.name);
        console.log("Rating:", response.data.result.rating);
        console.log("Reviews:");
        response.data.result.reviews.forEach((review, index) => {
          console.log(
            `\n${index + 1}. ⭐ ${review.rating} - ${review.author_name}`
          );
          console.log(review.text);
        });
      } else {
        console.log("No reviews found or invalid place ID.");
      }
    } catch (error) {
      console.error(
        "Error fetching reviews:",
        error.response?.data || error.message
      );
    }
  }, []);

  useEffect(() => {
    getReview();
  }, [getReview]);

  return <div>Manage Review</div>;
};
export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
