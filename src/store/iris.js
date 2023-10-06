import { create } from 'zustand'


export const useDenomIris = create((set) => ({
  renameDenom(denom) {
    const names = [
      {
        denom: 'uiris',
        name: 'IRIS',
        logo: "https://www.irisnet.org/resources/COINSWAP/coins/iris.png",
        exponent: "6"
      },
      {
        denom: 'ibc/6DF82C1C886C15A5D1F514D30318C7C1431B08EABE7658E6A582CCFC52D8E0AB',
        name: 'IOV',
        logo: "https://www.irisnet.org/resources/COINSWAP/coins/iov.png",
        exponent: "6"
      },
      {
        denom: 'ibc/DDC0CE4852A53B1D3A6BF056CBB59701AC8E91798028CD7C2A7F490A753F8A88',
        name: 'GRAVITY',
        logo: "https://www.irisnet.org/resources/COINSWAP/coins/grav.png",
        exponent: "6"
      },
      {
        denom: 'htltbcbnb',
        name: 'htltbcBNB',
        logo: "https://www.irisnet.org/resources/COINSWAP/coins/bnb.png",
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
      },
      {
        denom: 'ibc/E244B968EE0D1EC047E7516F6ABECE7B68E9FD93B4BD8D08D13642247416BB17',
        name: 'WETHGrav',
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