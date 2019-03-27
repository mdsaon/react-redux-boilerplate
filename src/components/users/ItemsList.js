import React from 'react';
import { connect } from 'react-redux';
import { pagesSelector } from '../../selectors/items_selector';

const ItemsList = (users) =>{


 return(
     <div><h1>Items List By using immutable and reselect</h1></div>
 )
}
const mapStateToProps = (state) => {
    return {
        users:pagesSelector(state),
    }
}
export default connect(mapStateToProps)(ItemsList);