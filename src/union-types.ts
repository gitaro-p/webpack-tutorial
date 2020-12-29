let unionCityPopulation: string | number = 9000000;
unionCityPopulation = 'Nine Million';

if (typeof unionCityPopulation === 'string') {
  console.log(unionCityPopulation);
} else if (typeof unionCityPopulation === 'number') {
  unionCityPopulation = unionCityPopulation + 100;
}
