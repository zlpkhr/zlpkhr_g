import Image from "next/image";
import { CSSProperties, ReactNode } from "react";

export type AvatarImageProps = {
  src: string;
  size: number;
  alt: string;
};

export function AvatarImage(props: AvatarImageProps) {
  return (
    <Image
      src={props.src}
      width={props.size}
      height={props.size}
      alt={props.alt}
      style={
        {
          "--header-avatar-size": `${props.size}px`,
        } as CSSProperties
      }
      className="size-[--header-avatar-size] rounded-full"
    />
  );
}

export type AvatarNameProps = {
  children?: string;
};

export function AvatarName(props: AvatarNameProps) {
  return (
    <h1 className="text-m font-semibold text-neutral-800">{props.children}</h1>
  );
}

export type AvatarBioProps = {
  children?: string;
};

export function AvatarBio(props: AvatarBioProps) {
  return <p className="text-m text-neutral-400">{props.children}</p>;
}

export type AvatarDescriptionProps = {
  children?: ReactNode;
};

export function AvatarDescription(props: AvatarDescriptionProps) {
  return (
    <hgroup className="inline-flex flex-col gap-y-0.75">
      {props.children}
    </hgroup>
  );
}

export type AvatarProps = {
  children?: ReactNode;
};

export function Avatar(props: AvatarProps) {
  return (
    <div className="inline-flex items-center gap-x-4">{props.children}</div>
  );
}
