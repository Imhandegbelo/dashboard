import React from 'react'

export default function Progress({value, color}) {
    const width = `w-[${value}%]`
    return (
        <div className="w-full">
            <div className="bg-[#F2F2F2] w-full h-3 rounded-full">
                <div style={{width: `${value}%`}} className={`${color} h-full rounded-full`}></div>
            </div>
        </div>
    )
}
