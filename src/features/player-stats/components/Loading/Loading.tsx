import ReactLoading from "react-loading";
import { LoadingSection } from "./Loading.styles";
import { BigText } from "../../../../shared/styles/styles";

export default function Loading() {
  return (
    <LoadingSection>
      <ReactLoading type="spin" color="#fff" height={100} width={100} />
      <BigText>Looking for the requested player...</BigText>
    </LoadingSection>
  );
}
