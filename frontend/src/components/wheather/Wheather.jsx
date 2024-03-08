// Weather.js
import React from 'react';

const Wheather = ({ data }) => {
  return (
    <div className="Weather">
      <h1>Weather</h1>
      <h2>{data.city}</h2>
      
      <div>
        <p><strong>Météo actuelle :</strong> {data.current_weather}</p>
        <p><strong>Température :</strong> {data.temp}°C</p>
        <p><strong>Température attendue :</strong> {data.expected_temp}</p>
        <p><strong>Tendance météo :</strong> {data.insight_heading}</p>
        <p><strong>Description de la tendance météo :</strong> {data.insight_description}</p>
        <p><strong>Vent :</strong> {data.wind}</p>
        <p><strong>Humidité :</strong> {data.humidity}</p>
        <p><strong>Visibilité :</strong> {data.visibility}</p>
        <p><strong>Indice UV :</strong> {data.uv_index}</p>
        <p><strong>Indice de qualité de l'air (AQI) :</strong> {data.aqi}</p>
        <p><strong>Remarque sur l'indice de qualité de l'air :</strong> {data.aqi_remark}</p>
        <p><strong>Description de l'indice de qualité de l'air :</strong> {data.aqi_description}</p>
        <p><strong>Dernière mise à jour :</strong> {data.last_update}</p>
      </div>
      <img src={data.bg_image} alt="Background" />
    </div>
  );
};

export default Wheather;
