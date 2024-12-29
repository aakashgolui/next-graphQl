import { Loader as MantineLoader } from "@mantine/core";

export const Loader = () => {
  return (
    <div className="min-h-[70vh] w-[100%] flex items-center justify-center">
      <MantineLoader type="dots" />;
    </div>
  );
};
