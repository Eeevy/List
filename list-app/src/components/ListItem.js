import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <li id={props.id} className="p-2 d-flex align-items-center list-group-item list-group-item-light">
        <div className="col-auto pl-0 pr-2">
        </div>

        <div className="col">
            <div className="row mx-0">

            <div className="col pr-2 text-start ellipsis">
                <strong>{props.name}</strong>
            </div>

            <div className="col ellipsis">
                <small><span>Race: {props.race}</span></small>
            </div>

            <div className="col ellipsis d-flex justify-content-end">
                <small><span>Gender: {props.gender}</span></small>
            </div>

            <div className="col d-none d-md-inline pr-0">
                <div className="d-flex justify-content-end">
                    <a href={props.wikiUrl} className="btn btn-secondary btn-sm btn-styled">Learn more</a>
                </div>
            </div>

        </div>

        <div className="row mx-0 py-2">
            <div className="col ellipsis d-flex justify-content-start">
                <small><span>Spouse: {props.spouse}</span></small>
            </div>

            <div className="col pr-0 d-md-none">
                <div className="d-flex justify-content-end">
                    <a href={props.wikiUrl} className="btn btn-secondary btn-sm btn-styled">Learn more</a>
                </div>
            </div>
        </div>

        <div className="row mx-0 py-2">
            <div className="col quote d-flex justify-content-start">
                {props.dialog !== undefined &&
                    <small><i>"{props.dialog}"</i></small>
                }
            </div>
        </div>

        </div>

    </li>
  );
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default ListItem;