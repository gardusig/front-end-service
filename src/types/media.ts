export type Media = {
  url: string;
  type: MediaType;
};

export enum MediaType {
  IMAGE = "image",
  GIF = "gif",
  VIDEO = "video",
}
