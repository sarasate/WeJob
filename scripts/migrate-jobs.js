import fs from "fs";
import path from "path";

// Read the existing jobs data
const jobsData = JSON.parse(fs.readFileSync("./src/data/jobs.json", "utf-8"));

// Create the content/jobs directory if it doesn't exist
const contentDir = "./src/content/jobs";
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Convert and save each job as a separate JSON file
jobsData.hits.forEach((job) => {
  const jobContent = {
    title: job.title,
    website_url: job.website_url,
    url: job.url,
    company: job.company || "Unknown Company",
    location: `${job.city}, ${job.country}`,
    description: job.description,
    requirements: job.skills ? job.skills.split(",").map((s) => s.trim()) : [],
    postedAt: job.created_at, // You might want to add actual dates
    type: "full-time", // Default value, adjust as needed
    remote: false, // Default value, adjust as needed
  };

  const fileName = `${job.id}.json`;
  fs.writeFileSync(
    path.join(contentDir, fileName),
    JSON.stringify(jobContent, null, 2)
  );
});

console.log("Jobs migration completed!");
