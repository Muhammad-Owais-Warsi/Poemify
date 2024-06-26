import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";


interface ResponseType {
  title:string,
  poem:string
}

export function PoemText() {
  const [title, setTitle] = useState<string>("");
  const [poem, setPoem] = useState<string>("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryData = queryParams.get("data");

    if (queryData) {
      try {
        const deserializedData = JSON.parse(decodeURIComponent(queryData)) as ResponseType[];
        console.log(queryData)

        deserializedData.map((data:any) => {

          setTitle(data.title);
          setPoem(data.poem);
        })




      } catch (error) {
        console.error("Error parsing query data:", error);
      }
    }
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
        {title || "Blush of Twilight"}
      </h1>
      <TextGenerateEffect words={poem} />

    </>
  );
}
