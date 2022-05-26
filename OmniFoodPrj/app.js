const result = [];
arr.forEach(({ timeSeries }) => {
    if (Array.isArray(timeSeries)) {
        timeSeries.forEach(({ timeDefines, areas }) => {
            // console.log({timeDefines})
            if (Array.isArray(timeDefines) && Array.isArray(areas)) {
                const climateInfo = {
                    areaName: areas[0]?.area?.name ?? '',
                    weather: []
                };
                for (let i = 0; i < timeDefines.length; i++) {
                    climateInfo.weather.push({
                        date: timeDefines,
                        tempMin: Array.isArray(areas[0]?.tempsMin)
                            ? areas[0]?.tempsMin
                            : '',
                        tempMax: Array.isArray(areas[0]?.tempsMax)
                            ? areas[0]?.tempsMax
                            : ''
                    });
                }
                result.push(climateInfo);
            }
        });
    }
});
console.log(JSON.stringify(result));
