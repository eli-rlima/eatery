export const formatPhone = (phoneNumber: string) => {
  if (phoneNumber.length === 12) {
    return `(${phoneNumber.substring(2, 4)}) ${phoneNumber.substring(4, 8)}-${phoneNumber.substring(8, 12)}`;
  }

  return phoneNumber;
};
