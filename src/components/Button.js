import React from 'react'

export const Button = ({text}) => {
    return (
        <button class="py-2 px-4 font-semibold rounded-md shadow-md text-white bg-green-500 hover:bg-green-700">
            {text}
        </button>
    )
}
