import { getPublicPage } from "@/actions/getPublicPage";
import ContentPage from "@/components/contents/ContentPage";

const Page = async () => {
  const path = "/";

  const pageData = await getPublicPage(path);

  return <ContentPage data={pageData} />;
};

export default Page;
