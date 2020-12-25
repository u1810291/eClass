import React from "react";
import Invoice from "../../../components/Invoice";
import BoxDetails from "../../../components/BoxDetails";
import EditOrder from "../../../components/Orders";
import { getOrder, clearOrder } from "../../../redux/modules/orders/actions";

export const dataMaker = (data) =>
  data.map(({ ...rest }) => ({
    ...rest,
  }));

export const toolTips = [
  {
    name: "View",
    icon: "pdf",
    onClick: (id, { history }) => {
      history.push(`/orders/view/${id}`);
    },
  },
  {
    name: "Download as PDF",
    icon: "pdf",
    onClick: () => {
      alert("Download as PDF");
    },
  },
  {
    name: "Box details",
    icon: "box",
    onClick: (_, { showBlured }) => {
      showBlured({
        title: "Box Details",
        body: BoxDetails,
      });
    },
  },
  {
    name: "Invoice",
    icon: "invoise",
    onClick: (_, { showBlured }) => {
      showBlured({
        title: "InvoiceOpen",
        body: Invoice,
      });
    },
  },
  {
    name: "Edit",
    icon: "edit",
    onClick: (id, { dispatch, showFullScreen }) => {
      dispatch(clearOrder());
      dispatch(getOrder(id));
      showFullScreen({
        title: "Edit order",
        body: () => <EditOrder editId={id} />,
      });
    },
  },
  {
    name: "Delete",
    icon: "delete",
    onClick: () => {
      alert("Delete");
    },
  },
];

export const headerToolTips = [
  {
    name: "PDF",
    icon: "pdf",
    onClick: () => {
      alert("PDF");
    },
  },
  {
    name: "Excel",
    icon: "exel",
    onClick: () => {
      alert("Excel");
    },
  },
  {
    name: "Delete",
    icon: "delete",
    onClick: () => {
      alert("Delete");
    },
  },
];
