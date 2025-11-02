import { useEffect, useState } from "react";
import api from "../utils/api";

interface Content {
    _id: string;
    title: string;
    link: string;
    tags?: string;
    userId?: {
        _id: string;
        username: string;
    }
}

export function useContent() {
  const [contents, setContents] = useState<Content[]>([]); // 👈 now typed

  useEffect(() => {
    api.get('/api/v1/user/content').then((response) => {
      setContents(response.data.content);
    });
  }, [contents]);

  return contents;
}