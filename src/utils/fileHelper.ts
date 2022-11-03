import { RcFile } from "antd/es/upload";

export const biteToMB = (size?: number) => `${((size ? size : 0) / 1048576).toFixed(1)} MB`;

export interface DownloadBlob {
  file?: Blob;
  fileName?: string;
}

export const downloadBlob = ({ fileName, file }: DownloadBlob) => {
  const link = document.createElement("a");

  if (file) {
    link.setAttribute("href", URL.createObjectURL(file));
    link.setAttribute("download", fileName ? `${fileName}` : "Unnamed");
    document.body.appendChild(link);

    link.click();
  }
};

export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(blob);
  });
};

export const buildFormData = (files: RcFile[], field: string = "uploadedFile") => {
  const formData = new FormData();

  files.forEach((file) => {
    return formData.append(field, file);
  });

  return formData;
};
