/*
Written by Team 27
-Additionally created CustomMenu.json
*/
var config = {
	address: '0.0.0.0',
	port: 8080,
	electronOptions: {},
	ipWhitelist: [],
	timeFormat: 12,
	units: 'imperial',
	modules: [{
		module: 'Custom-Module-Manipulation',
		config: {}
	},
	{
		module: 'MMM-Traffic',
		position: 'bottom_bar',
		classes: 'bright medium',
		config:
		{
			api_key: '', // Can be obtained at https://developers.google.com/maps/documentation/javascript/get-api-key
			mode: 'driving',
			origin: 'Joe Crowley Student Union',
			destination: 'Chick-fil-A, Reno',
			route_name: 'Get Chick-fil-A',
			changeColor: true,
			showGreen: false,
			limitYellow: 5, // Greater than 5% of journey time due to traffic
			limitRed: 20, // Greater than 20% of journey time due to traffic
			traffic_model: 'pessimistic',
			showAddress: 'true',
			interval: 60000
		}
	},
	{
		module: 'MMM-uber',
		position: 'bottom_right',
		header: 'Uber Arrival Time',
		config:
		{
			lat: 39.5446,  // Use your exact pickup loaction
			lng: -119.7628, // Use your exact pickup loaction
			uberServerToken: '' // Can be found at https://developer.uber.com/docs/riders/guides/authentication/server-token
		}
	},
	{
		module: "MMM-Stock",
		position: "bottom_left",
		config:
		{
			companies: ["MSFT", "GOOG", "ORCL", "AMD"],
			companySymbolInsteadOfName: true
		}
	},
	{
		module: 'MMM-Remote-Control',
		config:
		{
			customMenu: 'CustomMenu.json', customCommand: {}
		}
	},
	{
		module: 'MMM-ip',
		position: 'bottom_right',
		config:
		{
			showFamily: 'IPv4',
			fontSize: 15
		}
	},
	{
		module: 'clock',
		position: 'top_left',
		config:
		{
			displaySeconds: false,
			showPeriodUpper: true,
			dateFormat: "ddd, MMM D",
		},
		header: ''
	},
	{
		module: 'currentweather',
		position: 'top_right',
		config:
		{
			shown1: true,
			locationID: '5511077',
			appid: '', // Obtainable at https://openweathermap.org/api
			showFeelsLike: true,
			degreeLabel: true,
			iconTable:
			{
				'01d': 'wi-day-sunny',
				'02d': 'wi-day-cloudy',
				'03d': 'wi-cloudy',
				'04d': 'wi-cloudy-windy',
				'09d': 'wi-showers',
				'10d': 'wi-rain',
				'11d': 'wi-thunderstorm',
				'13d': 'wi-snow',
				'50d': 'wi-fog',
				'01n': 'wi-night-clear',
				'02n': 'wi-night-cloudy',
				'03n': 'wi-night-cloudy',
				'04n': 'wi-night-cloudy',
				'09n': 'wi-night-showers',
				'10n': 'wi-night-rain',
				'11n': 'wi-night-thunderstorm',
				'13n': 'wi-night-snow',
				'50n': 'wi-night-alt-cloudy-windy'
			}
		}
	},
	{
		module: 'calendar',
		header: 'Upcoming Events',
		position: 'top_left',
		config:
		{
			calendars: [{
				symbol: 'calendar',
				url: ''
				/*
				Instructions for Google Calendar integration:
				Sign into calendar.google.com
				Click gear icon -> settings -> Click on calendar name on right hand side (Private calendar)
				NOTE: Simple using the URL for public calendar works, if you are fine with making your calendar public
				Under the "Integrate Calendar" tab, copy the link in "Secret address in iCal format"
				*/
			}],
			displaySymbol: false,
			wrapEvents: true,
			showEnd: false,
			hideOngoing: true,
			urgency: 0,
			timeFormat: 'absolute',
			maxTitleLength: 20,
			fadePoint: 1
		}
	},
	{
		module: 'weatherforecast',
		position: 'top_right',
		header: 'Weather Forecast',
		config:
		{
			shown1: true,
			location: 'Reno, US',
			locationID: '5511077',
			appid: '', // Obtainable at https://openweathermap.org/api
			iconTable:
			{
				'01d': 'wi-day-sunny',
				'02d': 'wi-day-cloudy',
				'03d': 'wi-cloudy',
				'04d': 'wi-cloudy-windy',
				'09d': 'wi-showers',
				'10d': 'wi-rain',
				'11d': 'wi-thunderstorm',
				'13d': 'wi-snow',
				'50d': 'wi-fog',
				'01n': 'wi-night-clear',
				'02n': 'wi-night-cloudy',
				'03n': 'wi-night-cloudy',
				'04n': 'wi-night-cloudy',
				'09n': 'wi-night-showers',
				'10n': 'wi-night-rain',
				'11n': 'wi-night-thunderstorm',
				'13n': 'wi-night-snow',
				'50n': 'wi-night-alt-cloudy-windy'
			}
		}
	},
	{
		module: 'newsfeed',
		position: 'bottom_bar',
		config:
		{
			feeds: [{
				title: 'New York Times',
				url: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
			}],
			startTags: [],
			endTags: [],
			prohibitedWords: []
		}
	}],
	paths: { modules: 'modules', vendor: 'vendor' }
}

if (typeof module !== 'undefined') {module.exports = config;}
