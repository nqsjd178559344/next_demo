import type { Data } from "./api/data";
import useSWR from "swr";
import { ResponseError } from "../interfaces";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function UserProfile() {
  const { data, error, isLoading } = useSWR<Data, ResponseError>(
    "/api/data",
    fetcher
  );

  if (error) return <div>失败啦,原因是：{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  return <h1>数据总数是: {data.total}</h1>;
}
