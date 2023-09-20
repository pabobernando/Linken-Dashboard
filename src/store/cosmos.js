import { create } from 'zustand'


export const useDenomCosmos = create((set) => ({
  renameDenom(denom) {
    const names = [
      {
        denom: 'uatom',
        name: 'ATOM',
        logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
        exponent: "6"
      },
      {
        denom: 'ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC',
        name: 'OSMO',
        logo: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
        exponent: "6"
      },
      {
        denom: 'ibc/E55D3D529D45DB5A1955ACE20F6B36BDB8D35BD0BB1FA8FB93AEB8AC17E21561',
        name: 'ATOM / Bostrom',
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