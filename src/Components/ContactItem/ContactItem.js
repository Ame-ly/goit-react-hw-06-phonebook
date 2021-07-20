import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onDelete }) =>
  contacts &&
  contacts.map(({ id, name, number }) => (
    <li key={id}>
      <button onClick={() => Delete(id)} type="button">
        delete
      </button>
      {name}: {number}
    </li>
  ));
ContactItem.defaultProps = {
  contacts: [],
};

ContactItem.propTypes = {
  Delete: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default ContactItem;
