import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifiedContainer } from "./style";
import { PrimaryButton } from "../../../components/Buttons";
import { login } from "../../../redux/modules/auth/actions";
import auth from "../../../services/auth";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const handleClick = () => {
    const params = {
      id: query.get("userId"),
      verified_token: query.get("token"),
    };
    auth.authVerify(params).then(() => {
      dispatch(login(params.verified_token));
    });
  };
  return (
    <VerifiedContainer>
      <VerifiedContainer.Inner>
        <VerifiedContainer.Heading>Good job!</VerifiedContainer.Heading>
        (c) Sarvar A.
        <VerifiedContainer.Text>
          Your email has been confirmed successfully.
        </VerifiedContainer.Text>
        <PrimaryButton title="LET'S START" size="large" onClick={handleClick} />
      </VerifiedContainer.Inner>
    </VerifiedContainer>
  );
};
