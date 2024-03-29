import Image from "next/image";
import ErrorImg from "@/public/errors/error.png";

type ErrorProps = {
  data: { description: string; message?: string; name?: string };
};

const GeneralError = (error: ErrorProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image src={ErrorImg} alt="no data found" width={25} height={25} />
      <p className="py-2">{error.data.description}</p>
      {error.data.name && (
        <div className="font-semibold">{error.data.name}</div>
      )}
      {error.data.message && (
        <div className="text-xs text-gray-500">( {error.data.message} )</div>
      )}
    </div>
  );
};

export default GeneralError;
