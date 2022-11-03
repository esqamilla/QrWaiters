import { Upload, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import { DropIcon } from "components/Icons/Icons";
import UploadedFiles from "components/UploadPhoto/UploadFile/UploadedFiles";
import React, { useEffect, useState } from "react";
import concatClasses from "utils/concatClasses";
import style from "./UploadPhoto.module.scss";

const { Dragger } = Upload;

interface UploadPhotoProps<T extends RcFile> extends Omit<UploadProps<T>, "showUploadList" | "onChange"> {
  showUploadFiles?: boolean;
  fileList?: FileList<T>;
  setFileList?: (fileList: FileList<T>) => void;
  onChange?: (fileList: FileList<T>) => void;
}

export type FileList<T> = T[];

const UploadPhoto = <T extends RcFile>({
  className,
  maxCount = 1,
  onChange,
  showUploadFiles = true,
  fileList = [],
  setFileList,
  ...props
}: UploadPhotoProps<T>): JSX.Element => {
  const [uploadedFileList, setUploadedFileList] = useState<FileList<T>>(fileList);

  useEffect(() => {
    setUploadedFileList(fileList);
  }, [fileList]);

  const onDeleteUploadFile = (id: string) => {
    setUploadedFileList((prevFiles) => prevFiles.filter((file) => file.uid !== id));
    setFileList && setFileList(fileList.filter((file) => file.uid !== id));
  };

  return (
    <>
      <Dragger
        maxCount={maxCount}
        showUploadList={false}
        beforeUpload={(file, fileList) => {
          const fileListT = fileList as FileList<T>;

          setUploadedFileList(fileListT);
          setFileList && setFileList(fileListT);

          onChange && onChange(fileListT);

          return false;
        }}
        className={concatClasses(style.dragger, className, fileList.length >= maxCount && style.dragger_hidden)}
        {...props}>
        <DropIcon />
        <div className={style.text}>Drop files here or</div>
        <div className={style.link}>Browse</div>
      </Dragger>
      {showUploadFiles && (
        <UploadedFiles
          className={concatClasses(fileList.length >= maxCount && style.fileList_withMargin)}
          uploadedFileList={uploadedFileList}
          onDelete={onDeleteUploadFile}
        />
      )}
    </>
  );
};

export default UploadPhoto;
