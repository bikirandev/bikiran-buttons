import { MouseEvent, ReactNode } from "react";
import cn from "../../utils/cn";

const cName = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-white";
    case "primary-line":
      return "border border-primary text-primary bg-white hover:bg-primary hover:text-white";
    case "secondary":
      return "bg-[#AE00B9] text-white";
    case "secondary-line":
      return "text-[#AE00B9] bg-[#FBF2FB] hover:bg-[#AE00B9] hover:text-white";
    case "secondary-line-bordered":
      return "border border-[#AE00B9] text-[#AE00B9] bg-white hover:bg-[#AE00B9] hover:text-white";
    case "blue":
      return "bg-[#4370FF] text-white";
    case "blue-line":
      return "text-[#4370FF] bg-[#ECF1FF] hover:bg-[#4370FF] hover:text-white";
    case "blue-line-bordered":
      return "border border-[rgba(67,112,255,0.50)] text-[#4370FF] bg-transparent hover:bg-[#4370FF] hover:text-white";
    case "red":
      return "bg-[#F50303] text-white";
    case "red-line":
      return "text-[#F50303] bg-[rgba(245,3,3,0.10)] hover:bg-[#F50303] hover:text-white";
    case "red-line-bordered":
      return "border border-[#F50303] text-[#F50303] bg-white hover:bg-[#F50303] hover:text-white";
    case "pink":
      return "bg-pink text-white";
    case "pink-outline":
      return "bg-[rgba(245,0,87,0.1)] hover:bg-pink hover:text-white text-pink transition-colors";
    case "pink-outline-bordered":
      return "bg-[rgba(245,0,87,0.1)] hover:bg-pink hover:text-white text-pink transition-colors border border-pink";
    case "green":
      return "bg-[#00A143] text-white";
    case "green-outline":
      return "bg-[#E8FAEF] hover:bg-[#00A143] hover:text-white text-[#00A143] transition-colors";
    case "gray":
      return "bg-primary-100 text-primary-500";
    case "yellow":
      return "bg-[#FFA113] text-[#FFA113]";
    case "yellow-outline":
      return "bg-[#FFF1DC] hover:bg-[#FFA113] hover:text-white text-[#FFA113] transition-colors";
    default:
      return "bg-primary text-white";
  }
};

type ButtonProps2 = {
  title?: any;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "primary-line"
    | "secondary"
    | "secondary-line"
    | "secondary-line-bordered"
    | "blue"
    | "blue-line"
    | "blue-line-bordered"
    | "red"
    | "red-line"
    | "red-line-bordered"
    | "pink"
    | "pink-outline"
    | "pink-outline-bordered"
    | "green"
    | "green-outline"
    | "yellow-outline"
    | "gray";
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

// Loading component
export const ButtonLoading: React.FC = () => {
  return (
    <div className="size-full bg-primary-50 opacity-50 absolute top-0 left-0">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block size-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-loader-circle animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </span>
    </div>
  );
};

const Button = ({
  children,
  title,
  type = "button",
  variant = "primary",
  onClick,
  className,
  disabled,
  loading,
}: ButtonProps2) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "relative px-3 py-1 text-base font-medium rounded-[8px] transition-colors disabled:bg-primary-100 disabled:pointer-events-none disabled:text-primary-500",
        className,
        cName(variant)
      )}
      disabled={disabled}
    >
      {children || title}

      {loading ? (
        <div className="absolute top-0 left-0 size-full text-primary">
          <ButtonLoading />
        </div>
      ) : null}
    </button>
  );
};

export const ButtonRefresh: React.FC<Partial<ButtonProps2>> = ({
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <div className={cn("w-10 h-full", className)}>
      <button
        type="button"
        className={`size-full relative ${
          disabled
            ? "after:absolute after:top-0 after:left-0 after:size-full after:bg-primary-100 after:rounded-[8px] block"
            : "cursor-pointer"
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="10" fill="#14B9FF" />
          <path
            d="M20.0004 21.9928C21.0264 21.9928 21.8582 21.1314 21.8582 20.0688C21.8582 19.0062 21.0264 18.1448 20.0004 18.1448C18.9744 18.1448 18.1426 19.0062 18.1426 20.0688C18.1426 21.1314 18.9744 21.9928 20.0004 21.9928Z"
            fill="white"
            fillOpacity="0.7"
          />
          <path
            d="M21.1984 9.10731C20.6951 9.03066 20.2066 9 19.7403 9C14.6849 9 12.0129 13.0319 12.0129 13.0319C10.8065 14.6263 10.1107 16.6116 9.88867 18.9495H13.1898C13.3823 16.7496 14.3371 14.9483 16.2023 13.7065C19.1555 11.7365 22.02 12.1428 24.729 14.381C25.4173 13.5455 26.1205 12.6947 26.8237 11.8362C25.3951 10.4181 23.3967 9.3756 21.1984 9.10731Z"
            fill="white"
          />
          <path
            d="M14.6708 20.0533C14.5301 20.0533 14.3895 20.0533 14.2489 20.0533C14.012 20.0533 13.7752 20.0533 13.5309 20.0533H9.49702C9.23056 20.0533 8.9567 20.0533 8.68284 20.0533C8.39417 20.0457 8.17952 20.1453 8.0537 20.4213C7.93527 20.6972 8.02409 20.9195 8.20913 21.1341C8.72725 21.7397 9.23796 22.3529 9.74867 22.9661C10.3704 23.7097 10.9996 24.4532 11.6583 25.2351C11.6953 25.1814 11.7101 25.1354 11.7397 25.0971C12.5983 24.0699 13.4643 23.0428 14.3229 22.0157C14.582 21.7014 14.8484 21.3948 15.1075 21.0805C15.2777 20.8812 15.3221 20.6512 15.2111 20.4059C15.1075 20.176 14.9224 20.0533 14.6708 20.0533Z"
            fill="white"
            fillOpacity="0.7"
          />
          <path
            d="M18.8014 31.03C19.3048 31.1066 19.7933 31.1373 20.2596 31.1373C25.3075 31.1373 27.9869 27.1053 27.9869 27.1053C29.1934 25.5186 29.8817 23.5257 30.1112 21.1877H26.8174C26.625 23.3877 25.6702 25.189 23.805 26.4308C20.8517 28.4008 17.9873 27.9945 15.2783 25.7562C14.5899 26.5918 13.8868 27.4426 13.1836 28.3011C14.6047 29.7192 16.6032 30.7617 18.8014 31.03Z"
            fill="white"
          />
          <path
            d="M25.3297 20.0841C25.4704 20.0841 25.611 20.0841 25.7516 20.0841C25.9885 20.0841 26.2253 20.0841 26.4696 20.0841H30.5035C30.7699 20.0841 31.0438 20.0841 31.3177 20.0841C31.6063 20.0917 31.821 19.9921 31.9468 19.7161C32.0652 19.4402 31.9764 19.2179 31.7914 19.0033C31.2733 18.3977 30.7625 17.7845 30.2518 17.1713C29.6301 16.4277 29.001 15.6842 28.3422 14.9023C28.3052 14.956 28.2904 15.002 28.2608 15.0403C27.4022 16.0675 26.5362 17.0946 25.6776 18.1218C25.4186 18.436 25.1521 18.7426 24.893 19.0569C24.7228 19.2562 24.6784 19.4862 24.7894 19.7315C24.893 19.9614 25.0781 20.0841 25.3297 20.0841Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Button;
