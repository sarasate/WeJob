import axios from "axios";
import fs from "fs";

const fetchData = async () => {
  try {
    const response = await axios.post(
      "https://api.apijobs.dev/v1/job/search",
      {
        q: "Reactjs",
      },
      {
        headers: {
          apikey: process.env.APIJOBS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    fs.writeFileSync(
      "/Users/luis/Workspace/wejob/src/data/jobs.json",
      JSON.stringify(response.data)
    );
    console.log("Data fetched and stored successfully!");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
