import { useRouter } from "next/router";

export const LazyImage = (props) => {
  const router = useRouter();
  return (
    <img
      onClick={(e) => {
        if (props?.link) {
          router.push(props?.link);
        }
        return;
      }}
      {...props}
      src={props?.src}
      alt={props?.alt}
    />
  );
};
