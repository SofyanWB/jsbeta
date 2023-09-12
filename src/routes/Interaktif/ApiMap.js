// ApiFetcher.js
import { useEffect, useState } from "react";

const apiUrl = "https://jakartasatu.jakarta.go.id/apimobile/app/web/maps"; // Define your API URL here

const ApiFetcher = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchData();
  }, []); 

  return apiData; // Now returning the JSON data directly
};

export default ApiFetcher;
