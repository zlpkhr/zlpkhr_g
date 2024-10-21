import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-[36.25rem] pb-10 pt-[4.5rem]">
      <div className="flex gap-x-4">
        <Image
          src="/images/avatar.webp"
          width={48}
          height={48}
          alt="Portrait photography of Gaukhar Zulpykhar"
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-[0.1875rem]">
          <h1 className="text-base font-semibold leading-[1.4] text-neutral-800">
            Gaukhar Zulpykhar
          </h1>
          <span className="text-base leading-[1.4] text-neutral-400">
            Product Designer
          </span>
        </div>
      </div>
      <h2 className="mt-14 font-title text-[2.5rem] font-light leading-[1.15]">
        Bringing <span className="text-pink">elegant</span> &{" "}
        <span className="text-green">user-friendly</span> solutions for complex
        challenges.
      </h2>
      <div className="mt-6 flex flex-col gap-y-[0.375rem] text-base leading-[1.4] text-neutral-800">
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
        <button className="rounded-lg bg-[#241F1C] px-4 py-2.5 text-base font-medium leading-[1.4] text-neutral-50">
          Download CV
        </button>
        <button className="rounded-lg px-4 py-2.5 text-base font-medium leading-[1.4] text-neutral-900">
          Copy e-mail
        </button>
      </div>
      <h2 className="mt-14 text-base font-bold leading-[1.4] text-neutral-900">
        Works
      </h2>
      <div className="mt-6 flex flex-col gap-y-6">
        <div className="relative flex flex-col gap-y-3">
          <span className="absolute right-5 top-5 rounded-full bg-neutral-200 px-2 py-1 text-xs leading-[1.4] text-neutral-400">
            coming soon
          </span>
          <div className="aspect-[3/2] rounded-xl bg-neutral-100 px-[5.5rem] pt-[4.5rem]">
            <Image
              src="/images/works/chevron.jpeg"
              alt="Streamlining work processes for Chevron&#39;s joint venture"
              width={1920}
              height={1117}
              className="rounded shadow-[0px_12px_26px_0px_#4D4D4D0A,0px_47px_47px_0px_#4D4D4D0A,0px_107px_64px_0px_#4D4D4D05,0px_189px_76px_0px_#4D4D4D03,0px_296px_83px_0px_#4D4D4D00]"
            />
          </div>
          <hgroup className="flex flex-col gap-y-[0.375rem]">
            <h4 className="text-base leading-[1.4] text-neutral-800">
              Streamlining work processes for Chevron&#39;s joint venture
            </h4>
            <p className="text-sm leading-[1.4] text-neutral-400">
              2023 - 2024
            </p>
          </hgroup>
        </div>
        <div className="relative flex flex-col gap-y-3">
          <div className="aspect-[3/2] rounded-xl bg-neutral-100 px-[5.5rem] pt-[4.5rem]">
            <Image
              src="/images/works/exxon-mobil.png"
              alt="Corporate platfrom for ExxonMobil&#39;s distributor"
              width={1440}
              height={1024}
              className="rounded shadow-[0px_12px_26px_0px_#4D4D4D0A,0px_47px_47px_0px_#4D4D4D0A,0px_107px_64px_0px_#4D4D4D05,0px_189px_76px_0px_#4D4D4D03,0px_296px_83px_0px_#4D4D4D00]"
            />
          </div>
          <hgroup className="flex flex-col gap-y-[0.375rem]">
            <h4 className="text-base leading-[1.4] text-neutral-800">
              Corporate platfrom for ExxonMobil&#39;s distributor
            </h4>
            <p className="text-sm leading-[1.4] text-neutral-400">
              2022 - 2023
            </p>
          </hgroup>
        </div>
        <div></div>
      </div>
    </div>
  );
}
