
import stepImg from '../assets/images/stepImg.svg';  

const Steps = () => {
    return(
        <div className="flex flex-col mt-10 gap-8 lg:gap-12 justify-between w-full items-center py-4 px-4 md:px-14 lg:py-10">
            <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center text-center">
                <h3 className='text-4xl font-bold'>A friendly outlined step for our users</h3>
                <p className='lg:w-[80%]'>Interface that simplifies the contract identity validation process, making it accessible to all users.</p>
            </div>
            <div className="">
                <img className='' src={stepImg} alt="step-image" />
            </div>
        </div>
    )
}

export default Steps;