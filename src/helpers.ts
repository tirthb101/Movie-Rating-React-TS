// Convert time to hours and minutes
export const calcTime = (time: number) : string => {
  const hours : number = Math.floor(time / 60);
  const mins : number = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money : number ) : string => {
  const formatter : Intl.NumberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = (statename : string) : any => {
  const sessionState = sessionStorage.getItem(statename);
  return sessionState && JSON.parse(sessionState);
};

export const persistedState = (statename : string, data : object) : any => {
  sessionStorage.setItem(statename, JSON.stringify(data));
  return;
};