import ContentPage from "@/components/contents/ContentPage";

export default async function page({
  params,
  searchParams,
}: {
  params: { path: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { path } = params;
  // console.log(path);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONT}/api/get-public-page?pathname=${"home"}`,
    { cache: "no-cache" }
  );
  const pageData: PageData = await response.json();
  // console.log(pageData);
  return <ContentPage data={pageData} />;
}
