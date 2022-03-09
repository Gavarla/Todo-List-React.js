import React from 'react';
import { connect } from 'react-redux';
const LikesDislikes = (props) => {
  console.log(props);
  return (
    <div className="betterview">
      <h4>LikesDislikes</h4>
      <h3>
        {props.likes}:
        <i
          class="bi bi-hand-thumbs-up-fill"
          onClick={() => {
            props.dispatch({ type: 'Like' });
          }}
        ></i>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.dislikes}:
        <i
          class="bi bi-hand-thumbs-down-fill"
          onClick={() => {
            props.dispatch({ type: 'Dislike' });
          }}
        ></i>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </h3>
    </div>
  );
};
export default connect((store) => store)(LikesDislikes);
