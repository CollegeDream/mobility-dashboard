import React, { useState } from "react";
import { ingestData } from "../api";


const IngestDataComponent = () => {
    const [ingesting, setIngesting] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleIngestData = async () => {
        setIngesting(true);
        setResult(null);
        setError(null);

        const files = {
            bus_file: "data/bus_location.json",
            van_file: "data/van_location.json",
            weather_file: "data/weather_updates.json",
            passenger_file: "data/passengers.csv",
        };

        try {
            const response = await ingestData(files);
            setResult(response);

        } catch (err) {

            setError("Failed to ingest data. Please try again.");
        } finally {
            setIngesting(false);
        }
    };

    return (
        <div>
            <button onClick={handleIngestData} disabled={ingesting}>
                {ingesting ? "Ingesting Data..." : "Ingest Data"}
            </button>
            {result && (
                <div>
                    <h3>Ingestion Results:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default IngestDataComponent;
