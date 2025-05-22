// components/Card.tsx
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  img: string
};

export default function Card({ title, description , img}: CardProps) {
  return (
    <div className="flex justify-between gap-[40px] flex-wrap">
        <Image src={img} width={300} height={300} alt={""} />
     <div className="flex flex-col gap-[10px]">
         <h2 className="text-[#FFFFFB] font-medium text-[18px]">{title}</h2>
      <p className="text-[#FFFFFB] text-[14px] font-light max-w-[300px]">{description}</p>
     </div>
    </div>
  );
}

