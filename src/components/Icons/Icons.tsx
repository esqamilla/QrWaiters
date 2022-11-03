import React, { FC, HTMLProps } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Icons.module.scss";

interface IconDefaultProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  wrapperClassName?: string;
}

interface IconWrapperProps extends HTMLProps<HTMLDivElement> {}

const IconWrapper: FC<IconWrapperProps> = ({ children, className, ...props }) => {
  return (
    <div className={concatClasses(style.icon_wrapper, className)} {...props}>
      {children}
    </div>
  );
};

export const UserIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_user)}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 9.5C10.8284 9.5 11.5 8.8284 11.5 8C11.5 7.17157 10.8284 6.5 10 6.5C9.1716 6.5 8.5 7.17157 8.5 8C8.5 8.8284 9.1716 9.5 10 9.5Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2112 18.5365C18.0833 16.7794 20 13.6136 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 12.4815 0.90389 14.752 2.4004 16.5C2.77735 16.9403 3.1919 17.3474 3.63907 17.7165C5.36766 19.143 7.58376 20 10 20C11.9093 20 13.6936 19.4649 15.2112 18.5365ZM16.1513 15.1152C17.3057 13.7285 18 11.9453 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 11.9453 2.69434 13.7285 3.84871 15.1152C5.54517 13.7898 7.68034 13 10 13C12.3196 13 14.4548 13.7898 16.1513 15.1152ZM14.665 16.4998C13.3511 15.5548 11.7409 15 10 15C8.2591 15 6.64889 15.5548 5.33501 16.4998C6.57009 17.3878 8.0686 17.9325 9.6908 17.9941C9.7934 17.998 9.8964 18 10 18C10.1208 18 10.241 17.9973 10.3605 17.992C11.963 17.921 13.4429 17.3785 14.665 16.4998Z"
        />
      </svg>
    </IconWrapper>
  );
};

export const ArrowIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_arrow)}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11.045 2.4593L16.5858 8H1C0.44771 8 0 8.4478 0 9C0 9.5523 0.44771 10 1 10H16.5858L11.045 15.5408C10.6545 15.9313 10.6545 16.5645 11.045 16.955C11.4356 17.3455 12.0687 17.3455 12.4592 16.955L19.7071 9.7072C20.0976 9.3166 20.0976 8.6835 19.7071 8.2929L12.4592 1.04509C12.2633 0.849151 12.0063 0.751521 11.7495 0.752201C11.6864 0.752371 11.6233 0.758471 11.5611 0.770501C11.372 0.807111 11.1915 0.898641 11.045 1.04509C10.6545 1.43561 10.6545 2.06878 11.045 2.4593Z" />
      </svg>
    </IconWrapper>
  );
};

export const QrCodeIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_qrCode)}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6C18 6.55229 17.5523 7 17 7C16.4477 7 16 6.55229 16 6V2H12C11.4477 2 11 1.55229 11 1C11 0.44772 11.4477 0 12 0H17C17.5523 0 18 0.44772 18 1V6Z" />
        <path d="M2 12C2 11.4477 1.55229 11 1 11C0.44772 11 0 11.4477 0 12V17C0 17.5523 0.44772 18 1 18H6C6.55229 18 7 17.5523 7 17C7 16.4477 6.55229 16 6 16H2V12Z" />
        <path d="M16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H12C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16H16V12Z" />
        <path d="M1 7C1.55229 7 2 6.55229 2 6V2H6C6.55229 2 7 1.55229 7 1C7 0.44772 6.55229 0 6 0H1C0.44772 0 0 0.44772 0 1V6C0 6.55229 0.44772 7 1 7Z" />
      </svg>
    </IconWrapper>
  );
};

export const TransfersIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_transfer)}
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6C12 7.1046 11.1046 8 10 8C8.89543 8 8 7.1046 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.89543 20 2V10C20 11.1046 19.1046 12 18 12H2C0.895431 12 0 11.1046 0 10V2ZM2 10V2H18V10H2Z"
        />
        <path d="M20 14C21.1046 14 22 13.1046 22 12V5C22 4.44772 22.4477 4 23 4C23.5523 4 24 4.44772 24 5V12C24 14.2091 22.2091 16 20 16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H20Z" />
      </svg>
    </IconWrapper>
  );
};

export const LogOutIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_logOut)}
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M8.43433 0.0658641L2.99731 1.87836C2.43131 2.06686 2.02832 2.62576 2.02832 3.22206V17.9096H1.02832C0.47632 17.9096 0.0283203 18.3573 0.0283203 18.9096C0.0283203 19.4619 0.47632 19.9096 1.02832 19.9096H13.0283H15.0283C15.5803 19.9096 16.0283 19.4619 16.0283 18.9096C16.0283 18.3573 15.5803 17.9096 15.0283 17.9096H14.0283V3.90956C14.0283 2.25266 12.6853 0.909564 11.0283 0.909564L9.98831 0.912761C9.84331 0.203361 9.11333 -0.160536 8.43433 0.0658641ZM8.02832 2.31586C8.02832 3.21576 8.02832 6.09176 8.02832 8.90956C7.47632 8.90956 7.02832 9.35726 7.02832 9.90956C7.02832 10.4619 7.47632 10.9096 8.02832 10.9096C8.02832 13.9216 8.02832 17.0135 8.02832 17.9096H4.02832V3.65956L8.02832 2.31586ZM10.0283 2.90956H11.0283C11.5803 2.90956 12.0283 3.35726 12.0283 3.90956V17.9096H10.0283C10.0283 15.9904 10.0283 5.72486 10.0283 2.90956Z" />
      </svg>
    </IconWrapper>
  );
};

export const HomeIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_home)}
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.00074 9V18C3.00074 18.5522 3.44845 19 4.00074 19H9.0007C9.553 19 10.0007 18.5522 10.0007 18V12H12.0007V18C12.0007 18.5522 12.4485 19 13.0007 19H18.0007C18.553 19 19.0007 18.5522 19.0007 18V9H20.8159C21.284 9 21.4954 8.4143 21.1353 8.1153L12.2784 0.760871C11.5377 0.145791 10.4638 0.145791 9.7231 0.760871L0.86615 8.1153C0.50603 8.4143 0.71748 9 1.18557 9H3.00074ZM14.0007 12V17H17.0007V7.2817L11.0007 2.29956L5.00073 7.28171V8.9954L5.00074 9V17H8.00074L8.00073 11C8.00073 10.4477 8.44845 10 9.0007 10H13.0007C13.553 10 14.0007 10.4477 14.0007 11V11.9956V12Z"
        />
      </svg>
    </IconWrapper>
  );
};

export const DropIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_drop)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5907 8.00003L13.005 5.41428V15.0001C13.005 15.5523 12.5573 16.0001 12.005 16.0001C11.4527 16.0001 11.005 15.5523 11.005 15.0001V5.41428L8.41917 8.00009C8.02865 8.39062 7.39548 8.39062 7.00496 8.00009C6.95614 7.95128 6.91343 7.89867 6.87682 7.84322C6.62054 7.45507 6.66325 6.92759 7.00496 6.58588L11.2979 2.29295C11.4854 2.10542 11.7398 2.00006 12.005 2.00006C12.2702 2.00006 12.5246 2.10542 12.7121 2.29295L17.005 6.58582C17.3955 6.97634 17.3955 7.60951 17.005 8.00003C16.6144 8.39056 15.9813 8.39056 15.5907 8.00003Z"
          fillOpacity="0.35"
        />
        <path
          d="M4.00488 14.0001C4.55717 14.0001 5.00488 14.4478 5.00488 15.0001V19.0001H19.0049V15.0001C19.0049 14.4478 19.4526 14.0001 20.0049 14.0001C20.5572 14.0001 21.0049 14.4478 21.0049 15.0001V19.0001C21.0049 20.1047 20.1095 21.0001 19.0049 21.0001H5.00488C3.90031 21.0001 3.00488 20.1047 3.00488 19.0001V15.0001C3.00488 14.4478 3.4526 14.0001 4.00488 14.0001Z"
          fillOpacity="0.35"
        />
      </svg>
    </IconWrapper>
  );
};

export const FileIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_file)}
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.4142 4.41422C15.7892 4.78929 15.9999 5.298 15.9999 5.82843V18C15.9999 19.1046 15.1045 20 13.9999 20H1.99994C0.895369 20 -6.10352e-05 19.1046 -6.10352e-05 18V2C-6.10352e-05 0.89543 0.895369 0 1.99994 0H10.1715C10.7019 0 11.2107 0.21071 11.5857 0.58578L15.4142 4.41422ZM13.9999 5.82843V18H1.99994V2H10.1715L13.9999 5.82843Z"
          fill="#08BA44"
        />
      </svg>
    </IconWrapper>
  );
};

export const CloseIcon: FC<IconDefaultProps> = ({ className, ...props }) => {
  return (
    <IconWrapper {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_close)}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.6585 0.928636C14.049 0.538116 14.6822 0.538106 15.0727 0.928636C15.4632 1.31916 15.4632 1.95233 15.0727 2.34285L9.4158 7.99976L15.0727 13.6566C15.4632 14.0471 15.4632 14.6803 15.0727 15.0708C14.6822 15.4613 14.049 15.4613 13.6585 15.0708L8.0016 9.41396L2.34481 15.0708C2.3387 15.0769 2.33254 15.0829 2.32632 15.0888C1.93455 15.4612 1.31501 15.4552 0.930593 15.0708C0.637703 14.7779 0.564473 14.3485 0.710923 13.9874C0.759733 13.867 0.832963 13.7542 0.930593 13.6566L6.5874 7.99976L0.930593 2.3429C0.540063 1.95238 0.540063 1.31921 0.930593 0.928686C1.32111 0.538156 1.95428 0.538156 2.3448 0.928686L8.0016 6.58546L13.6585 0.928636Z"
          fillOpacity="0.35"
        />
      </svg>
    </IconWrapper>
  );
};

export const StarIcon: FC<IconDefaultProps> = ({ wrapperClassName, className, ...props }) => {
  return (
    <IconWrapper className={wrapperClassName} {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_star)}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0237 0.441406C9.45281 0.441206 8.86981 0.79641 8.52451 1.50341L6.40061 5.87611L1.55941 6.56321C0.00251473 6.77981 -0.501885 8.30721 0.622414 9.40521L4.12051 12.8102L3.30851 17.5892C3.04111 19.1362 4.32421 20.0712 5.71351 19.3382C6.25031 19.0542 9.01041 17.6242 10.0237 17.0892L14.3339 19.3382C15.7248 20.0712 17.0119 19.1372 16.7389 17.5892L15.8956 12.8102L19.3938 9.40521C20.5234 8.31121 20.045 6.78421 18.488 6.56321L13.6156 5.87611L11.5229 1.50341C11.1781 0.79611 10.5946 0.441706 10.0237 0.441406Z"
          fill="white"
        />
      </svg>
    </IconWrapper>
  );
};

export const StarOutlineIcon: FC<IconDefaultProps> = ({ wrapperClassName, className, ...props }) => {
  return (
    <IconWrapper className={wrapperClassName} {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_star)}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0237 0.441406C9.45282 0.441206 8.86982 0.796411 8.52452 1.50341L6.40062 5.87611L1.55941 6.56321C0.00251472 6.77981 -0.501886 8.30722 0.622415 9.40522L4.12052 12.8102L3.30852 17.5892C3.04112 19.1362 4.32421 20.0712 5.71351 19.3382C6.25032 19.0542 9.01042 17.6242 10.0237 17.0892L14.3339 19.3382C15.7248 20.0712 17.0119 19.1372 16.7389 17.5892L15.8956 12.8102L19.3938 9.40522C20.5234 8.31122 20.045 6.78421 18.488 6.56321L13.6156 5.87611L11.5229 1.50341C11.1781 0.796111 10.5946 0.441706 10.0237 0.441406ZM10.0237 3.03381L12.0851 7.25041C12.2305 7.54871 12.5062 7.73481 12.8347 7.78141L17.5198 8.46821L14.1153 11.7482C13.877 11.9792 13.7766 12.2962 13.8342 12.6222L14.6463 17.2452L10.4922 15.0592C10.2004 14.9052 9.84692 14.9052 9.55522 15.0592C9.03692 15.3322 6.50372 16.6632 5.40112 17.2452L6.18202 12.6542C6.23792 12.3292 6.13622 11.9782 5.90092 11.7482L2.52761 8.46821L7.18142 7.81261C7.51082 7.76681 7.81632 7.54921 7.96232 7.25041L10.0237 3.03381Z"
          fill="white"
        />
      </svg>
    </IconWrapper>
  );
};

export const DoorOpenIcon: FC<IconDefaultProps> = ({ wrapperClassName, className, ...props }) => {
  return (
    <IconWrapper className={wrapperClassName} {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_doorOpen)}
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.43433 0.0658641L2.99731 1.87836C2.43131 2.06686 2.02832 2.62576 2.02832 3.22206V17.9096H1.02832C0.47632 17.9096 0.0283203 18.3573 0.0283203 18.9096C0.0283203 19.4619 0.47632 19.9096 1.02832 19.9096H13.0283H15.0283C15.5803 19.9096 16.0283 19.4619 16.0283 18.9096C16.0283 18.3573 15.5803 17.9096 15.0283 17.9096H14.0283V3.90956C14.0283 2.25266 12.6853 0.909564 11.0283 0.909564L9.98831 0.912761C9.84331 0.203361 9.11333 -0.160536 8.43433 0.0658641ZM8.02832 2.31586C8.02832 3.21576 8.02832 6.09176 8.02832 8.90956C7.47632 8.90956 7.02832 9.35726 7.02832 9.90956C7.02832 10.4619 7.47632 10.9096 8.02832 10.9096C8.02832 13.9216 8.02832 17.0135 8.02832 17.9096H4.02832V3.65956L8.02832 2.31586ZM10.0283 2.90956H11.0283C11.5803 2.90956 12.0283 3.35726 12.0283 3.90956V17.9096H10.0283C10.0283 15.9904 10.0283 5.72486 10.0283 2.90956Z"
          fill="#272937"
          fillOpacity="0.35"
        />
      </svg>
    </IconWrapper>
  );
};

export const FilterIcon: FC<IconDefaultProps> = ({ wrapperClassName, className, ...props }) => {
  return (
    <IconWrapper className={wrapperClassName} {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_filter)}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.666626 2.16667C0.666626 1.24619 1.41282 0.5 2.33329 0.5H15.6666C16.5871 0.5 17.3333 1.24619 17.3333 2.16667V2.37378C17.3333 2.77748 17.1868 3.16747 16.921 3.47128L11.9123 9.19542C11.6465 9.49917 11.5 9.88917 11.5 10.2929V15.1321C11.5 15.8494 11.0409 16.4863 10.3604 16.7133L7.59679 17.6344C7.05721 17.8143 6.49996 17.4126 6.49996 16.8438V10.2929C6.49996 9.88917 6.35343 9.49917 6.08758 9.19542L1.079 3.47128C0.813159 3.16747 0.666626 2.77748 0.666626 2.37378V2.16667ZM2.33329 2.37378V2.16667H15.6666V2.37378L10.658 8.09792C10.1264 8.7055 9.83329 9.4855 9.83329 10.2929V15.1321L8.16663 15.6877V10.2929C8.16663 9.4855 7.87354 8.7055 7.34188 8.09792L2.33329 2.37378Z"
          fill="#272937"
        />
      </svg>
    </IconWrapper>
  );
};

export const CloseCircleIcon: FC<IconDefaultProps> = ({ wrapperClassName, className, ...props }) => {
  return (
    <IconWrapper className={wrapperClassName} {...props}>
      <svg
        className={concatClasses(className, style.icon, style.icon_closeCircle)}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.50196 6.50001C6.89248 6.10949 7.52565 6.10949 7.91617 6.50001L10.002 8.58581L12.0877 6.50001C12.4783 6.10949 13.1114 6.10949 13.502 6.50001C13.8925 6.89054 13.8925 7.5237 13.502 7.91423L11.4162 10L13.502 12.0858C13.8925 12.4763 13.8925 13.1095 13.502 13.5C13.1114 13.8905 12.4783 13.8905 12.0877 13.5L10.002 11.4142L7.91617 13.5C7.52564 13.8905 6.89248 13.8905 6.50195 13.5C6.11143 13.1095 6.11143 12.4763 6.50195 12.0858L8.5877 10L6.50196 7.91423C6.11143 7.5237 6.11143 6.89054 6.50196 6.50001Z"
          fill="#272937"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.002 10C20.002 15.5228 15.5248 20 10.002 20C4.47911 20 0.00195312 15.5228 0.00195312 10C0.00195312 4.47715 4.47911 0 10.002 0C15.5248 0 20.002 4.47715 20.002 10ZM18.002 10C18.002 14.4183 14.4202 18 10.002 18C5.58368 18 2.00195 14.4183 2.00195 10C2.00195 5.58172 5.58368 2 10.002 2C14.4202 2 18.002 5.58172 18.002 10Z"
          fill="#272937"
        />
      </svg>
    </IconWrapper>
  );
};
