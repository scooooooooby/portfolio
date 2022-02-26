import { Link, Links, useLoaderData } from "remix";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

export async function loader() {
  const blockId = "e7f964091c184a62b4b569a65a0df9d5";

  const notionAPI = new NotionAPI();
  const response = await notionAPI.getPage(blockId);

  return response;
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Wiching Hour</h1>
      <Link to="/">Index</Link>
      {/* <p>{text}</p> */}
      <NotionRenderer recordMap={data} fullPage={true} darkMode={false} />
    </div>
  );
}
