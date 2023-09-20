import { create } from 'zustand'


export const useDenomOsmo = create((set) => ({
  renameDenom(denom) {
    const names = [
      {
        denom: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
        name: 'stSOMM',
        logo: "https://app.osmosis.zone/tokens/stsomm.svg",
        exponent: "6"
      },
      {
        denom: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
        name: 'arUSD',
        logo: "https://app.osmosis.zone/tokens/arusd.svg",
        exponent: "18"
      },
      {
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        name: 'ATOM',
        logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
        exponent: "6"
      },
      {
        denom: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
        name: 'BOOT',
        logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg",
        exponent: "0"
      },
      {
        denom: 'uosmo',
        name: 'OSMO',
        logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
        exponent: "6"
      },
      {
        denom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
        name: 'axlETH',
        logo: "https://app.osmosis.zone/tokens/eth-white.svg",
        exponent: "18"
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