import React from 'react'

const Cover = ({img,title,height,detail}) => {
    return (
        <div
            className={`hero h-[${height}]`}
            style={{
                backgroundImage: `url('${img}')`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-4xl bg-black/40 py-14 px-48">
                    <h1 className="mb-5 text-4xl font-semibold uppercase">{title}</h1>
                    <p className="mb-5">{detail}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Cover