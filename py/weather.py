import requests, json

def getCurrentWeather(city_name="Bengaluru"):
	api_key = "5219f91e66b4193a602bf88ad25cad01"
	base_url = "http://api.openweathermap.org/data/2.5/weather?"
	complete_url = base_url + "appid=" + api_key + "&q=" + city_name
	response = requests.get(complete_url)
	weather_page = response.json()
	celsius = weather_page['main']['temp'] - 273.15
	return celsius, weather_page['weather'][0]['description'], weather_page['weather'][0]['icon']
