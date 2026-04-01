import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "~/thor.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { payload, session, topic, project } =
    await authenticate.webhook(request);
  console.log(`Received ${topic} webhook for ${project}`);

  return new Response();
};
