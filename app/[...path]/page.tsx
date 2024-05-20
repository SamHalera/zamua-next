import ContentPage from "@/components/contents/ContentPage";

export default async function Page({
  params,
  searchParams,
}: {
  params: { path: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { path } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONT}/api/get-public-page?pathname=${path}`,
    { cache: "no-cache" }
  );

  const pageData: PageData = await response.json();
  return <ContentPage data={pageData} />;
}
