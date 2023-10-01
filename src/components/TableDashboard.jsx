import { useState,useEffect } from "react";
import { SigningStargateClient } from "@cosmjs/stargate";
import Keplr from '../assets/Keplr.png'
import ChartOsmo from "./Chart";
import { useChartBalance } from '../store/chart-balance'
import { useDenomOsmo } from "../store/osmosis";
import { useDenomCosmos } from "../store/cosmos";
import { useDenomCrescent } from "../store/crescent";
import { useDenomIris } from "../store/iris";
import { useDenomEvmos } from "../store/evmos";

const statuses = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TableDashboard() {

  const [address, setAddress] = useState()
  const [denom, setDenom] = useState()
  const [allBalances, setAllBalances] = useState([])
  const [chainId, setChainId] = useState("cosmoshub-4")
  const [rpcUrl, setRpcUrl] = useState("https://rpc-cosmoshub-ia.cosmosia.notional.ventures/")
  const [stakes, setStakes] = useState()
  const { setDataChart } = useChartBalance()
  const { renameDenom: renameDenomOsmo } = useDenomOsmo();
  const { renameDenom: renameDenomCosmos } = useDenomCosmos();
  const { renameDenom: renameDenomCrescent } = useDenomCrescent();
  const { renameDenom: renameDenomIris } = useDenomIris();
  const { renameDenom: renameDenomEvmos } = useDenomEvmos();
  

  const chainConfig =[
    {
      "name": "Cosmos Hub (cosmoshub-4)",
      "chainId":"cosmoshub-4",
      "rpcUrl":"https://cosmos-rpc.w3coins.io",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
    },
    {
      "name": "osmosis (osmosis-1)",
      "chainId":"osmosis-1",
      "rpcUrl":"https://rpc-osmosis.ecostake.com",
      "rpcImg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
    },
    {
      "name": "Evmos (evmos_9001-2)",
      "chainId":"evmos_9001-2",
      "rpcUrl":"https://evmos-rpc.polkachu.com",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
    },
    {
      "name": "IRISnet (irishub-1)",
      "chainId":"irishub-1",
      "rpcUrl":"https://irisnet-rpc.w3coins.io",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
    },
    {
      "name": "Crescent (crescent-1)",
      "chainId":"crescent-1",
      "rpcUrl":"https://crescent-rpc.w3coins.io",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
    },
    {
      "name": "Canto (canto_7700-1)",
      "chainId":"canto_7700-1",
      "rpcUrl":"https://canto.gravitychain.io:26657",
      "rpcImg":"https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg"
    },
  ]

  

  function mapDenomToName(balances) {
    return balances.map((bal) => {
      let renamedDenom;
      if (chainId === "osmosis-1") {
        renamedDenom = renameDenomOsmo(bal.denom);
      } else if (chainId === "cosmoshub-4") {
        renamedDenom = renameDenomCosmos(bal.denom);
      } else if (chainId === "crescent-1") {
        renamedDenom = renameDenomCrescent(bal.denom);
      }  else if (chainId === "irishub-1") {
        renamedDenom = renameDenomIris(bal.denom);
      } else if (chainId === "evmos_9001-2") {
        renamedDenom = renameDenomEvmos(bal.denom);
      }
      
      let adjustedAmount = bal.amount;
  
      if (renamedDenom.exponent === "6") {
        const amountNumber = parseFloat(bal.amount);
        adjustedAmount = (amountNumber / 1000000).toFixed(6);
      } else if (renamedDenom.exponent === "18") {
        const amountNumber = parseFloat(bal.amount);
        adjustedAmount = (amountNumber / Math.pow(10, 18)).toFixed(18);
      }
  
      return {
        denom: bal.denom,
        amount: adjustedAmount,
        denom_name: renamedDenom.name,
        logo: renamedDenom.logo,
      };
    });
  }
  
  
  
  const keplrWallet = async () => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      await window.keplr.enable(chainId);
      const offlineSigner = window.keplr.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const Address = accounts[0].address;
      setAddress(Address)
      const client = await SigningStargateClient.connectWithSigner(
        rpcUrl,
        offlineSigner
      );
      try {
        const balances = await client.getAllBalances(Address);
        const balancesStaked = await client.getBalanceStaked(Address)
        console.log(balancesStaked)
        setStakes(balancesStaked)
        console.log(balances,"this balance")
        setAllBalances(mapDenomToName(balances));
        setDataChart(balances)
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    keplrWallet();
  }, []);

    
  return (  
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="grid grid-cols-6">
      {chainConfig.map((chain) => (
        <div className="flex justify-center">
        <button
          className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-900 border border-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          key={chain.name}
          onClick={() => {
            setChainId(chain.chainId);
            setRpcUrl(chain.rpcUrl);
            setAddress("Connect")
          }}
        >
          <img src={chain.rpcImg} width="50" height="50" />
            {chain.name}
          </button>
        </div>   
      ))}
    </div>
    <div className="grid grid-cols-2 mt-11">
      <div>
        <h1 className="text-3xl text-white mt-5 font-black">PORTFOLIO</h1>
      </div>
      <div className="grid justify-items-end">
      <button
        onClick={keplrWallet}
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-900 border border-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <img src={Keplr} className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        {address ? address : 'Connect'}
      </button>
      </div>
    </div>
      <div className="grid grid-cols-2 border border-cyan-500 mt-1 shadow-lg shadow-blue-500/50 rounded-lg">
        <div className="py-5 mx-auto content-center">
          <h1 className="text-7xl text-white py-8">Total Assets</h1>
          <h1 className="text-7xl text-gray-300 py-8 ">$ 32003</h1>
        </div>
        <div className="py-5 mx-auto">
          <ChartOsmo />
        </div>
      </div>
      <h1 className="text-3xl text-white mt-5 font-black">MY ASSETS</h1>
      <div className="w-full">
      <table className="w-full border border-cyan-500 text-white mt-1 mx-auto">
  <thead>
    <tr className="grid grid-cols-2 text-center rounded-lg">
      <th className="text-2xl">Name</th>
      <th className="text-2xl">Balance</th>
    </tr>
  </thead>
  <tbody>
    {allBalances.map((allBalance, index) => (
      <tr className="grid grid-cols-2 text-center" key={index}>
        <td className="text-1xl flex items-center justify-center border border-cyan-500"> 
          <img src={allBalance.logo} width="30" height="30" alt={allBalance.denom_name} />
          <span className="ml-2">{allBalance.denom_name}</span>
        </td>
        <td className="text-2xl flex items-center justify-center border border-cyan-500">
          {allBalance.amount}
        </td>
      </tr>
    ))}
  </tbody>
</table>

</div>

      <h1 className="text-3xl text-white mt-5 font-black">MY STAKE</h1>
        <div className="grid grid-cols-2">
          <div>
          <h1 className="text-3xl text-white text-center mt-2 border border-cyan-500">
      {stakes ? (
        `${stakes.denom}`
      ) : (
        'Loading...'
      )}
    </h1>
          </div>
          <div>
          <h1 className="text-3xl text-white text-center mt-2 border border-cyan-500 ">
      {stakes ? (
        `${stakes.amount}`
      ) : (
        'Loading...'
      )}
    </h1>
          </div>
        </div>
    </div>
  )
}
