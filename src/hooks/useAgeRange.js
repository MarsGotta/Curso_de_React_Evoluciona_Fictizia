import React, { useState, useEffect } from "react";

function useAgeRange(age) {
  const [range, setRange] = useState(null);
  useEffect(() => {
    switch(true){
      case (age > 0 && age <= 25):
        setRange('Joven'); 
        break;
      case (age > 25 && age <= 40):
        setRange('Adulto');
        break;
      case age > 40:
        setRange('Mayor de edad');
        break;
    }
  },[]);

  return range
}

export default useAgeRange;