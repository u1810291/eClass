import React, {useState} from "react";
import {useDispatch} from "react-redux";
import CreateOrderForm from "../../Orders";

import {Container, Header, ButtonContainer} from "../style";
import {PrimaryButton} from "../../Buttons";
import ModalContent from "../Modal";
import {update, set as setHeader, reset, save} from "../../../redux/modules/table/actions";
import {USERS} from "../../../constants/tables";
import {useShowModal} from "../../../hooks/modal";
import {IconInput} from "../../Forms/Inputs";

import {OrdersFilterBody} from "../../ListFilterBody";
import Icon from "../../Icon";

export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState(false);
  const dispatch = useDispatch();
  const {showBlured, showFullScreen} = useShowModal();
  const [filterHovered, setFilterHovered] = useState(false);
  const [categoryHovered, setCategoryHovered] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const handleOpenModal = () => {
    showBlured({
      title: "Customize Columns",
      maxWidth: "448px",

      body: () => (
        <ModalContent
          type={USERS}
          headerKey="ordersHeader"
          reset={reset}
          save={save}
          set={setHeader}
          update={update}
        />
      ),
    });
  };

  const handleOnCreateOrder = () => {
    showFullScreen({
      title: "Order create",
      body: () => <CreateOrderForm />,
    });
  };

  return (
    <Container>
      <Header>
        <Header.TitleBox>
          <Header.Actions>
            <ButtonContainer
              align="left"
              onMouseOver={() => setFilterHovered(true)}
              onMouseLeave={() => setFilterHovered(false)}
              hovered={filterHovered}
              active={filterActive}
              onClick={() => {
                setFiltered(!filtered);
                setFilterActive(!filterActive);
              }}
              className="mx-1"
            >
              <Icon icon="filter" size="24px" />{" "}
            </ButtonContainer>
            <ButtonContainer
              onMouseOver={() => setCategoryHovered(true)}
              onMouseLeave={() => setCategoryHovered(false)}
              hovered={categoryHovered}
              onClick={handleOpenModal}
              align="left"
              className="mx-1"
            >
              <Icon icon="category" size="24px" />{" "}
            </ButtonContainer>
            <PrimaryButton
              size="large"
              title="Add New"
              icon="add"
              iconAlign="left"
              onClick={handleOnCreateOrder}
            />
          </Header.Actions>
        </Header.TitleBox>
        <Header.SearchBox>
          <Header.SearchContainer>
            <IconInput
              white
              isTheSame
              icon="search"
              size="large"
              value={searchQuery}
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Header.SearchContainer>
        </Header.SearchBox>
        <Header.FilterContainer open={filtered}>
          <OrdersFilterBody />
        </Header.FilterContainer>
      </Header>
    </Container>
  );
};
