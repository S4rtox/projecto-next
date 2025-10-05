import { Image } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="w-screen h-[10vh] bg-orange-200 flex flex-row items-center px-10">
      <Image
        src="oxxo_logo.svg"
        width={100}
        height={0}
        alt="Ocsso Logo"
        draggable={false}
      />
    </div>
  );
}
