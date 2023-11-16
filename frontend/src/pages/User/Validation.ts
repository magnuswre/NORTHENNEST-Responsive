export const checkIfEmpty = (value: string | undefined) => {
    // Check if value is undefined or null before using trim
    if (value === undefined || value === null || value.trim() === '') {
      return true;
    } else {
      return false;
    }
  };
