import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function PoemText() {
  const [title, setTitle] = useState("");
  const [poem, setPoem] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryData = queryParams.get("data");

    if (queryData) {
      try {
        const deserializedData = JSON.parse(decodeURIComponent(queryData));
        console.log("Deserialized data:", deserializedData);

        const titleMatch = deserializedData.match(/"title": "([^"]+)"/);
const title = titleMatch ? titleMatch[1] : "";

// Extracting poem
const poemMatch = deserializedData.match(/"poem": "([^"]+)"/);
const poem = poemMatch ? poemMatch[1] : "";

        
          setTitle(title);
          setPoem(poem);
  
          console.error("Deserialized data does not contain the required fields.");
        
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
