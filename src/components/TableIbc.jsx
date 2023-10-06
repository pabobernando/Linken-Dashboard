import { useState, useEffect } from "react";
import { assertIsDeliverTxSuccess, coin, SigningStargateClient } from "@cosmjs/stargate";
import { BuildingOffice2Icon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline'

function TableIbc() {

  const chainConfig =[
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

  const [address, setAddress] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [feeAmount, setFeeAmount] = useState(chainConfig[0].fee.amount[0].amount);
  const [feeDenom, setFeeDenom] = useState(chainConfig[0].fee.amount[0].denom);
  const [transferAmount, setTransferAmount] = useState();
  const configAddr = chainConfig[0];
  const chainId = configAddr.chainId;


  const sendIbcTokens = async () => {
    try {
      if (!window.getOfflineSigner || !window.keplr) {
        alert("Please Install Keplr");
        return;
      }

      const offlineSigner = window.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const senderAddress = accounts[0].address;

      const rpcUrl = configAddr.rpcUrl;
      const fee = configAddr.fee;
      const recipientAddress2 = recipientAddress;

      await window.keplr.enable(chainId);

      const client = await SigningStargateClient.connectWithSigner(
        rpcUrl,
        offlineSigner
      );

      const balances = await client.getAllBalances(senderAddress);
      console.log("iki balance e", balances);

      const transferAmountObj = {
        denom: feeDenom, // Menggunakan denom dari feeDenom
        amount: transferAmount, // Menggunakan nilai dari transferAmount
      };
      const sourcePort = "transfer";
      const sourceChannel = "channel-141";
      const timeoutHeight = 17100000;
      const timeoutTimestamp = 1726927555000;
      const memo = "Desolator | Linken";

      const response = await client.sendIbcTokens(
        senderAddress,
        recipientAddress2,
        transferAmountObj,
        sourcePort,
        sourceChannel,
        timeoutHeight,
        timeoutTimestamp,
        fee,
        memo
      );

      console.log(response);
      assertIsDeliverTxSuccess(response);
    } catch (error) {
      console.error("Error sending IBC tokens:", error);
    }
  };
  

  useEffect(() => {
    setFeeAmount(configAddr.fee.amount[0].amount);
    setFeeDenom(configAddr.fee.amount[0].denom);
  }, [configAddr]);
  
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-3xl text-white mt-5 font-black"></h1>
      <div className="grid grid-cols-6">
      {chainConfig.map((chain) => (
        <div className="flex justify-center">
        <button
          className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-900 border border-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          key={chain.name}
          onClick={() => {
            setConfigAddr(chain)
            setAddress("Connect")
          }}
        >
          <img src={chain.rpcImg} width="50" height="50" />
            {chain.name}
          </button>
        </div>   
      ))}
    </div>

      {/* iki */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Linken Bridge</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We recommend you try to send a small amount first before trying to send large amounts. This way you can make sure everything works as expected.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <p>Powered by :</p>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <UserIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  Desolator
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    Kewr Foundation
                  </a>
                </dd>
              </div>
            </dl>
          </div>

        </div>
        <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" onSubmit={(e) => {
    e.preventDefault();
    console.log("tes123");
    sendIbcTokens() 
  }}>
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-white">
                  From
                </label>
                <div className="mt-2.5">
                <input
  type="text"
  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
  value={configAddr.name}
/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-white">
                  Destination Address
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-white">
                  Amount
                </label>
                <div className="mt-2.5">
                  <input
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-white">
                  Fee
                </label>
                <div className="mt-2.5">
                <input
                  type="tel"
                  value={feeAmount}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  onChange={(e) => setFeeAmount(e.target.value)}
                />
                <span className="text-white">{feeDenom}</span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-white">
                  Memo
                </label>
                <div className="mt-2.5">
                  <textarea
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Send Coin
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TableIbc;
