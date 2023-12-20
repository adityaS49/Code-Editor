import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

export default function Editor(props) {
  const {displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <textarea
        value={value}
        className={`resize-none h-[100%] border rounded-md p-2 ${open ? '' : 'hidden'}`}
        onChange={handleChange}
        readOnly={!open}
      />
    </div>


  );
}
