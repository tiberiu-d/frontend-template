import { Card, CardBody, Avatar, Chip } from "@nextui-org/react";

type CardProps = {
  data: {
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
};

const KTLCard = (ktl: CardProps) => {
  return (
    <Card className="mx-2 hover:cursor-pointer">
      <CardBody className="flex flex-row items-center gap-3">
        <Avatar
          showFallback
          isBordered
          radius="sm"
          className="min-w-[40px]"
          src="test"
        />
        <div className="flex flex-grow flex-row items-center justify-between gap-3">
          <div className="flex flex-grow flex-col gap-2">
            <div className="flex flex-grow flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                {ktl.data.ktl}
                <span className="text-xs text-gray-400">
                  ver. {ktl.data.id}
                </span>
              </div>
              <div className="text-xs">from {ktl.data.release_date}</div>
            </div>
            <div className="flex flex-grow flex-row gap-3">
              <Chip size="sm" variant="flat">
                {ktl.data.duns}
              </Chip>
              <Chip size="sm" variant="flat">
                {ktl.data.supplier}
              </Chip>
            </div>
          </div>
          <div>...</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default KTLCard;
