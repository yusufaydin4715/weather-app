const API_KEY = "df03dffe8116c0d334567cf066c85803";

// fonksiyon şehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    //console.log(response.json());
    // eğer istek başarılı değilse hata fırlat
    if (!response.ok) {
      throw new Error("İstek başarili değil");
    }
    // API den gelen yanıtı JSON formatına dönüştür ve geri döndür
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// fetchWeatherData fonksiyonunu diger dosyalarda kullanılabilir hale getirir
export default fetchWeatherData;
