import { useState,useEffect } from "react"

function TablePrice() {
    const [prices, setPrices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3002/api/price');
            if (!response.ok) {
              throw new Error('Request failed');
            }
            const jsonData = await response.json();
            setPrices(jsonData);
            console.log(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div>
        <h1 className="text-3xl text-white mt-5 font-black">PRICE</h1>
        <table className="w-full border border-cyan-500 text-white mt-1 mx-auto">
  <thead>
    <tr className="text-center">
      <th className="border border-cyan-500">Name</th>
      <th className="border border-cyan-500">Liquidity</th>
      <th className="border border-cyan-500">Price</th>
    </tr>
  </thead>
  <tbody>
    {prices.map((price, index) => (
      <tr className="text-center" key={index}>
        <td className="border border-cyan-500">{price.name}</td>
        <td className="border border-cyan-500">{price.liquidity}</td>
        <td className="border border-cyan-500">{price.price}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default TablePrice