import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map({ location, zoomLevel }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDTrUV4L5YAb5SpsAwWTDe1bK6qAMrKV_M",
  });
  const center = useMemo(() => ({ lat: 45.57479, lng: -74.565 }), []);

  return (
    <div className="h-full w-full">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={10}
        >
          <MarkerF position={{ lat: 45.57478, lng: -74.565 }} />
        </GoogleMap>
      )}
    </div>
  );
}
