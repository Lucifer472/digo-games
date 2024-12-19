"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XIcon } from "lucide-react";

export const SearchBox = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchModal = searchParams.get("search-modal");

  useEffect(() => {
    if (typeof searchModal === "string") {
      if (searchModal === "true") {
        setOpen(true);
        return;
      }
      setOpen(false);

      router.push(pathname);
    }
  }, [searchModal, router, pathname]);

  const handleClear = useCallback(() => {
    setOpen(false);
    router.push(pathname);
  }, [router, pathname]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const search = formData.get("search") as string;

    if (!!search) {
      handleClear();
      router.push("/?q=" + encodeURIComponent(search));
    }
  };

  if (!open) return;

  return (
    <div className="fixed top-0 left-0 w-full min-h-screen h-full bg-black/60 z-50 flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-center gap-x-4 w-full "
      >
        <input
          type="text"
          name="search"
          className="max-w-[768px] w-full px-8 py-4 text-lg border-none outline-none focus-visible:outline-blue-500 rounded-md bg-black text-white"
          placeholder="search here..."
        />
        <button type="button" onClick={handleClear}>
          <XIcon className="size-8" />
        </button>
      </form>
    </div>
  );
};
