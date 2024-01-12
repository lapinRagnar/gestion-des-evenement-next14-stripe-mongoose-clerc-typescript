import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <section className='bg-gray-600 bg-dotted-pattern bg-contain md:py-10'>

        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold text-emerald-300'>Host, Connect, Celebrate: Your Event, Our Platform!</h1>
            <p className='p-regular-20 md:p-regular-24 text-gray-300'>
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
            </p>
            <Button asChild className='w-full sm:w-fit rounded-full' size={'lg'}>
              <Link href={'#event'}>
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
            src={'/assets/images/hero.png'} 
            alt='hero' 
            width={1000} 
            height={1000}
            className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]' 
          />

        </div>

      </section>

      <section 
        id='event'
        className='wrapper my-8 flex flex-col gap-8 md:gap-12 bg-orange-600/50 shadow-md shadow-stone-900'
      >
        
        <h2 className='h2-bold text-gray-300'>Trust by <br /> Thousands of Events</h2>

        <div className='flex w-full flex-col gap-5 md:flex-row'>
          Search Category
          {/* TODO */}
        </div>


      </section>
    
    </>
  )
}