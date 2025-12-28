  import { getAccountInterface } from "../types/account.type";
  import { getBoatInterface } from "../types/boat.type";
  import { getGearInterface } from "../types/gear.type";
  import { getFisherfolkInterface } from "../types/fisherFolk.type";
  
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
  


  export const getBoatChart = (boats : getBoatInterface[]) => {
    const data = {
      motorize : 0,
      nonMotorize : 0
    }
    boats.forEach((boat) => {
      if(boat.type == "motorized"){
        data.motorize += 1
      } else {
        data.nonMotorize += 1
      }
    })
    return data
  }


  export const getGearChart = (gears : getGearInterface[]) => {
    const data = {
      net : 0,
      hook : 0,
      trap : 0,
      bait : 0,
      fishingrod : 0,
      fishfinder : 0,
      others : 0,
    }

    gears.forEach((gear) => {
      switch(gear.type){
        case "net": data.net += 1; break;
        case "hook": data.hook += 1; break;
        case "trap": data.trap += 1; break;
        case "bait/lures": data.bait += 1; break;
        case "fishing rod": data.fishingrod += 1; break;
        case "fish finder": data.fishfinder += 1; break;
        case "others": data.net += 1; break;
      }
    })

    return data
  }


export const getBarangayChart = (fisherfolks: getFisherfolkInterface[]) => {
  const getBarangayAll = fisherfolks.map(f => f.barangay)
  const getBarangay = [...new Set(getBarangayAll)]

  const data = getBarangay
    .map(barangay => ({
      barangay,
      count: getBarangayAll.filter(e => e === barangay).length
    }))
    .sort((a, b) => a.count - b.count).slice(0, 5)
    data.reverse()
  return data
}
