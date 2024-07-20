import axios from "axios";
import fs from "fs";

// Fetch Data from the depjobs APi with thisq query:
// curl --location 'https://api.apijobs.dev/v1/job/search' \
// --header 'apikey: bc36c9a4598f8d05950fe6665af56ad6781a6b3b9369d1e9dddbdffa92c56de4' \ --header 'Content-Type: application/json' \
// --data '{
//   "q" : "Reactjs"
// }'
// and store the data in a file called jobs.json
const fetchData = async () => {
  try {
    const response = await axios.post(
      "https://api.apijobs.dev/v1/job/search",
      {
        q: "Reactjs",
      },
      {
        headers: {
          apikey:
            "bc36c9a4598f8d05950fe6665af56ad6781a6b3b9369d1e9dddbdffa92c56de4",
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
