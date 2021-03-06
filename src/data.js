export const sortData = (data, sortBy, sortOrder) => {
  const innerSort = (a,b) => {
    const varA = a[sortBy];
    const varB = b[sortBy];

    let comparison = 0;
    if(varA>varB){
      comparison = 1;
    }else{
      comparison = -1;
    }

    return (sortOrder === "descLetter") ? (comparison * -1) : comparison
  };
  let dataSorted = data.slice();
  return dataSorted.sort(innerSort);
};

export const sortDataArrayLength = (data, sortBy, sortOrder) => {
  const innerSort = (a,b) => {
    const varA = a[sortBy];
    const varB = b[sortBy];

    let comparison = varA.length-varB.length;

    return (sortOrder === "descNumber") ? (comparison * -1) : comparison
  };
  let dataSorted = data.slice();
  return dataSorted.sort(innerSort);
};

export const search = (data, searchBy, searchText) => {
  const searchInData = (item) => {
    return item[searchBy].toUpperCase().includes(searchText.toUpperCase())
  };

  return data.filter(searchInData);
};

export const filter = (data, filterBy, filterName) => {
  const filterData = (item) => {
      return item[filterBy].toUpperCase() === filterName.toUpperCase()
  };

  return data.filter(filterData);
};

export const computeStats = (dataSize, partOfDataSize) => {
  const percentage = (100*partOfDataSize)/dataSize;
  const percentageRound = percentage.toFixed(2);

  return percentageRound;
};