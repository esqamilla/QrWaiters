import { Typography, UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import { CloseIcon, FileIcon } from "components/Icons/Icons";
import style from "components/UploadPhoto/UploadPhoto.module.scss";
import React from "react";
import { biteToMB } from "utils/fileHelper";

const { Paragraph } = Typography;

interface UploadedFilesProps<T extends RcFile> {
  uploadedFileList: UploadFile<T>[];
  onDelete: (id: string) => void;
  className?: string;
}

const UploadedFiles = <T extends RcFile>({
  uploadedFileList,
  onDelete,
  className,
}: UploadedFilesProps<T>): JSX.Element => {
  return (
    <div className={className}>
      {uploadedFileList.map((file) => {
        return (
          <div className={style.uploadedFile} key={file.uid}>
            <FileIcon className={style.fileIcon} />
            <Paragraph ellipsis={true} className={style.fileName}>
              {file.name}
            </Paragraph>
            <div className={style.size}>{biteToMB(file.size)}</div>
            <CloseIcon
              style={{ marginRight: 0, marginLeft: "auto", cursor: "pointer" }}
              onClick={() => {
                onDelete(file.uid);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UploadedFiles;
