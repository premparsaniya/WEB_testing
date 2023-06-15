import { LOGO } from '../assets'

const Finish = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[35%] h-[100dvh] left-div flex justify-start overflow-hidden' >
                <div className='flex flex-col items-start xl:ml-20 md:ml-5 mt-28'>
                    <span className='text-[#FFF200] xl:text-5xl md:text-3xl font-bold break-words'>Congratulations</span>
                    <span className='text-white font-bold xl:text-4xl md:text-2xl break-words'>You’ve spotted < br />
                        them well!</span>
                </div>
            </div>
            <div className='w-[65%] h-[100dvh] md:bg-[length:400px_400px] xl:bg-[length:700px_700px] xl:bg-center_left md:bg-left right-div flex flex-col justify-start'>
                <div className='w-full h-[166px] border-b border-dashed border-b-primary flex justify-center items-end flex-col'>
                    <div>
                        <img src={LOGO} alt="img" className='xl:mr-20 md:mr-5' />
                    </div>
                </div>
                <div className='h-[60%] mt-10 md:ml-1'>
                    <span className='xl:text-5xl md:text-4xl font-[400] text-primary'>
                        Soon, you’ll be playing a <br />
                        crucial role in advancing<br />
                        the <span className='font-bold'>
                            treatment of<br />
                            rare diseases in india.
                        </span>
                    </span>
                </div>
                <div className='mb-10 mt-5 md:ml-1 flex justify-between items-center'>
                    <div className=''>
                        <span>For  internal use only.</span><br />
                        <span><span className='font-bold'>AsraZeneca Pharma India Limited.</span>
                            Block N1,<br />
                            12th Floor, Manyata Embassy Business Park, Rachenahalli,<br />
                            Outer Ring Road, Bangalore 560045, India.vv</span>
                    </div>
                    <div className='xl:mr-20 md:mr-5'>
                        <a href='/' className={`text-3xl font-bold w-56 flex justify-center items-center h-20 border-4 rounded-lg border-primary text-primary bg-[#ECD8E1]`}>Play Again</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finish