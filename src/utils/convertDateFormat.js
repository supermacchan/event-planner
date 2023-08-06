export const convertDateFormat = (inputDate) => {  
  // Parse the input date string
  const parsedDate = new Date(inputDate);
  
  // Get the day, month, and year from the parsed date
  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
  const year = parsedDate.getFullYear();

  // Format the date as dd.mm.yyyy
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