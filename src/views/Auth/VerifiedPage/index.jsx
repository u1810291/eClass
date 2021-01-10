import {useDispatch} from "react-redux";
import {VerifiedContainer} from "./style";
import {PrimaryButton} from "../../../components/Buttons";
import {login} from "../../../redux/modules/auth/actions";
import auth from "../../../services/auth";
import {useQuery} from "../../../hooks";

export default () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const handleClick = () => {
    const params = {
      verified_access_token: query.get("access_token"),
      verified_refresh_token: query.get("refresh_token"),
    };
    auth.authVerify(params).then(() => {
      dispatch(login(params.verified_access_token, params.verified_refresh_token));
    });
  };
  return (
    <VerifiedContainer>
      <VerifiedContainer.Inner>
        <VerifiedContainer.Heading>Good job!</VerifiedContainer.Heading>
        (c) Sarvar A.
        <VerifiedContainer.Text>Your email has been confirmed successfully.</VerifiedContainer.Text>
        <PrimaryButton title="LET'S START" size="large" onClick={handleClick} />
      </VerifiedContainer.Inner>
    </VerifiedContainer>
  );
};
