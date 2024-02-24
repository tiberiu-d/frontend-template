"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import KTLCard from "../KTL/card";
import { ScrollArea } from "../ui/scroll-area";

type KTL = {
  id: number;
  uuid: string;
  customer: string;
  ktl: string;
  duns: string;
  supplier: string;
  release_date: string;
  version: string;
  content: {
    lines: number;
    problems: number;
    warnings: number;
  };
};

const Sidebar = () => {
  // query for the data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ktls_sidebar"],
    queryFn: async () => {
      const TARGET = `${process.env.NEXT_PUBLIC_API_TARGET}/ktls`;
      const { data } = await axios.get(TARGET);
      return data as KTL[];
    },
  });

  // conditional returns (loading, error, data or no data)
  if (isLoading) return <div>data is being loaded</div>;

  if (isError) return <div>something went wrong</div>;

  if (data && data.length > 0)
    return (
      <div className="flex h-full flex-col gap-2 overflow-auto">
        <div className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          expedita natus, nam dolore dolor beatae, delectus labore, voluptatem
          architecto repellat ipsam ad soluta hic molestiae reprehenderit fugit
          veritatis quia nostrum enim quam! Perspiciatis praesentium quibusdam
          libero nostrum quae esse consectetur distinctio dignissimos quas,
          voluptatem sint temporibus natus mollitia nobis numquam.
        </div>
        <ScrollArea className="flex-grow pr-2">
          <div className="flex flex-col gap-3 py-2">
            {data.map((ktl) => (
              <KTLCard key={ktl.id} data={ktl} />
            ))}
          </div>
        </ScrollArea>
      </div>
    );

  return <div>database returns no records</div>;
};

export default Sidebar;
