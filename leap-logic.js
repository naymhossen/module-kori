function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true; 
        } else {
          return false; 
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  
    console.log(isLeapYear(2020));
    console.log(isLeapYear(2021)); 
    console.log(isLeapYear(2000)); 
    console.log(isLeapYear(1900));
