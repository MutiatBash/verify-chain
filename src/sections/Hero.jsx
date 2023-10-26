// import React from 'react';
import heroImg from '../assets/images/heroImg.svg';  
import {Button} from '../components/Button'
import {Link} from 'react-router-dom'

const Hero = () => {
    return(
        <div className="flex flex-col mt-10 gap-8 lg:gap-12 justify-between w-full items-center py-4 px-4 md:px-14 lg:py-10">
            <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center text-center">
                <div className="rounded-lg text-[#7f56d9] bg-[#F9F5ff] px-2"><p>Ensuring Trust and Security in the Web3 Universe</p></div>
                <h1 className='text-3xl lg:text-6xl font-bold lg:w-[70%]'>Verify Chain is the new fortified web3 verification hub</h1>
                <p className='lg:w-[60%]'>In the world of web3 and blockchain, trust is everything. Verify chain emerges as the 
                definitive guardian of trust and security in the web3 universe and ensures that contract identities are validated.</p>
                <Link to="/signup"> <Button text={"Connect wallet"} /></Link>
            </div>
            <div className="">
                <img className='' src={heroImg} alt="hero-image" />
            </div>
        </div>
    )
}

export default Hero;