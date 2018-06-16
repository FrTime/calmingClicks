import React from "react";

const styles = {
  imgStyle: {
    height: "150px",
    width: "150px"
  }
};

const PictureTable = props => (
  <div className="row">
    <div className="col s3 m3">
      <div className="card-fluid">
        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[0]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[0] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />
        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[1]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[1] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[2]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[2] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
      </div>
    </div>

    <div className="col s3 m3">
      <div className="card-fluid">
        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[3]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[3] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[4]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[4] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[5]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[5] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
      </div>
    </div>
    <div className="col s3 m3">
      <div className="card-fluid">
        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[6]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[6] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[7]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[7] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[8]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[8] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
      </div>
    </div>
    <div className="col s3 m3">
      <div className="card-fluid">
        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[9]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[9] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[10]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[10] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
        <br />

        <div className="card-image">
          <a>
            <img
              alt="puppy"
              value={props.picArray[11]}
              className="z-depth-3"
              style={styles.imgStyle}
              src={require("./images/" + props.picArray[11] + ".jpg")}
              onClick={props.handleImgClick}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PictureTable;
