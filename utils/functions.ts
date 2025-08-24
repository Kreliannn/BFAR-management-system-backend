  export const getRemainingDays = (expirationDate: string) => {
    const now = new Date();
    let today = new Date(now.toISOString().split("T")[0]); 
    const exp = new Date(expirationDate);
    const diff = exp.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24)); 
  };

  export function checkIfExpired(expirationDate : string) {
    const today = new Date().toISOString().split("T")[0]; 
    return today >= expirationDate;
  }
  