import { useState, useEffect } from "react";

function TablePrice() {
  const [prices, setPrices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

  // Hitung indeks item yang akan ditampilkan di halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = prices.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-3xl text-white mt-5 font-black">PRICE</h1>
      <div className="flex-grow overflow-y-auto">
        <table className="w-full border border-cyan-500 text-white mt-1 mx-auto">
          <thead>
            <tr className="text-center">
              <th className="border border-cyan-500">Name</th>
              <th className="border border-cyan-500">Liquidity</th>
              <th className="border border-cyan-500">Price</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((price, index) => (
              <tr className="text-center" key={index}>
                <td className="border border-cyan-500">{price.name}</td>
                <td className="border border-cyan-500">{price.liquidity}</td>
                <td className="border border-cyan-500">{price.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-3">
        {Array.from({ length: Math.ceil(prices.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-2 py-1 rounded-lg ${
              currentPage === i + 1 ? 'bg-cyan-500 text-white' : 'bg-gray-400 text-black'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      </div>

      {/* Tombol navigasi halaman */}
      
    </div>
  );
}

export default TablePrice;
