/*
Written by Team 27
-Fixed module name search (iteration -> enumeration) to avoid MM.getModules() placing NULL value in disabled modules
-Added additional notification types (Toggle, xx, xx)
*/

Module.register("Custom-Module-Manipulation",{

	// Function to catch notification and parse it
	notificationReceived: function(notification, payload){
		// Will send command to the module to reset to default
		if(notification === 'RESET_TO_DEFAULT'){
			this.setDefaults();
		}
		// Notification for moving the module
		if(notification === 'MOVE_MODULE'){
			position = payload;
			var split_position = position.split("_");
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == split_position[0]){
					var id = modules[i].identifier;
				}
			}
			// Split the notification since it contains module name, action, and position
			var selected_module = document.getElementById(id);
			var region = document.querySelector('div.region.' + split_position[1] + '.' + split_position[2] + ' div.container');
			// Make sure the region is visible
			if (region.style.display === 'none') {
				region.style.display = 'block';
			}
			// Move module according to the specified position
			region.appendChild(selected_module);
		}
		// Will show a hidden module or hide a shown module
		if(notification === 'TOGGLE_MODULE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					if(modules[i].hidden){
						modules[i].show(1000, function() {});
					}
					else{
						modules[i].hide(1000, function() {});
					}
				}
			}
		}
/* Deprecated in favor of toggle to keep remote menu uncluttered
		if(notification === 'HIDE_MODULE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					if(payload == 'currentweather' || payload == 'weatherforecast'){
						modules[i].config.shown1 = false;
					}
					modules[i].hide(1000, function() {});
				}
			}
		}
		if(notification === 'SHOW_MODULE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					if(payload == 'currentweather' || payload == 'weatherforecast'){
						modules[i].config.shown1 = true;
					}
					modules[i].show(1000, function() {});
				}
			}
		}
*/
		// Specialized notification for showing or hiding the default
		// clock module's seconds display
		if(notification === 'CLOCK_TOGGLE_SECONDS'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					modules[i].config.displaySeconds = !modules[i].config.displaySeconds;
				}
			}
		}
		// Specialized notification for switching between analog or digital
		// for the default clock module
		if(notification === 'TOGGLE_DIGITALANALOG'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					if(modules[i].config.displayType == "digital"){
						modules[i].config.displayType = "analog";
					}
					else if(modules[i].config.displayType == "analog"){
						modules[i].config.displayType = "digital";
					}
				}
			}
		}
		// Specialized notification for cycling through the different
		// analog clock themes
		if(notification === 'CYCLE_ANALOG'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					switch(modules[i].config.analogFace){
						case "face-001":
							modules[i].config.analogFace = "face-002";
							break;
						case "face-002":
							modules[i].config.analogFace = "face-003";
							break;
						case "face-003":
							modules[i].config.analogFace = "face-004";
							break;
						case "face-004":
							modules[i].config.analogFace = "face-005";
							break;
						case "face-005":
							modules[i].config.analogFace = "face-006";
							break;
						case "face-006":
							modules[i].config.analogFace = "face-007";
							break;
						case "face-007":
							modules[i].config.analogFace = "face-008";
							break;
						case "face-008":
							modules[i].config.analogFace = "face-009";
							break;
						case "face-009":
							modules[i].config.analogFace = "face-010";
							break;
						case "face-010":
							modules[i].config.analogFace = "face-011";
							break;
						case "face-011":
							modules[i].config.analogFace = "face-012";
							break;
						case "face-012":
							modules[i].config.analogFace = "face-001";
							break;
					}
				}
			}
		}
		// Specialized notification for showing am/pm in lower or uppercase
		if(notification === 'TOGGLE_CASE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					modules[i].config.showPeriodUpper = !modules[i].config.showPeriodUpper;
				}
			}
		}
		// Specialized notification for showing am/pm in default clock module
		if(notification === 'TOGGLE_AMPM'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					modules[i].config.showPeriod = !modules[i].config.showPeriod;
				}
			}
		}
		// Specialized notification for showing time in 12/24 hrs
		if(notification === 'TOGGLE_MILITARY'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					if(modules[i].config.timeFormat == 12){
						modules[i].config.timeFormat = 24;
					}
					else if(modules[i].config.timeFormat == 24){
						modules[i].config.timeFormat = 12;
					}
				}
			}
		}
		// Specialized notification for showing or hiding the
		// date in the clock module. Necessary because the
		// global toggle would hide the entire time and date
		// rather than just the date (part of the clock module)
		if(notification === 'TOGGLE_DATE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					if(modules[i].config.showDate){
						modules[i].config.showDate = false;
					}
					else{
						modules[i].config.showDate = true;
					}
				}
			}
		}
/* Deprecated in favor of Toggle
		if(notification === 'SHOW_DATE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					modules[i].config.showDate = true;
				}
			}
		}
		if(notification === 'HIDE_DATE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					modules[i].config.showDate = false;
				}
			}
		}
*/
		// Specialized notification for cycling through the different methods
		// of displaying the date. Used in favor of multiple notifications for
		// specific style selection to keep menu clean
		if(notification === 'DATE_CYCLE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					if(modules[i].config.dateFormat == "dddd, MMMM D, YYYY"){
						modules[i].config.dateFormat = "ddd, MMM D";
					}
					else if(modules[i].config.dateFormat == "ddd, MMM D"){
						modules[i].config.dateFormat = "dddd, MMMM D, YYYY";
					}
				}
			}
		}
		// Specialized notification for showing the date in the clock module
		// either above or below the ANALOG clock (does not apply for digital clock)
		if(notification === 'TOGGLE_DATE_POSITION'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'clock'){
					if(modules[i].config.analogShowDate == "top"){
						modules[i].config.analogShowDate = "bottom";
					}
					else if(modules[i].config.analogShowDate == "bottom"){
						modules[i].config.analogShowDate = false;
					}
					else{
						modules[i].config.analogShowDate = "top";
					}
				}
			}
		}
		// Specialized notification for toggling between Fahrenheit or Celsius
		// Will work for specific modules as it does not change the global
		// default unit type. Can be modified to show Kelvin as well
		if(notification === 'TOGGLE_FC'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					console.log(modules[i]);
					if(modules[i].config.units == 'imperial'){
						modules[i].config.units = 'metric';
					}
					else if(modules[i].config.units == 'metric'){
						modules[i].config.units = 'imperial';
					}
					modules[i].updateWeather();
				}
			}
		}
		// Specialized notification for showing or hiding the display of the
		// Fahrenheit or Celsius symbol. Requires the module to specify
		// the symbol display as scale (within its config)
		if(notification === 'TOGGLE_SHOW_HIDE_FC'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					modules[i].config.scale = !modules[i].config.scale;
					modules[i].updateWeather();
				}
			}
		}
		// Specialized notification (mainly for current weather module) that toggles the
		// display of what the weather feels like. Can technically be
		// used for other modules if their config defines an option with
		// the name "showFeelsLike"
		if(notification === 'TOGGLE_FEELSLIKE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					modules[i].config.showFeelsLike = !modules[i].config.showFeelsLike;
					modules[i].updateWeather();
				}
			}
		}
		// Specialized notification for toggling the degrees and
		// unit symbol for the current weather module. Doing so
		// will result in only the temperature number being shown
		if(notification === 'TOGGLE_ICON'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					if(payload == 'currentweather'){
						modules[i].config.onlyTemp = !modules[i].config.onlyTemp;
					}
					else{
						modules[i].config.showIcon = !modules[i].config.showIcon;
					}
					modules[i].updateWeather();
				}
			}
		}
		// Specialized notification for current weather and forecast
		// modules to toggle showing integer temperatures or decimal
		if(notification === 'TOGGLE_ROUNDTEMP'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					modules[i].config.roundTemp = !modules[i].config.roundTemp;
					modules[i].updateWeather();
				}
			}
		}
		// Specialized notification for the weather forecast module that
		// increases the number of days to display in the forecast. Capped
		// at a maximum of 5 days due to free API limitations and space constraints
		if(notification === 'INCREASE_FORECAST'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					if(modules[i].config.maxNumberOfDays < 5){
						modules[i].config.maxNumberOfDays++;
						modules[i].updateWeather();
					}
					else{
						modules[i].config.maxNumberOfDays = 5;
						modules[i].updateWeather();
					}
				}
			}
		}
		// Specialized notification for the weather forecast module that
		// decreases the number of days to display in the forecast. Capped
		// at a minimum of 1 to avoid issues with showing/hiding the module
		// and index accessing errors.
		if(notification === 'DECREASE_FORECAST'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == payload){
					if(modules[i].config.maxNumberOfDays > 1){
						modules[i].config.maxNumberOfDays--;
						modules[i].updateWeather();
					}
					else{
						modules[i].config.maxNumberOfDays = 1;
						modules[i].updateWeather();
					}
				}
			}
		}
		// Specialized notification for the uber module to toggle which
		// type of ride(s) to show. Additional ride types are supported
		// and can be seen from the documentation of MMM-uber, but when
		// we tested it, there seemed to be a limitation on our API that
		// only allowed these 2 types.
		if(notification === 'UBER_TYPE'){
			var modules = MM.getModules();
			for(var i in modules){
				if(modules[i].name == 'MMM-uber'){
					if(payload == 'uberx'){
						modules[i].config.ride_types = ['UberX']
					}
					else if(payload == 'uberxl'){
						modules[i].config.ride_types = ['UberXL']
					}
					else if(payload == 'both'){
						modules[i].config.ride_types = ['UberX', 'UberXL']
					}
					modules[i].sendSocketNotification('DATA', null);
				}
			}
		}
	},
	// Helper function for resetting the modules back to their default configuration
	setDefaults: function() {
		MM.getModules().enumerate(function(module) {
			if (module.data.position) {
				var split_position = module.data.position.split("_");
				var selected_module = document.getElementById(module.identifier);
				var region = document.querySelector('div.region.' + split_position[0] + '.' + split_position[1] + ' div.container');

				// Make sure the region is visible
				if (region.style.display === 'none') {
					region.style.display = 'block';
				}

				// Move module to its original position
				region.appendChild(selected_module);

				// Show module
				module.show(1000, function() {});
			}
		});
	},
});
