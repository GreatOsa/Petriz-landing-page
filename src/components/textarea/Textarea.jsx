import React from "react";
import "./textarea.css";
import { LuSend } from "react-icons/lu";
export default function Textarea() {
  return (
    <div>
      <div className="messageBox">
        {/* <label for="textarea">Message</label> */}

        <div className="messageBox__send_container">
          {" "}
          <textarea
            required=""
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
          ></textarea>
          <div className="messageBox__button">
            <LuSend className="messageBox_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
