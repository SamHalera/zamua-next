import ContentPage from "@/components/contents/ContentPage";

export default async function page({
  // params,
  searchParams,
}: {
  // params: { path: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const path = "/home/";

  console.log(path);
  const response = await fetch(
    // `${process.env.NEXT_PUBLIC_FRONT}/api/get-public-page?pathname=${path}`,
    `${process.env.NEXT_PUBLIC_FRONT}/api/get-public-page?pathname=${path}`,
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_BEARER_TOKEN}`,
      },
      cache: "no-cache",
    }
  );

  const pageData: PageData = await response.json();
  console.log(pageData);
  return <ContentPage data={pageData} />;
}
