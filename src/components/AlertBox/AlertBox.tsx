import type { AlertBoxProps } from "../../types";

//this is the component to open the alert box when called
export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  const alertStyles = {   //these are props to determine the color of the alert box depending on alert
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };
  return (
    <div className={`p-4 w-auto border-1-4 flex flex-col gap-2 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        <p className="font-bold">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700"
        >
          x
        </button>
      </div>
      {children}
    </div>
  );
}
