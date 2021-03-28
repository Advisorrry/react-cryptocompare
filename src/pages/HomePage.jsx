import React from 'react'
import { CoinCard } from '../components/CoinCard'
import { CoinSearch } from '../components/CoinSearch'
import { CoinStats } from '../components/CoinStats'
import { useFetchingData } from '../hooks/useFetchingData'

const coinData = [
    { id: 1, coin: 'BTC-RUB', cost: '35,000' },
    { id: 2, coin: 'BTC-EUR', cost: '35,000' },
    { id: 3, coin: 'BTC-USR', cost: '33,000' },
    { id: 4, coin: 'BTC-VUE', cost: '22,000' },
]

export const HomePage = () => {
    
    
    return (
        //<div className="py-4 px-4 container md  mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"></div>
        <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
            <div className="container">
                <CoinSearch />

                <hr className="w-full border-t border-gray-600 my-4" />
                <dl className="mt-5 grid grid-cols-3 gap-5 xs:grid-cols-1">
                    {coinData.map((item, idx) => {
                        return <CoinCard key={idx} coin={item.coin} cost={item.cost} />
                    })}
                </dl>
                <hr className="w-full border-t border-gray-600 my-4" />
                <CoinStats />
            </div>
        </div>
    )
}
