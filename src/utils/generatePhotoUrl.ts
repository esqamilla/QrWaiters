import { baseUrl } from "config/api";

export const generatePhotoUrl = (url?: string) => (url ? baseUrl.User + "/" + url : undefined);
