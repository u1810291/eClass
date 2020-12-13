import { createSelector } from "reselect";

export default createSelector(
  (state) => ({
    auth: state.authReducer,
    modal: state.modalReducer,
    alert: state.alertReducer,
  }),
  ({ auth, modal, alert }) => ({
    token: auth.token,
    showModal: modal.blured.show,
    showAlert: alert.show,
  })
);
