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
      <h2 className="mt-14 font-title font-light text-[2.5rem] leading-[1.15]">
        Bringing <span className="text-pink">elegant</span> &{" "}
        <span className="text-green">user-friendly</span> solutions for complex
        challenges.
      </h2>
      <div className="text-neutral-800 text-base leading-[1.4] flex flex-col gap-y-[0.375rem] mt-6">
        <p>Hey, I&#39;m Gaukhar, a product designer from Kazakhstan.</p>
        <p>
          I&#39;ve designed products and features for large international
          enterprises, mid/small companies and startups in industries like Oil &
          Gas, B2B, HRTech, EdTech. My approach blends creativity with
          analytical thinking, focusing on empathy and collaboration to deliver
          memorable user experiences that exceed expectations.
        </p>
      </div>
      <div className="mt-10 flex gap-x-4">
        <button className="text-neutral-50 bg-[#241F1C] py-2.5 px-4 rounded-lg font-medium text-balance leading-[1.4]">Download CV</button>
        <button className="text-neutral-900 py-2.5 px-4 rounded-lg font-medium text-balance leading-[1.4]">Copy e-mail</button>
      </div>
    </div>
  );
}
