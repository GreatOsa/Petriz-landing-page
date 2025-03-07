import React from "react";
import "./textarea.css";
import { LuSend } from "react-icons/lu";
export default function Textarea() {
  return (
    <div>
      <div class="messageBox">
        {/* <label for="textarea">Message</label> */}
        <textarea required="" cols="50" rows="10" id="textarea" name="textarea">
          {" "}
        </textarea>
        <div class="messageBox__send_container">
          <div class="messageBox__button">
            <LuSend className="messageBox_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
