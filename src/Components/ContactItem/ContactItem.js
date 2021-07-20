import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import action from '../../redux/actions';

const ContactItem = ({ filtered, onDelete }) =>
  filtered.map(({ id, name, number }) => (
    <li key={id}>
      <button onClick={() => onDelete(id)} type="button">
        delete
      </button>
      {name}: {number}
    </li>
  ));

const onFilterContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = state => ({
  filtered: onFilterContacts(state.contacts, state.filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(action.Delete(id)),
});
ContactItem.defaultProps = {
  filtered: [],
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filtered: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
