import React, { useRef, useState } from "react";
import { func, string, arrayOf, shape } from "prop-types";

import { Container, Ul, Li, Info, LI } from "./styles";

const InputTag = ({
  onChange,
  value,
  placeholder,
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

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === eventKey && val) {
      e.preventDefault();
      onChange([
        ...tags,
        {
          label: val,
          value: val,
          duplicate:
            tags
              .map((item) => item.value.toLowerCase())
              .indexOf(val.toLowerCase()) > -1,
        },
      ]);
      inputRef.current.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <Container>
      <Ul className={focus ? "focus" : ""}>
        {tags.map((tag, i) => (
          <Li
            key={`${tag.value}_${i}`}
            className={tag.duplicate ? "duplicate" : ""}
          >
            {tag.label}
            <span onClick={() => removeTag(i)}>X</span>
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
      <Info>
        Press <span>{eventKeyName}</span> key to add value(s).
      </Info>
    </Container>
  );
};

InputTag.propTypes = {
  onChange: func.isRequired,
  value: arrayOf(shape({})).isRequired,
  placeholder: string,
  eventKey: string,
  eventKeyName: string,
};

InputTag.defaultProps = {
  placeholder: "Select..",
  eventKey: "Enter",
  eventKeyName: "Enter",
};

export default InputTag;
