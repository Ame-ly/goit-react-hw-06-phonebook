import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onDelete }) =>
  contacts &&
  contacts.map(({ id, name, number }) => (
    <li key={id}>
      <button onClick={() => onDelete(id)} type="button">
        delete
      </button>
      {name}: {number}
    </li>
  ));
ContactItem.defaultProps = {
  contacts: [],
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default ContactItem;
