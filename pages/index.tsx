import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-[36.25rem] mx-auto pt-[4.5rem] pb-10">
      <div className="flex gap-x-4">
        <Image
          src="/images/avatar.webp"
          width={48}
          height={48}
          alt="Portrait photography of Gaukhar Zulpykhar"
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-[0.1875rem]">
          <h1 className="text-base leading-[1.4] font-semibold text-neutral-800">
            Gaukhar Zulpykhar
          </h1>
          <span className="text-base leading-[1.4] text-neutral-400">
            Product Designer
          </span>
        </div>
      </div>
    </div>
  );
}
