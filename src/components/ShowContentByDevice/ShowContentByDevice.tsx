import { DeviceWidth } from "config/devices";
import { FC, ReactNode, useEffect, useState } from "react";

type IDevice = "desktop" | "tablet_1" | "tablet_2" | "phone";

interface ShowContentByDeviceProps {
  device: IDevice;
  children?: ReactNode;
}

const getWidthByDevice: Record<Exclude<IDevice, "desktop">, number> = {
  phone: DeviceWidth.Phone,
  tablet_1: DeviceWidth.Tablet_1,
  tablet_2: DeviceWidth.Tablet_2,
};

const ShowContentByDevice: FC<ShowContentByDeviceProps> = ({ device, children }) => {
  const [shown, setShown] = useState<boolean>(false);

  // todo: возможно, переделать на контекст и resize засунуть в него
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => updateSize(), []);

  const updateSize = () => {
    if (device === "desktop" || window.innerWidth <= getWidthByDevice[device]) {
      setShown(true);
    } else {
      setShown(false);
    }
  };

  return shown ? <>{children}</> : null;
};

export default ShowContentByDevice;
