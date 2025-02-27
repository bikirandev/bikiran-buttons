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

export default Button;
