

export  const chainConfig =[
    {
      "name": "Cosmos Hub (cosmoshub-4)",
      "chainId":"cosmoshub-4",
      "rpcUrl":"https://cosmos-rpc.w3coins.io",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
      "fee": {
        amount: [
          {
            denom: "uatom",
            amount: "5000"
          }
        ],
        gas: "250000"
      }
    },
    {
      "name": "Osmosis (osmosis-1)",
      "chainId":"osmosis-1",
      "rpcUrl":"https://rpc-osmosis.ecostake.com",
      "rpcImg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
      "fee": {
        amount: [
          {
            denom: "uosmo",
            amount: "5000"
          }
        ],
        gas: "250000"
      }},
    {
      "name": "Evmos (evmos_9001-2)",
      "chainId":"evmos_9001-2",
      "rpcUrl":"https://evmos-rpc.polkachu.com",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
      "fee": {
        amount: [
          {
            denom: "aevmos",
            amount: "5000"
          }
        ],
        gas: "250000"
      }
    },
    {
      "name": "IRISnet (irishub-1)",
      "chainId":"irishub-1",
      "rpcUrl":"https://irisnet-rpc.w3coins.io",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg",
      "fee": {
        amount: [
          {
            denom: "uiris",
            amount: "5000"
          }
        ],
        gas: "250000"
      }
    },
    {
      "name": "Crescent (crescent-1)",
      "chainId":"crescent-1",
      "rpcUrl":"https://crescent-rpc.w3coins.io",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg",
      "fee": {
        amount: [
          {
            denom: "ucre",
            amount: "5000"
          }
        ],
        gas: "250000"
      }
    },
    {
      "name": "Canto (canto_7700-1)",
      "chainId":"canto_7700-1",
      "rpcUrl":"https://canto.gravitychain.io:26657",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg",
      "fee": {
        amount: [
          {
            denom: "ucanto",
            amount: "5000"
          }
        ],
        gas: "250000"
      }
    },
  ]