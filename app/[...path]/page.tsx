import ContentPage from "@/components/contents/ContentPage";

export default async function Page({
  params,
  searchParams,
}: {
  params: { path: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { path } = params;
  console.log("path inside page", path);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONT}/api/get-public-page?pathname=${path}`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  const pageData = await response.json();
  console.log("pageData", pageData);
  return (
    <>
      <ContentPage data={pageData} />
    </>
  );
}
