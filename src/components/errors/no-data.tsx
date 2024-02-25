import Image from "next/image";
import NoDataImg from "@/public/no-data.jpg";

type NoDataProps = {
  data: { description: string; message?: string; name?: string };
};

const NoDataError = (error: NoDataProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image src={NoDataImg} alt="no data found" width={75} height={75} />
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

export default NoDataError;
