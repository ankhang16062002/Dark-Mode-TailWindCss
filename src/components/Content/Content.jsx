import {FaUser} from 'react-icons/fa'
import {BsFillCreditCardFill} from 'react-icons/bs'
import checkIconMobile from '../../assets/mobile/checkpoint.svg'
import {useSpring, animated} from 'react-spring'

const Content = () => {
    const customer = useSpring({customers: 10245, from: {customers: 0}})
    const card = useSpring({cards: 12045, from: {cards: 0}})

    return (
        <section className='md:flex md:flex-row'>
            <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px] md:w-[20%]'>
                <div className='mt-16 flex items-start gap-8'>
                    <FaUser style={{fontSize: "22px"}} className='mt-[12px]'/>
                    <div className='text-26'>
                        <animated.div>
                            {
                                customer.customers.to(val => Math.floor(val))
                            }
                        </animated.div>
                        <p className='text-13 font-semibold mb-[36px] md:text-16'>
                            Customer
                        </p>
                    </div>
                </div>
                <div className='flex items-start mb-16 gap-8'>
                    <BsFillCreditCardFill style={{fonrSize: "22px"}} className='mt-[12px]'/>
                    <div className='text-26'>
                        <animated.div>
                            {
                                card.cards.to(val => Math.floor(val))
                            }
                        </animated.div>
                        <p className='text-13 font-semibold md:text-16'>Cards Issued</p>
                    </div>
                </div>
            </div>
            <div className='text-13 flex-col w-[100%] mt-[90px] md:mt-0 font-semibold md:w-[30%] md:text-16 md:ml-[20%]'>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="check-icons" />
                    <p>Card reports sent to your phone every</p>
                </div>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="check-icons" />
                    <p>No external fees</p>
                </div>
                <div className='check-content'>
                    <img src={checkIconMobile} alt="check-icons" />
                    <p>Set speding limits and restrictions</p>
                </div>
            </div>
        </section>
    )
}

export default Content
