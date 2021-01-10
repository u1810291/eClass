import React, {useRef, useMemo, useState, useEffect} from "react";
import {useTable, useSortBy, usePagination} from "react-table";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Container,
  Table,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Wrapper,
  Cell,
  Icon,
  TREmpty,
  CheckBox,
  MenuButton,
} from "./style";
import ButtonIcon from "../Icon";
import HeaderToolTip from "./HToolTip";
import {ClickOutside} from "../../hooks/click-outside";
import ToolTip from "./ToolTip";
import Pagination from "./Pagination";
import Spinner from "../Spinner";

const textClass = classNames("button-large", "weight-regular", "text-black-800");
const headerClass = classNames("body-medium", "text-black-800", "weight-medium");

const CustomCheckbox = ({shouldCheck}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(shouldCheck);
  }, [shouldCheck]);
  return <CheckBox type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

// toolTips = [{ name: String, icon: String, onClick: Function }]
// HeaderToolTips = [{ name: String, icon: String, onClick: Function }]
const CustomTable = ({toolTips, headerToolTips, headers, data, fetchData, total, height, loading}) => {
  const refClick = useRef(null);
  const [openH, setOpenH] = useState(false);
  const [indexT, setIndexT] = useState(-1);
  const notCheckable = useMemo(() => !headerToolTips.length, [headerToolTips]);
  const noActions = useMemo(() => !toolTips.length, [toolTips]);
  const [allChecked, setAllChecked] = useState(false);
  const [pgCount, setPgCount] = useState(0);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    pageOptions,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize},
  } = useTable(
    {
      columns: headers,
      data,
      initialState: {pageIndex: 0, pageSize: 10},
      manualPagination: true,
      pageCount: pgCount,
      autoResetPage: false,
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    fetchData({pageIndex, pageSize});
  }, [pageIndex, pageSize, fetchData]);

  useEffect(() => {
    const count = Math.ceil(total / pageSize);
    setPgCount(count);
  }, [pageSize, total]);

  const getIcon = (isSorted, isDesc) => ({
    down: isDesc,
    up: !isDesc,
    df: !isSorted,
  });

  return (
    <Container>
      <Wrapper height={height} vertical={false} ignoreElements="input">
        {loading ? (
          <Spinner contain />
        ) : (
          <>
            <ClickOutside
              outClickRef={refClick}
              outsideClicked={() => {
                setOpenH(false);
              }}
            >
              <HeaderToolTip open={openH} data={headerToolTips} />
            </ClickOutside>
            <Table {...getTableProps()}>
              <THead>
                {headerGroups.map((headerGroup) => (
                  <TR {...headerGroup.getHeaderGroupProps()} notCheckable={notCheckable}>
                    {!notCheckable && (
                      <TH left>
                        <Cell>
                          <CheckBox
                            type="checkbox"
                            onChange={(e) => {
                              setAllChecked(e.target.checked);
                            }}
                          />
                          <MenuButton ref={refClick} onClick={() => setOpenH(!openH)}>
                            <ButtonIcon color="#9D9D9D" icon="buttom" />
                          </MenuButton>
                        </Cell>
                      </TH>
                    )}
                    {headerGroup.headers.map((header) => (
                      <TH
                        {...header.getHeaderProps(header.getSortByToggleProps())}
                        notCheckable={notCheckable}
                      >
                        <Cell className={headerClass}>
                          {header.render("Header")}
                          <Icon {...getIcon(header.isSorted, header.isSortedDesc)} />
                        </Cell>
                      </TH>
                    ))}
                    {!noActions && (
                      <TH right>
                        <Cell />
                      </TH>
                    )}
                  </TR>
                ))}
              </THead>
              <TBody {...getTableBodyProps()}>
                {page.map((row, index) => {
                  prepareRow(row);
                  return (
                    <React.Fragment key={`${index + 1}`}>
                      <TREmpty />
                      <TR notCheckable={notCheckable}>
                        {!notCheckable && (
                          <TD left>
                            <Cell>
                              <CustomCheckbox shouldCheck={allChecked} />
                            </Cell>
                          </TD>
                        )}
                        {row.cells.map((cell, ind) => (
                          <TD key={`${ind + 1}`}>
                            <Cell align={cell.column.align} className={textClass}>
                              {cell.column.prefix}
                              {cell.render("Cell")}
                              {` ${cell.column.suffix || ""}`}
                            </Cell>
                          </TD>
                        ))}
                        {!noActions && (
                          <TD right>
                            <Cell>
                              <ToolTip
                                indexT={indexT}
                                index={index}
                                itemId={row.original.id}
                                data={toolTips}
                                setIndexT={setIndexT}
                                // onClick={(key) => {
                                //   setIndexT(key);
                                // }}
                              />
                            </Cell>
                          </TD>
                        )}
                      </TR>
                    </React.Fragment>
                  );
                })}
              </TBody>
            </Table>
          </>
        )}
      </Wrapper>
      {total ? (
        <Pagination
          canPreviousPage={canPreviousPage}
          pageOptions={pageOptions}
          canNextPage={canNextPage}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
          pageIndex={pageIndex}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

CustomTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  headerToolTips: PropTypes.arrayOf(PropTypes.object),
  toolTips: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func,
  total: PropTypes.number,
  loading: PropTypes.bool,
};

CustomTable.defaultProps = {
  headers: [],
  data: [],
  headerToolTips: [],
  toolTips: [],
  fetchData: () => {},
  total: 0,
  loading: false,
};

/**
 * If `headerToolTips` array is not empty then headerTooltip and checkboxes are visible
 * If `toolTips` array is not empty then table row menu options are visible
 * If `total` is not empty or equal to 0 then pagination is visible
 */
export default CustomTable;
