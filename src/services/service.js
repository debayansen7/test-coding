import axios from "axios";

/**
 * Function to fetch Data from API
 * @returns festival data array of object
 */
export const fetchData = async () => {
  return await axios("http://localhost:3500/festivals");


  // const apiUrl = "localhost:3500/festivals";
  // "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";

  // const headers = {
  //   Accept: "*",
  //   'Content-Type': 'text/plain',
  //   "Access-Control-Allow-Origin": "*",
  //   // "Access-Control-Allow-Origin": "https://eacp.energyaustralia.com.au",
  // };
  // let returnData = {
  //   status: '',
  //   data: '',
  // };

  // await axios('http://localhost:3500/festivals')
  //   // .then(res => res.json())
  //   .then(res => ({ status: res.code, newdata: res.message }))
  //   .catch(err => {
  //     console.log('error: ', err);
  //     return { status: err.code, data: err.message };
  //   });

  // const response1 = await fetch(apiUrl, { mode: 'cors', headers })
  //   .then(res => res.text())
  //   .then(data => console.log(data));


  // const response2 = await fetch(apiUrl)
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  // console.log(response2);
  // return data;
  // .then(res => res.text())
  // .then(data => console.log(data));
};

/**
 * Function to generate new data object
 */
export const generateObject = (band, festival) => ({
  recordLabel: band.recordLabel,
  bands: [{ 'name': band.name, 'festival': festival.name }],
})

export const updateNewList = (currentList, band, festival) => {
  const newList = [];
  if (currentList.length > 0) {
    const matchingRecordLabel = currentList.filter(i => i.recordLabel === band.recordLabel);
    if (matchingRecordLabel.length > 0) {
      currentList.forEach(i => {
        if (i.recordLabel === band.recordLabel) {
          i?.bands.push({ 'name': band.name, 'festival': festival.name })
        }
      });
    } else {
      currentList.push(generateObject(band, festival))
    }
    return currentList;
  } else {
    newList.push(generateObject(band, festival))
    return newList;
  }
};

/**
 * Function to transform Data
 * @returns
 */
export const transformData = oldData => {
  let intialDataList = [];
  console.log(oldData);
  oldData.forEach(fes => {
    fes.bands.forEach(band => {
      intialDataList = updateNewList(intialDataList, band, fes);
    })
  });
  console.log(intialDataList);
  return intialDataList.length > 0 ? intialDataList : oldData;
};
