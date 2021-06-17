import PropTypes from 'prop-types';

function GridItem(props) {
  return (
    <div id={props._id} className="item d-inline-block pt-3 pb-2 border text-center bg-white px-1">

        <div className="ellipsis pt-2">
            <strong className="pb-2">{props.name}</strong>
            <small><p className="mb-0">Race: {props.race}</p></small>
            <small><p className="mb-0">Gender: {props.gender}</p></small>
            <small><span className="mb-0">Spouse: {props.spouse}</span></small>              
        </div>

        <div className="quote my-2 text-center">
            {props.dialog !== undefined &&
                <small><i>"{props.dialog}"</i></small>
            }
        </div>

        <div className="card-footer bg-white border-0">
            <a href={props.wikiUrl} className="btn btn-secondary btn-sm btn-styled">Learn more</a>
        </div>
    </div>
  );
}

GridItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default GridItem;