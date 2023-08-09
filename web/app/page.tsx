/*
  1. We should have a main content with a search bar and a list of items
  2. On the bottom we should have a footer
  3. Selected item should be open in a modal
  4. In modal window we should have a button to close it and 5 predefined buttons on right side
*/

'use client'

// import Image from 'next/image'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold">Welcome to the test task</h1>
          <p className="text-xl mt-4">Please, use the search bar to find the item you need</p>
          <div className="relative w-full">
            <input className="border border-gray-400 rounded-md px-4 py-2 mt-4 w-full pr-10" type="text" placeholder="Search" />
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-xl">Here should be a list of items</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)}>Open Modal</button>
          </div>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
        <div className="modal-content">
          <div className="modal-main">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">Modal Content</p>
          </div>
          <div className="modal-sidebar">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(false)}>Close Modal</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">Button 1</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">Button 2</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">Button 3</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">Button 4</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4">Button 5</button>
          </div>
        </div>
      </Modal>
    </>
  )
}