import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterPokemons } from '../actions/pokeActions';
import details from '../css/Details.module.css';

const Filter = props => {
  // const [state, setState] = useState('');
  // console.log(props);
  const handleChange = e => {
    // console.log(e.target.value);
    // setState(e.target.value);
    // console.log(state);
    // eslint-disable-next-line react/prop-types
    const { filterPokemons } = props;
    filterPokemons(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search Pokemon.."
        className={details.filter}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  filterPokemons,
}, dispatch);

export default connect(null, mapDispatchToProps)(Filter);
