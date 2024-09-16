import { getPublicPage } from "@/actions/getPublicPage";
import ContentPage from "@/components/contents/ContentPage";

export default async function Page({
  params,
  searchParams,
}: {
  params: { path: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { path } = params;

  const pageData = await getPublicPage(path[0]);

  return (
    <>
      <ContentPage data={pageData} />
    </>
  );
}
