

findHottestDay(days)
console.log(sortedTemp)


function generateWeatherReport(days) {
    // Find the hottest day
    let hottestDay = findHottestDay(days);
  
    // Create a weather summary
    let weatherSummary = "";
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      switch (day.description) {
        case "Sunny":
          weatherSummary += "Sunny, ";
          break;
        case "Cloudy":
          weatherSummary += "Cloudy, ";
          break;
        case "Rainy":
          weatherSummary += "Rainy, ";
          break;
      }
    }
  
    // Remove the trailing comma and space from weatherSummary
    weatherSummary = weatherSummary.slice(0, -2);
  
    // Generate the weather report
    const report = `The hottest day will be on ${hottestDay.date} with a high of ${hottestDay.temperature}°C. The week's weather summary: ${weatherSummary}.`;
  
    return report;
  }
  
  const weatherReport = generateWeatherReport(days);
  console.log(weatherReport);
  