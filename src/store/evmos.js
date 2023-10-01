import { create } from 'zustand'


export const useDenomEvmos = create((set) => ({
  renameDenom(denom) {
    const names = [
      {
        denom: 'aevmos',
        name: 'EVMOS',
        logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
        exponent: "18"
      },
      {
        denom: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
        name: 'USDCgrv',
        logo: "https://static-resources.crescent.network/USDC.png",
        exponent: "6"
      },
      {
        denom: 'ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E',
        name: 'AXELAR',
        logo: "https://static-resources.crescent.network/AXL.png",
        exponent: "6"
      },
      {
        denom: 'ibc/10A0DD366A472B098DFD93FBAE62E65DA387F314872C4AD3AE43185154738D8D',
        name: 'MARS',
        logo: "https://cre-static-assets.s3.amazonaws.com/MARS.png",
        exponent: "0"
      },
      {
        denom: 'ibc/C8597ECBB1156C89A9CCEA8B3704F9E196926030371BE919BB9167FE3E6BAE29',
        name: 'FRNS',
        logo: "https://cre-static-assets.s3.amazonaws.com/FRNZ.svg",
        exponent: "6"
      },
      {
        denom: 'ibc/CD01034D6749F20AAC5330EF4FD8B8CA7C40F7527AB8C4A302FBD2A070852EE1',
        name: 'grvUSDC',
        logo: "https://static-resources.crescent.network/USDC.png",
        exponent: "6"
      }
    ];
  
    const match = names.find((n) => n.denom === denom);
    
    if (match) {
      return match;
    } else {
      
      return {
        denom: denom,
        name: denom, 
        logo: ""
      };
    }
  }


}))