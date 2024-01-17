import Image from 'next/image';
import Button from './Button';

const GetApp = () => {
  return (
    <div className='flex justify-center items-center flex-col-reverse md:flex-row bg-green-90 bg-pattern bg-cover gap-0 py-24 '>
      <div className=' text-white flex justify-center items-center md:items-start flex-col md:pl-32 w-auto md:w-[80%]  gap-y-8'>
        <h2 className='text-5xl font-bold text-center md:text-left'>
          Get for free
          <br /> now!
        </h2>
        <h4>Available on iOS and Android </h4>
        <Button
          type='button'
          title={'App store'}
          icon={'apple.svg'}
          variant={'btn_white_app_store'}
        />
        <Button
          type='button'
          title={'Play store'}
          icon={'android.svg'}
          variant={'btn_dark_green_outline'}
        />
      </div>
      <div className=''>
        <Image src={'/phones.png'} width={500} height={500} alt={'phone'} />
      </div>
    </div>
  );
};

export default GetApp;
