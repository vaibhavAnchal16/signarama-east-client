// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { GoogleAuth } = require("google-auth-library");
const path = require("path");
const {
  mybusinessbusinessinformation_v1,
} = require("@googleapis/mybusinessbusinessinformation");

const keyFilePath = path.resolve(
  process.cwd(),
  "pages/api/signarama-brampton-reviews-7fbf0bdbbacb.json"
);

const googleAuth = new GoogleAuth({
  keyFile: keyFilePath,
  scopes: "https://www.googleapis.com/auth/business.manage",
});

export default async function handler(req, res) {
  try {
    const client = await googleAuth.getClient();

    // Initialize My Business API
    const myBusinessInfo =
      new mybusinessbusinessinformation_v1.Mybusinessbusinessinformation({
        auth: client,
      });

    // Replace with your actual account ID
    const accountName = "accounts/13382659664262137520";

    // Fetch business locations
    const response = await myBusinessInfo.accounts.locations.list({
      parent: accountName,
    });

    console.log("API Response:", response.data);

    // Return the API data as JSON
    res.status(200).json({
      locations: response.data,
    });
  } catch (error) {
    console.error("Error fetching business locations:", error);

    // Handle quota errors or others gracefully
    if (error.response && error.response.status === 429) {
      res
        .status(429)
        .json({ message: "Quota exceeded. Please try again later." });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
}
