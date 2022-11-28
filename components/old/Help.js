import classNames from "classnames";
import Image from "next/image";

export default function Help() {
  return (
    <div
      className={classNames(
        "flex flex-col px-7 py-4 bg-teal-700 rounded text-white items-center space-y-4 w-fit"
      )}
    >
      <div className="w-[50vw]">
        <Image
          src="/images/old-man-computer.jpg"
          alt="old man has a computer"
          width="1920px"
          height="1174px"
          layout="responsive"
        />
      </div>
      <p className="z-50 text-xl">This is an example homepage.</p>
    </div>
  );
}
