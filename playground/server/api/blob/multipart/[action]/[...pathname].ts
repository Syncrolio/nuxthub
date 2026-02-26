import { blob } from "@syncrolio/blob";

export default eventHandler(async (event) => {
  return await blob.handleMultipartUpload(event, {
    addRandomSuffix: true,
    access: "public",
  });
});
