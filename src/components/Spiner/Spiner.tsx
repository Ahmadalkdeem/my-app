import React from 'react'
import { Dna } from 'react-loader-spinner'

const Spiner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center p-5 mt-5'>

            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default Spiner