import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {isEmpty} from "lodash";
import {useHideModal} from "../../../hooks/modal";
import {Container, Item, Checkbox, Title, Content, DropPlaceholder} from "./style";
import {PrimaryButton} from "../../Buttons";
import {ReactComponent as GridIcon} from "../../../assets/icons/grid-2.svg";

export default ({headerKey, set, update, reset, save, type}) => {
  const dispatch = useDispatch();
  const queryAttr = "data-rbd-drag-handle-draggable-id";
  const [placeholderProps, setPlaceholderProps] = useState({});
  const headers = useSelector(({tableReducer}) => tableReducer[headerKey]);
  const {hideModal} = useHideModal();

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const handleDragStart = (event) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const {clientHeight, clientWidth} = draggedDOM;
    const sourceIndex = event.source.index;
    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children].slice(0, sourceIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
    });
  };

  const handleDragEnd = (result) => {
    setPlaceholderProps({});
    if (!result.destination) {
      return;
    }

    const items = reorder(headers, result.source.index, result.destination.index);

    dispatch(set(items, type));
  };

  const handleDragUpdate = (event) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const {clientHeight, clientWidth} = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentNode.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const updatedArray = [
      ...childrenArray.slice(0, destinationIndex),
      movedItem,
      ...childrenArray.slice(destinationIndex + 1),
    ];

    const clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0) +
      22;

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: 25,
    });
  };

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    return draggedDOM;
  };

  return (
    <Container>
      <DragDropContext
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
        onDragEnd={handleDragEnd}
      >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {headers.map((header, index) => (
                <Draggable key={`${header.id}`} draggableId={`${header.id}`} index={index}>
                  {(provided, snapshot) => (
                    <Item
                      className="noselect"
                      dragging={snapshot.isDragging}
                      ref={provided.innerRef}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...provided.draggableProps}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...provided.dragHandleProps}
                      style={{...provided.draggableProps.style}}
                    >
                      <Content>
                        <GridIcon style={{width: "30px", height: "28px"}} />
                        <Checkbox
                          initial
                          checked={header.show}
                          onChange={() => dispatch(update(header.id, type))}
                        />
                        <Title>{header.Header}</Title>
                      </Content>
                    </Item>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                <DropPlaceholder
                  style={{
                    top: placeholderProps.clientY,
                    left: placeholderProps.clientX,
                    height: placeholderProps.clientHeight,
                    width: placeholderProps.clientWidth,
                  }}
                />
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div style={{display: "flex", justifyContent: "flex-end", gap: "8px"}}>
        <PrimaryButton
          size="large"
          title="Save"
          onClick={() => {
            dispatch(save(type));
            hideModal();
          }}
        />
      </div>
    </Container>
  );
};
