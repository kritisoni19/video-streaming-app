import { useEffect, useMemo, useState } from "react";

export const useFilteredList = (categoriesList, range = 2) => {
  const categoriesListLength = categoriesList.length - 1;
  const [categoryListStart, setCategoryListStart] = useState(0);
  const [categoryListEnd, setCategoryListEnd] = useState(
    range > categoriesListLength ? 2 : range
  );

  const shiftLeft = () => {
    setCategoryListStart((start) => {
      if (categoryListEnd < categoriesListLength) {
        return start + 1;
      } else {
        return 0;
      }
    });
    setCategoryListEnd((end) => {
      if (categoryListEnd < categoriesListLength) {
        return end + 1;
      } else {
        return range;
      }
    });
  };

  const shiftRight = () => {
    setCategoryListStart((start) => {
      if (categoryListStart > 0) {
        return start - 1;
      } else {
        return categoriesListLength - range;
      }
    });
    setCategoryListEnd((end) => {
      if (categoryListEnd > range) {
        return end - 1;
      } else {
        return categoriesListLength;
      }
    });
  };

  const filteredCategoriesList = useMemo(() => {
    return categoriesList.filter((category, index) => {
      if (index >= categoryListStart && index <= categoryListEnd) {
        return true;
      }
      return false;
    });
  }, [categoryListStart, categoryListEnd, categoriesList]);

  /* debug logs */
  useEffect(() => {
    console.log("start", categoryListStart);
    console.log("end", categoryListEnd);
    console.log("filtered list", filteredCategoriesList);
  }, [categoryListStart, categoryListEnd, filteredCategoriesList]);

  return { filteredCategoriesList, shiftLeft, shiftRight };
};
