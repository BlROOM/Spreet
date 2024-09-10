import Link from "next/link";
import React from "react";
import Button from "@/components/shared/Button";
import { MAIN_PATHNAME } from "@/constants/path";
import ExtendedLink from "@/components/ExtendedLink";
export default async function NotFound() {
  return (
    <main className="w-full min-h-dvh flex justify-center items-center bg-grayscale-900">
      <div className="flex-col justify-between m-auto text-center text-grayscale-0 text-xl">
        <p className="mb-10">
          죄송합니다. <br />
          해당 페이지를 찾을 수 없습니다.
        </p>
        <ExtendedLink href={MAIN_PATHNAME}>
          <Button className="w-96 h-12 bg-redpoint-800  rounded-lg">
            홈으로
          </Button>
        </ExtendedLink>
      </div>
    </main>
  );
}
