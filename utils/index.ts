export const transormPhone = (phone: string): string => {
  let nmbr = phone;

  if (typeof nmbr !== 'string') {
    nmbr = `${nmbr}`;
  }

  if (nmbr.length === 11) {
    nmbr = nmbr.slice(1);
  }

  return nmbr.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4');
};
