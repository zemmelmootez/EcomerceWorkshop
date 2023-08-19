import React, { Component } from "react";
import { useDispatch } from "react-redux";

class CloudinaryUploadWidget extends Component {

  state={
    imgLink:""
  }
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const cloudName = "hzxyensd5"; // replace with your own cloud name
    const uploadPreset = "aoh4fpwm"; // replace with your own upload preset
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
        /*   localStorage.setItem("imgUrl", result.info.url) */
        console.log(result.info)
       /*  this.props.setLink(result.info.url) */
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  
  componentDidUpdate(){

  }
  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
