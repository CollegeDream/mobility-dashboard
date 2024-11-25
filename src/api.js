export const fetchDashboardData = async () => {
    const response = await fetch("http://localhost:5000/dashboard");
    if (!response.ok) {
      throw new Error("Failed to fetch dashboard data");
    }
    return response.json();
  };
  

const URL = "http://localhost:5000";

export const ingestData = async (files) => {
  try {
    console.log("Files sent for ingestion", files)
    const response = await fetch(`${URL}/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(files),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json(); // Return the server's response
  } catch (error) {
    console.error("Error during data ingestion:", error);
    throw error;
  }
};

export const processData = async () => {
  try {
    const response = await fetch(`${URL}/process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to process data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error during data processing:", error);
    throw error;
  }
};


