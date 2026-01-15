import { Suspense } from "react";
import GenerateClient from "./GenerateClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-xl">Loading...</div>}>
      <GenerateClient />
    </Suspense>
  );
}
