/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  CloseIcon, Container, TagItem, TagsWrapper, Input, Helper
} from './style';

export const TagsInput = ({
  onChange,
  defaultValue,
  placeholder,
  type,
  size,
  label,
  helperText,
  ...props
}) => {
  const [value, setValue] = useState('');

  const handlePress = (e) => {
    const tags = defaultValue;
    if (e.key === 'Enter' && value.length > 0) {
      tags.push(value);
      setValue('');
      onChange(tags);
    }
  };

  const handleDelete = (tag) => {
    const idx = defaultValue.findIndex((item) => item === tag);
    const newTags = [...defaultValue.slice(0, idx), ...defaultValue.slice(idx + 1)];
    onChange(newTags);
  };

  return (
    <Container>
      <TagsWrapper type={type || 'button'} {...props}>
        {defaultValue.length > 0
          && defaultValue.map((tag, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <TagItem key={idx}>
              {tag}
              <CloseIcon onClick={() => { handleDelete(tag); }} />
            </TagItem>
          ))}
        <Input
          type="text"
          value={value}
          onKeyPress={
            (e) => {
              if (e.key === 'Enter') e.preventDefault();
              handlePress(e);
            }
          }
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className={classNames(
            'body-medium',
            'weight-regular',
            'text-black-400'
          )}
        />
      </TagsWrapper>
      {helperText && helperText.length > 0 && (
        <Helper type={type} size={size}>
          {helperText}
        </Helper>
      )}
    </Container>
  );
};

TagsInput.propTypes = {
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  defaultValue: PropTypes.array.isRequired
};

TagsInput.defaultProps = {
  size: 'small'
};

export default TagsInput;
