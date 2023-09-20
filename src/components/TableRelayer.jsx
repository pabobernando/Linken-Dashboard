import React from 'react'
import Desolator from '../assets/desolator.png'
import Atom from '../assets/atom.png'
import Kewr from '../assets/kewrfoundationWeb.png'
import Select from 'react-select'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    display: 'flex', // Mengatur display menjadi flex
    alignItems: 'center', // Mengatur teks ke tengah secara vertikal
  }),
  singleValue: (provided, state) => ({
    ...provided,
    display: 'flex', // Mengatur display menjadi flex
    alignItems: 'center', // Mengatur teks ke tengah secara vertikal
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0', // Menghilangkan padding di dalam value container
  }),
};

const options = [
  { value: 'evmos', label: <><img src={Atom} alt="Atom" width="30" height="30" /> <h1 className='text-center'>ATOM</h1></> },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

function TableRelayer() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="mx-auto bg-gray-900 shadow-lg shadow-blue-500/50 w-30 xl:w-1/3 border border-cyan-500">
        <div className="h-64 p-3 overflow-hidden bg-gray-900 border border-cyan-500 flex flex-col items-center justify-center shadow-lg shadow-blue-500/50">
          <img src={Desolator} alt="Linken Image" className="mx-auto " />
          <h1 className='font-bold text-white text-3xl'>Relayer</h1>
          <h1 className='text-white text-xl font-medium text-center'>We can clear some packets for you</h1>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-1 mt-2">
            <div className='h-11 bg-gray-200 rounded relative'>
            <Select
        options={options}
        styles={customStyles}
        className="w-full"
      />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.293 10.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
            <div className='h-11  rounded mt-5'>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded w-full">CLEAR CHANNEL</button>
            </div>
          </div>
          <div className="col-span-1 mt-11 flex flex-col items-center">
            <h1 className='text-cyan-500 font-bold text-center'>Powered By</h1>
            <h1 className='text-white text-xl font-bold'>KEWR FOUNDATION</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableRelayer
