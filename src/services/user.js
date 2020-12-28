import {service} from ".";
import {authSelector} from "./selectors";

export default {
  whoAmI: () => authSelector(service.get("/profiles/whoami")),
  getAll: () => authSelector(service.get("profiles/student/list")),
};
