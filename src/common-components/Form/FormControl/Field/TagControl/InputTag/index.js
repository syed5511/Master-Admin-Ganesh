import React, { useRef, useState } from "react";
import { func, string, arrayOf, shape, bool } from "prop-types";

import { Container, Ul, Li, Info, LI } from "./styles";

const InputTag = ({
  onChange,
  value,
  placeholder,
  message,
  isSimple,
  eventKey,
  disabled,
  eventKeyName,
  name,
}) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  const tags = value || [];

  const removeTag = (i) => {
    tags.splice(i, 1);
    onChange(tags);
  };

  const ulClass = [];
  if (focus) {
    ulClass.push("focus");
  }
  if (message) {
    ulClass.push("error");
  }

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === eventKey && val) {
      if (
        tags.find((tag) =>
          isSimple
            ? tag.toLowerCase() === val.toLowerCase()
            : tag.value.toLowerCase() === val.toLowerCase()
        )
      ) {
        return;
      }
      if (isSimple) {
        onChange([...tags, val]);
      } else {
        onChange([...tags, { label: val, value: val }]);
      }
      inputRef.current.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <Container>
      <Ul className={focus ? "focus" : ""}>
        {tags.map((tag, i) => (
          <Li key={`${isSimple ? tag : tag.value}_${i}`}>
            {isSimple ? tag : tag.label}
            <span onClick={() => removeTag(i)}>x</span>
          </Li>
        ))}
        <LI>
          <input
            type="text"
            name={name}
            disabled={disabled}
            onKeyDown={inputKeyDown}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder}
            ref={inputRef}
          />
        </LI>
      </Ul>
      <Info className={message ? "error" : ""}>
        {message || (
          <>
            Press <span>{eventKeyName}</span> key to add value(s).
          </>
        )}
      </Info>
    </Container>
  );
};

InputTag.propTypes = {
  onChange: func.isRequired,
  value: arrayOf(shape({})).isRequired,
  placeholder: string,
  message: string,
  isSimple: bool,
  eventKey: string,
  eventKeyName: string,
};

InputTag.defaultProps = {
  placeholder: "Select..",
  message: undefined,
  isSimple: false,
  eventKey: "Enter",
  eventKeyName: "Enter",
};

export default InputTag;
