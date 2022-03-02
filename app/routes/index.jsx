import {
  Link, 
  Links,
  useLoaderData
} from "remix";
import { NotionAPI } from "notion-client";
import { getPageTitle, getAllPagesInSpace } from 'notion-utils';
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x";

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
      <NotionRenderer 
        recordMap={data} 
        fullPage={true} 
        darkMode={false} 
        customImages={true} 
        rootDomain='localhost:3000' // used to detect root domain links and open this in the same tab
        components={{
          image: ({
            src,
            alt,

            height,
            width,

            className,
            style,
            loading,
            decoding,
            
            ref,
            onLoad
          }) => (
            <img
            className={className}
            style={style}
            src={src}
            ref={ref}
            width={width}
            height={height}
            loading='lazy'
            alt={alt}
            decoding='async'
          />
          ),
          collection: Collection,
          collectionRow: CollectionRow
        }} />
      <Link to="/wicching">Wicching Hour</Link>
    </div>
  );
}
