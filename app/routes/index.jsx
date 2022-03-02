import {
  Link, 
  Links,
  useLoaderData
} from "remix";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";

export async function loader() {
  const blockId = "eed8fd8b18414fd385b68e800822d198";

  const notionAPI = new NotionAPI();
  const response = await notionAPI.getPage(blockId);

  return response;
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <NotionRenderer recordMap={data} fullPage={true} darkMode={false} />
      <Link to="/wicching">Wicching Hour</Link>
    </div>
  );
}
