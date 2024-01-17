import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon: string;
  variant:
    | 'btn_white'
    | 'btn_white_text'
    | 'btn_green'
    | 'btn_dark_green'
    | 'btn_dark_green_outline'
    | 'btn_white_app_store';
};

const Button = ({ title, icon, type, variant }: ButtonProps) => {
  return (
    <button
      className={` flexCenter gap-3 rounded-full  ${variant} `}
      type={type}
    >
      {icon && <Image src={icon} alt='icon' height={24} width={24} />}
      <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  );
};

export default Button;
