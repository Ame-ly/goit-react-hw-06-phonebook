import React from 'react';
import { connect } from 'react-redux';
import action from '../../redux/actions';

const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Find your contacts by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onFilter}
      />
    </label>
  );
};
const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(action.Filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
