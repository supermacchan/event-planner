export const convertDateFormat = (inputDate) => {  
  const parsedDate = new Date(inputDate);
  
  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
  const year = parsedDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export const adjustDate = (date) => {
  const dateParts = date.split('/');
  
  const day = dateParts[0];
  const month = dateParts[1];
    
  const reformattedDate = `${day}.${month}`;
  
  return reformattedDate;
}