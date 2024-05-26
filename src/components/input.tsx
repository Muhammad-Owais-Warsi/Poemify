"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export default function Input() {
  const placeholders = [
    "In every image, a verse lies hidden, waiting to be found",
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-screen">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
