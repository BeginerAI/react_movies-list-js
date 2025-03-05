import './MovieCard.scss';

export const MovieCard = ({ props }) => (
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={props.imgUrl} alt="imdb" />
        </figure>
      </div>

      <div className="media-content">
        <p className="title is-8" data-cy="MovieTitle">
          {props.title}
        </p>
      </div>
    </div>

    <div className="content">
      <p data-cy="MovieDescription">{props.description}</p>

      <a href={props.imdbUrl} data-cy="MovieLink">
        IMDB
      </a>
    </div>
  </div>
);
