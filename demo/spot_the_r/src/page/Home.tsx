/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import { dataArr } from '../utils'
import { useNavigate } from 'react-router-dom'

const home = () => {

    const navigate = useNavigate();

    const [indexOne, setIndexOne] = useState<number>()
    const [indexTwo, setIndexTwo] = useState<number>()
    const [indexThree, setIndexThree] = useState<number>()

    const [timeOut, setTimeOut] = useState<boolean>(false);

    const [updateDataArr, setUpdateDataArr] = useState<any[]>([])
    const [time, setTime] = useState<number>(0);
    const [tryAgain, setTryAgain] = useState(false)

    useEffect(() => {
        let i = 0;
        // This block will be executed 100 times.
        setInterval(function () {
            if (i == 11) clearInterval(11);
            else {
                // console.log('Currently at ' + (i++));
                setTime(i++)
                if (i === 11) {
                    setTimeOut(true);
                }
            }
        }, 1000);
    }, [tryAgain])

    useEffect(() => {
        if (indexOne !== undefined && indexTwo !== undefined && indexThree !== undefined) {
            navigate('/demo/spot_the_r/finish');
            setUpdateDataArr([]);
        }
    }, [indexOne, indexTwo, indexThree])

    useEffect(() => {
        function randomlySetNames(dataArr: any, nameToSet: string, times: number) {
            // Create an array of indices to randomly select
            const indices = Array.from({ length: dataArr.length }, (_, i) => i);

            // Shuffle the indices array
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }

            // Set the specified name randomly in the selected indices
            for (let i = 0; i < times; i++) {
                const index = indices[i];
                dataArr[index] = { name: nameToSet };
            }

            return dataArr;
        }
        setUpdateDataArr(randomlySetNames(dataArr, 'R', 3))
    }, [])

    // ------------------------------- handle R click -----------------------------

    const handleRClick = (name: string, index: number) => {
        if ((name === 'R') && ((indexOne !== index) && (indexTwo !== index) && (indexThree !== index))) {
            if (indexOne === undefined) {
                setIndexOne(index);
            }
            else if (indexTwo === undefined) {
                setIndexTwo(index)
            }
            else if (indexThree === undefined) {
                setIndexThree(index)
            }
        }
    }

    // ------------------------------- handle Try again ---------------------------

    const handleTryAgain = () => {
        setTryAgain(!tryAgain);
        setTimeOut(!timeOut);
        setTime(0);
        setIndexOne(undefined);
        setIndexTwo(undefined);
        setIndexThree(undefined);
    }

    return (
        <div className='w-full h-[100dvh] flex flex-col items-center'>
            {
                !timeOut ? (
                    <>
                        <div className='w-full h-60 home-header flex justify-center items-center mb-4'>
                            <span className='xl:text-5xl md:text-2xl font-bold flex items-center flex-col text-primary'>
                                <span> Rare diseases are difficult to spot.</span>
                                <span> We at AZ are taking them on boldly.</span>
                                <span className='xl:text-2xl md:text-lg md:w-[80%] xl:w-full text-center'>Spot the rare (R) alphabets among the plethora of plain (P)s, in 10 seconds!</span>
                            </span>
                        </div>
                        {/* flex flex-wrap justify-start items-center overflow-hidden */}
                        {/* grid grid-cols-12 grid-rows-6 gap-0 */}
                        <div className='xl:w-[55%] md:w-[100%] px-10 h-[577px] mb-5 home-grid'>
                            {
                                updateDataArr?.map((item: any, index: number) => {
                                    return (
                                        <div onClick={() => handleRClick(item?.name, index)} key={index} className={` ${(indexOne === index) ? 'bg-primary text-white' : indexTwo === index ? 'bg-primary text-white' : indexThree === index ? 'bg-primary text-white' : 'p-div text-primary'}  flex justify-center items-center xl:w-10 xl:h-10 md:w-8 md:h-8 rounded-full cursor-pointer `} > <span className='font-bold md:text-xl xl:text-2xl' >{item?.name}</span> </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full mt-5 flex justify-evenly items-center'>
                            <div className='font-[Orbitron] text-3xl w-56 flex justify-center items-center h-20 border-4 border-primary rounded-lg bg-[#ECD8E1]'>
                                <span className='text-primary font-bold'>{time !== 10 && '00 : '} {time !== 10 && '0' + time} </span>
                            </div>
                            <div className=''>
                                <button disabled={!timeOut} className={`text-3xl font-bold w-56 flex justify-center items-center h-20 border-4 rounded-lg  bg-[#F5F5F5] text-[#B6B6B6] border-[#B6B6B6]`}>Try Again</button>
                            </div>
                        </div>
                    </>
                )
                    :
                    (
                        <>
                            <div className='w-full h-60 home-header flex justify-center items-center mb-4'>
                                <span className='xl:text-5xl md:text-2xl font-bold flex items-center flex-col text-primary'>
                                    <span> Rare diseases are difficult to spot.</span>
                                    <span> We at AZ are taking them on boldly.</span>
                                    <span className='xl:text-2xl md:text-lg md:w-[80%] xl:w-full text-center'>Spot the rare (R) alphabets among the plethora of plain (P)s, in 10 seconds!</span>
                                </span>
                            </div>
                            <div className='w-[50%] h-[577px] mb-5 flex flex-wrap justify-center items-center overflow-hidden'>
                                <span className='text-primary font-bold text-5xl'>opps! time out.</span>
                            </div>
                            <div className='w-full mt-5 flex justify-evenly items-center'>
                                <div className='font-[Orbitron] text-3xl w-56 flex justify-center items-center h-20 border-4 border-primary rounded-lg bg-[#ECD8E1]'>
                                    <span className='text-primary font-bold'>{'00 : 00'} </span>
                                </div>
                                <div className=''>
                                    <button onClick={() => handleTryAgain()} className={`text-3xl font-bold w-56 flex justify-center items-center h-20 border-4 rounded-lg border-primary text-primary bg-[#ECD8E1]`}>Try Again</button>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default home