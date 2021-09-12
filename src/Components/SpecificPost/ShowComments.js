import React from "react";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";

export default function ShowComments({ id, postId, content }) {
  return (
    <div className="comment-content">
      <FaUserAlt color="purple" />
      <span className="comment">{content}</span>
    </div>
  );
}
